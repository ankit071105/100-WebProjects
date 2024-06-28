document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.querySelector('.like-btn');
    const commentBtn = document.querySelector('.comment-btn');
    const shareBtn = document.querySelector('.share-btn');
    const submitCommentBtn = document.querySelector('.submit-comment-btn');
    const commentsList = document.querySelector('.comments-list');
    const commentInput = document.querySelector('.comment-section input');

    likeBtn.addEventListener('click', () => {
        alert('Post liked!');
    });

    commentBtn.addEventListener('click', () => {
        commentInput.focus();
    });

    shareBtn.addEventListener('click', () => {
        alert('Post shared!');
    });

    submitCommentBtn.addEventListener('click', () => {
        const commentText = commentInput.value;
        if (commentText.trim()) {
            const commentElement = document.createElement('div');
            commentElement.textContent = commentText;
            commentsList.appendChild(commentElement);
            commentInput.value = '';
        }
    });
});
