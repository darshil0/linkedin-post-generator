document.addEventListener('DOMContentLoaded', () => {
    const postIdeaInput = document.getElementById('post-idea');
    const generateBtn = document.getElementById('generate-btn');
    const postOutput = document.getElementById('post-output');
    const libraryList = document.getElementById('library-list');
    const toastContainer = document.getElementById('toast-container');

    // Initialize Library
    updateLibraryUI();

    generateBtn.addEventListener('click', () => {
        const postIdea = postIdeaInput.value.trim();
        const tone = document.querySelector('input[name="tone"]:checked').value;
        const postType = document.getElementById('post-type').value;
        const audience = document.getElementById('audience').value.trim();
        const length = document.getElementById('length').value;
        const ctaPreference = document.getElementById('cta').value.trim();
        const includeHashtags = document.getElementById('include-hashtags').checked;

        if (!postIdea) {
            showToast('Please enter a post idea.', 'error');
            return;
        }

        if (postIdea.length < 5) {
            showToast('Input too short for a high-quality post.', 'error');
            return;
        }

        const result = generateLinkedInPost({
            idea: postIdea,
            tone,
            postType,
            audience,
            length,
            ctaPreference,
            includeHashtags
        });

        renderPost(result);
        showToast('Drafts generated successfully!');
    });

    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function renderPost(result) {
        postOutput.innerHTML = '';
        const postContainer = document.createElement('div');
        postContainer.className = 'generated-post';

        const header = document.createElement('div');
        header.className = 'post-type-header';
        const title = document.createElement('h3');
        title.textContent = `${result.post_type.replace('_', ' ')} Draft`;

        const saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = 'Save to Library';
        saveBtn.onclick = () => saveToLibrary(result);

        header.appendChild(title);
        header.appendChild(saveBtn);
        postContainer.appendChild(header);

        const sections = [
            { label: 'Hook (Pattern Interrupt)', content: result.hook },
            { label: 'Body (The Slide)', content: result.post },
            { label: 'Call to Action', content: result.cta }
        ];

        if (result.hashtags && result.hashtags.length > 0) {
            sections.push({ label: 'Hashtags', content: result.hashtags.join(' ') });
        }

        sections.forEach(sec => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'post-section';
            const label = document.createElement('strong');
            label.textContent = sec.label;
            const content = document.createElement('div');
            content.className = 'post-content';
            content.textContent = sec.content;
            sectionDiv.appendChild(label);
            sectionDiv.appendChild(content);
            postContainer.appendChild(sectionDiv);
        });

        // Alternate Versions
        if (result.alt_versions && result.alt_versions.length > 0) {
            const altTitle = document.createElement('strong');
            altTitle.textContent = 'ALTERNATE HOOKS & ANGLES';
            postContainer.appendChild(altTitle);

            result.alt_versions.forEach((alt, index) => {
                const altDiv = document.createElement('div');
                altDiv.className = 'alt-version';

                const label = document.createElement('strong');
                label.textContent = `Option ${index + 1}: `;

                const content = document.createTextNode(alt.hook);

                altDiv.appendChild(label);
                altDiv.appendChild(content);
                postContainer.appendChild(altDiv);
            });
        }

        postOutput.appendChild(postContainer);
        postContainer.scrollIntoView({ behavior: 'smooth' });
    }

    function generateLinkedInPost(inputs) {
        const { idea, tone, postType, audience, length, ctaPreference, includeHashtags } = inputs;

        const hooks = getHooks(idea, postType, tone);
        const bodies = getBodies(idea, postType, tone, audience, length);
        const ctas = getCTAs(ctaPreference, postType);
        const hashtags = includeHashtags ? getHashtags(idea, postType) : [];

        return {
            id: Date.now(),
            post_type: postType,
            hook: hooks[0],
            post: bodies[0],
            cta: ctas[0],
            hashtags: hashtags,
            idea: idea,
            alt_versions: [
                { hook: hooks[1] },
                { hook: hooks[2] }
            ]
        };
    }

    function getHooks(idea, type, tone) {
        const templates = {
            thought_leadership: [
                `Most people think ${idea} is a technical problem.\n\nIt's not. It's a psychology problem.`,
                `I spent 10 years learning about ${idea}.\n\nYou can learn the most important lesson in 30 seconds.`,
                `Unpopular opinion: ${idea} is the most underrated skill right now.`
            ],
            story: [
                `I almost quit when I first started with ${idea}.`,
                `A simple conversation about ${idea} changed my entire career trajectory.`,
                `I used to be afraid of ${idea}.\n\nUntil I realized this one truth.`
            ],
            lesson: [
                `The biggest lesson I've learned about ${idea} is also the simplest.`,
                `Stop trying to "master" ${idea}.\n\nStart trying to understand the foundation.`,
                `If I could go back and give my younger self advice on ${idea}, I'd say this:`
            ],
            educational: [
                `How to master ${idea} (without the 10,000 hours).`,
                `The 3-step framework for ${idea} that actually works.`,
                `Most people fail at ${idea} because they miss this one step.`
            ]
        };

        let result = templates[type] || templates.thought_leadership;
        if (tone === 'casual') {
            result = result.map(h => h.replace('trajectory', 'path').replace(/Master/g, 'get good at').replace(/master/g, 'get good at'));
        }
        return result;
    }

    function getBodies(idea, type, tone, audience, length) {
        const aud = audience ? ` specifically for ${audience}` : "";
        const intro = tone === 'professional' 
            ? `In my experience with ${idea}${aud}, there is a clear divide between those who succeed and those who struggle.` 
            : `I've been thinking a lot about ${idea}${aud} lately.`;

        const core = `The secret isn't more data or better tools.\n\nIt's about human-centric systems and consistent iteration. We often overcomplicate ${idea} because we're afraid of the simple work.`;

        const detailsMap = {
            short: "Focus on the outcome, not the process.",
            medium: `When you strip away the noise, you find that the best approach to ${idea} is often the most direct one. It requires discipline, but the ROI is undeniable.`,
            long: `Most professionals overlook the foundational elements of ${idea}. By focusing on the underlying principles, you can build a system that scales.\n\nThis requires:\n1. Patience\n2. Willingness to fail\n3. Radical honesty\n\nSuccess doesn't happen overnight, but it does happen with a disciplined approach.`
        };

        const details = detailsMap[length] || detailsMap.medium;
        const variation1 = `${intro}\n\n${core}\n\n${details}`;
        return [variation1];
    }

    function getCTAs(pref, type) {
        return [pref || "What's the one thing you'd add to this?"];
    }

    function getHashtags(idea, type) {
        const base = idea.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
        return [`#${base}`, `#${type}`, `#strategy`, `#growth`];
    }

    // --- Persistence & Library Logic ---

    function saveToLibrary(post) {
        const library = JSON.parse(localStorage.getItem('post_library') || '[]');
        library.unshift(post);
        localStorage.setItem('post_library', JSON.stringify(library));
        updateLibraryUI();
        showToast('Saved to Architecture Library!');
    }

    function deleteFromLibrary(id) {
        let library = JSON.parse(localStorage.getItem('post_library') || '[]');
        library = library.filter(item => item.id !== id);
        localStorage.setItem('post_library', JSON.stringify(library));
        updateLibraryUI();
        showToast('Draft deleted.', 'error');
    }

    function updateLibraryUI() {
        const library = JSON.parse(localStorage.getItem('post_library') || '[]');
        libraryList.innerHTML = '';

        if (library.length === 0) {
            libraryList.innerHTML = '<p class="empty-msg">No saved drafts yet.</p>';
            return;
        }

        library.forEach(item => {
            const div = document.createElement('div');
            div.className = 'library-item';

            const title = document.createElement('h4');
            title.textContent = `${item.post_type.replace('_', ' ')}: ${item.idea.substring(0, 30)}...`;

            const preview = document.createElement('p');
            preview.className = 'preview';
            preview.textContent = item.hook;

            const actions = document.createElement('div');
            actions.className = 'item-actions';

            const loadBtn = document.createElement('button');
            loadBtn.textContent = 'View';
            loadBtn.onclick = () => renderPost(item);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = (e) => {
                e.stopPropagation();
                deleteFromLibrary(item.id);
            };

            actions.appendChild(loadBtn);
            actions.appendChild(deleteBtn);
            div.appendChild(title);
            div.appendChild(preview);
            div.appendChild(actions);
            libraryList.appendChild(div);
        });
    }
});
