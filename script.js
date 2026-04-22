document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-btn').addEventListener('click', () => {
        const postIdea = document.getElementById('post-idea').value;
        const tone = document.querySelector('input[name="tone"]:checked').value;
        const format = document.getElementById('format').value;
        const postOutput = document.getElementById('post-output');
        const copyBtn = document.getElementById('copy-btn');

        // Clear previous output
        postOutput.innerHTML = '';
        copyBtn.style.display = 'none';

        if (!postIdea) {
            const p = document.createElement('p');
            p.className = 'error';
            p.textContent = 'Please enter a post idea.';
            postOutput.appendChild(p);
            return;
        }

        let titleText = '';
        let bodyText = '';
        let hashtags = '';

        if (format === 'standard') {
            titleText = tone === 'professional' ? 'Professional Post' : 'Casual Post';
            bodyText = postIdea;
            hashtags = '#linkedin #postgenerator';
        } else if (format === 'question') {
            titleText = tone === 'professional' ? 'Question Post' : 'Casual Question';
            bodyText = `What are your thoughts on ${postIdea}?`;
            hashtags = '#question #discussion';
        } else if (format === 'story') {
            titleText = tone === 'professional' ? 'Story Post' : 'Casual Story';
            bodyText = `Let me tell you a story about ${postIdea}.`;
            hashtags = '#storytelling #linkedin';
        }

        const titleP = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = titleText;
        titleP.appendChild(strong);

        const bodyP = document.createElement('p');
        bodyP.textContent = bodyText;

        const hashtagsP = document.createElement('p');
        hashtagsP.textContent = hashtags;

        postOutput.appendChild(titleP);
        postOutput.appendChild(bodyP);
        postOutput.appendChild(hashtagsP);

        // Show copy button
        copyBtn.style.display = 'block';
    });

    document.getElementById('copy-btn').addEventListener('click', () => {
        const postOutput = document.getElementById('post-output');
        const textToCopy = postOutput.innerText;

        navigator.clipboard.writeText(textToCopy).then(() => {
            const copyBtn = document.getElementById('copy-btn');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});
