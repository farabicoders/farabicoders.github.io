// Function to load and render markdown content
async function loadMarkdownPost() {
    try {
        // Get the markdown file name from the URL
        const markdownFile = window.location.pathname.split('/').pop().replace('.html', '.md');
        
        // Fetch the markdown content
        const response = await fetch(`../posts/${markdownFile}`);
        if (!response.ok) throw new Error('Failed to load post');
        
        const text = await response.text();
        
        // Convert markdown to HTML and insert into the page
        const contentElement = document.getElementById('content');
        if (contentElement) {
            contentElement.innerHTML = marked.parse(text);
            
            // Update the page title
            const titleElement = contentElement.querySelector('h1');
            if (titleElement) {
                document.title = titleElement.textContent + ' - FaraboCoders Blog';
            }
        }
    } catch (error) {
        console.error('Error loading post:', error);
        document.getElementById('content').innerHTML = '<p>Error loading post. Please try again later.</p>';
    }
}
