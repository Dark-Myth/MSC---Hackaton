function renderFeeds() {
    const feedContainer = document.querySelector('.feed');
    const insertPost = document.querySelector('.insert-post');
    
    // Clear existing content except for the insert-post element
    feedContainer.innerHTML = '';
    feedContainer.appendChild(insertPost);

    feeds.forEach(feed => {
        const post = document.createElement('div');
        post.classList.add('post');

        const profilePic = feed.profilePic ? `<div class="profile-pic" style="background-image: url('${feed.profilePic}');"></div>` : '';
        const imageUrl = feed.imageUrl ? `<img src="${feed.imageUrl}" alt="Food Image">` : '';
        const text = feed.text ? `<p class="post-text">${feed.text}</p>` : '';

        post.innerHTML = `
            <div class="post-header">
                ${profilePic}
                <span class="username">${feed.username}</span>
            </div>
            <div class="post-content">
                ${imageUrl}
                ${text}
            </div>
            <div class="post-footer">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
            </div>
        `;

        feedContainer.appendChild(post);
    });
}

// Call the renderFeeds function to display the feeds
document.addEventListener('DOMContentLoaded', renderFeeds);