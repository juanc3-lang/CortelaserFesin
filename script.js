let posts = [];

function openBlogModal() {
    document.getElementById('blogModal').style.display = 'block';
}

function closeBlogModal() {
    document.getElementById('blogModal').style.display = 'none';
    document.getElementById('blogForm').reset();
}

function addBlogPost(e) {
    e.preventDefault();
    
    const title = document.getElementById('postTitle').value;
    const date = document.getElementById('postDate').value;
    const content = document.getElementById('postContent').value;
    const image = document.getElementById('postImage').value;

    const newPost = { title, date, content, image };
    posts.unshift(newPost);

    renderBlogPosts();
    closeBlogModal();
}

function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    
    const postsHTML = posts.map(post => `
        <div class="blog-card">
            <img src="${post.image}" alt="Blog" onerror="this.src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400'">
            <div class="blog-content">
                <p class="blog-date">${post.date}</p>
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </div>
        </div>
    `).join('');

    blogGrid.innerHTML = postsHTML + blogGrid.innerHTML;
}

function handleContact(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    e.target.reset();
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

window.onclick = function(event) {
    const modal = document.getElementById('blogModal');
    if (event.target === modal) {
        closeBlogModal();
    }
}