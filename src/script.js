// Core Generation Logic
export function getHooks(idea, type, tone) {
    const templates = {
        thought_leadership: [
            `Most people think ${idea} is a technical problem.\n\nIt's not. It's a psychology problem.`,
            `I spent 10 years learning about ${idea}.\n\nYou can learn the most important lesson in 30 seconds.`,
            `Unpopular opinion: ${idea} is the most underrated skill right now.`,
            `The difference between good and elite in ${idea} comes down to one thing.`,
            `Stop optimizing for ${idea}. Start optimizing for clarity.`
        ],
        story: [
            `I almost quit when I first started with ${idea}.`,
            `A simple conversation about ${idea} changed my entire career trajectory.`,
            `I used to be afraid of ${idea}.\n\nUntil I realized this one truth.`,
            `Last year, I failed miserably at ${idea}. Here's what I wish I knew then.`,
            `Everyone sees the results of ${idea}. Nobody sees the 5 AM starts.`
        ],
        lesson: [
            `The biggest lesson I've learned about ${idea} is also the simplest.`,
            `Stop trying to get good at ${idea}.\n\nStart trying to understand the foundation.`,
            `If I could go back and give my younger self advice on ${idea}, I'd say this:`,
            `Success in ${idea} is 80% discipline and 20% strategy.`,
            `The best way to learn ${idea} is to teach it.`
        ],
        educational: [
            `How to get good at ${idea} (without the 10,000 hours).`,
            `The 3-step framework for ${idea} that actually works.`,
            `Most people fail at ${idea} because they miss this one step.`,
            `Want to master ${idea}? Follow this simple 5-day plan.`,
            `The secret to ${idea} isn't complexity. It's consistency.`
        ]
    };

    let result = templates[type] || templates.thought_leadership;
    if (tone === 'casual') {
        result = result.map(h =>
            h.replace(/trajectory/g, 'path')
             .replace(/master/gi, 'get good at')
             .replace(/understand/gi, 'get')
             .replace(/adhering/gi, 'sticking to')
        );
    }
    return result;
}

export function getBodies(idea, tone, audience, length) {
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
    return [`${intro}\n\n${core}\n\n${details}`];
}

export function getCTAs(pref) {
    return [pref || "What's the one thing you'd add to this?"];
}

export function getHashtags(idea, type) {
    const words = idea.split(' ').filter(w => w.length > 3).map(w => w.toLowerCase().replace(/[^a-z]/g, ''));
    const base = words[0] || 'strategy';
    const second = words[1] || 'growth';
    return [`#${base}`, `#${second}`, `#${type}`, `#strategy`];
}

export function generateLinkedInPost(inputs) {
    const { idea, tone, postType, audience, length, ctaPreference, includeHashtags } = inputs;

    const hooks = getHooks(idea, postType, tone);
    const bodies = getBodies(idea, tone, audience, length);
    const ctas = getCTAs(ctaPreference);
    const hashtags = includeHashtags ? getHashtags(idea, postType) : [];

    const randomIdx = Math.floor(Math.random() * hooks.length);
    const otherHooks = hooks.filter((_, i) => i !== randomIdx);

    return {
        id: Date.now(),
        post_type: postType,
        hook: hooks[randomIdx],
        post: bodies[0],
        cta: ctas[0],
        hashtags: hashtags,
        idea: idea,
        alt_versions: otherHooks.map(h => ({ hook: h })),
        all_hooks: hooks
    };
}

// DOM Manipulation Logic
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const postIdeaInput = document.getElementById('post-idea');
        const charCounter = document.getElementById('char-counter');
        const progressFill = document.getElementById('progress-fill');
        const generateBtn = document.getElementById('generate-btn');
        const compareBtn = document.getElementById('compare-btn');
        const clearBtn = document.getElementById('clear-btn');
        const postOutput = document.getElementById('post-output');
        const libraryList = document.getElementById('library-list');
        const librarySearch = document.getElementById('library-search');
        const toastContainer = document.getElementById('toast-container');
        const themeToggle = document.getElementById('theme-toggle');
        const avatarUpload = document.getElementById('avatar-upload');
        const comparisonModal = document.getElementById('comparison-modal');
        const comparisonGrid = document.getElementById('comparison-grid');
        const closeModal = document.getElementById('close-modal');

        let currentResult = null;

        // Initialize
        updateLibraryUI();
        initTheme();

        function initTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.body.setAttribute('data-theme', savedTheme);
            themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌓';
        }

        themeToggle.addEventListener('click', () => {
            const current = document.body.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            themeToggle.textContent = next === 'dark' ? '☀️' : '🌓';
        });

        // Avatar Logic
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('mockup-avatar')) {
                avatarUpload.click();
            }
        });

        avatarUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    document.querySelectorAll('.mockup-avatar').forEach(av => {
                        av.style.backgroundImage = `url(${event.target.result})`;
                        av.style.backgroundSize = 'cover';
                    });
                };
                reader.readAsDataURL(file);
            }
        });

        // Character Counter & Progress
        postIdeaInput.addEventListener('input', () => {
            const count = postIdeaInput.value.length;
            const max = 3000;
            charCounter.textContent = `${count} / ${max}`;
            
            const percent = Math.min((count / max) * 100, 100);
            progressFill.style.width = `${percent}%`;
            
            if (count > max) {
                progressFill.style.background = 'var(--error-red)';
                charCounter.classList.add('pulse');
            } else {
                charCounter.classList.remove('pulse');
                progressFill.style.background = count > max * 0.8 ? 'orange' : 'var(--primary-blue)';
            }
        });

        // Comparison Logic
        compareBtn.addEventListener('click', () => {
            if (!currentResult) return;
            comparisonGrid.innerHTML = '';
            currentResult.all_hooks.forEach(hook => {
                const card = document.createElement('div');
                card.className = 'card alt-version';
                card.style.margin = '0';
                card.textContent = hook;
                card.onclick = () => {
                    document.querySelector('[data-type="hook"]').textContent = hook;
                    const container = document.querySelector('.generated-post');
                    if (container) updateMockup(container);
                    comparisonModal.style.display = 'none';
                    showToast('Hook swapped!');
                };
                comparisonGrid.appendChild(card);
            });
            comparisonModal.style.display = 'flex';
        });

        closeModal.onclick = () => comparisonModal.style.display = 'none';
        window.onclick = (e) => { if (e.target === comparisonModal) comparisonModal.style.display = 'none'; };

        // Generate Logic
        generateBtn.addEventListener('click', () => {
            const postIdea = postIdeaInput.value.trim();
            if (!postIdea) {
                showToast('Please enter a post idea.', 'error');
                return;
            }

            // Skeleton Loading State
            postOutput.innerHTML = `
                <div class="card generated-post">
                    <div class="skeleton" style="width: 40%; height: 30px;"></div>
                    <div class="skeleton" style="width: 90%;"></div>
                    <div class="skeleton" style="width: 80%;"></div>
                    <div class="skeleton" style="width: 70%;"></div>
                </div>
            `;

            setTimeout(() => {
                const tone = document.querySelector('input[name="tone"]:checked').value;
                const postType = document.getElementById('post-type').value;
                const audience = document.getElementById('audience').value.trim();
                const length = document.getElementById('length').value;
                const ctaPreference = document.getElementById('cta').value.trim();
                const includeHashtags = document.getElementById('include-hashtags').checked;

                currentResult = generateLinkedInPost({
                    idea: postIdea, tone, postType, audience, length, ctaPreference, includeHashtags
                });

                renderPost(currentResult);
                compareBtn.style.display = 'inline-block';
                showToast('Drafts generated successfully!');
            }, 1200);
        });

        function showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.textContent = `${type === 'success' ? '✅' : '⚠️'} ${message}`;
            toastContainer.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        function createConfetti() {
            for (let i = 0; i < 30; i++) {
                const p = document.createElement('div');
                p.className = 'confetti-particle';
                p.style.left = Math.random() * 100 + 'vw';
                p.style.top = '-10px';
                p.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
                p.style.transform = `rotate(${Math.random() * 360}deg)`;
                document.body.appendChild(p);
                setTimeout(() => p.remove(), 2500);
            }
        }

        function renderPost(result) {
            postOutput.innerHTML = '';
            const postContainer = document.createElement('div');
            postContainer.className = 'generated-post';

            const header = document.createElement('div');
            header.className = 'post-type-header';
            const title = document.createElement('h3');
            title.textContent = `${result.post_type.replace('_', ' ')} Draft`;

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'actions-wrap';

            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.textContent = 'Copy';
            copyBtn.onclick = () => {
                const editedContent = Array.from(postContainer.querySelectorAll('.post-content-editable'))
                    .map(el => el.textContent).join('\n\n');
                navigator.clipboard.writeText(editedContent).then(() => showToast('Copied!'));
            };

            const saveBtn = document.createElement('button');
            saveBtn.className = 'save-btn';
            saveBtn.textContent = 'Save';
            saveBtn.onclick = () => {
                const editedPost = {
                    ...result,
                    hook: postContainer.querySelector('[data-type="hook"]').textContent,
                    post: postContainer.querySelector('[data-type="body"]').textContent,
                    cta: postContainer.querySelector('[data-type="cta"]').textContent,
                    hashtags: postContainer.querySelector('[data-type="tags"]').textContent.split(' ')
                };
                saveToLibrary(editedPost);
                createConfetti();
            };

            actionsDiv.appendChild(copyBtn);
            actionsDiv.appendChild(saveBtn);
            header.appendChild(title);
            header.appendChild(actionsDiv);
            postContainer.appendChild(header);

            const sections = [
                { label: 'Hook', content: result.hook, type: 'hook' },
                { label: 'Body', content: result.post, type: 'body' },
                { label: 'Call to Action', content: result.cta, type: 'cta' },
                { label: 'Hashtags', content: result.hashtags.join(' '), type: 'tags' }
            ];

            sections.forEach(sec => {
                const div = document.createElement('div');
                div.className = 'post-section';
                div.innerHTML = `<strong>${sec.label}</strong><div class="post-content-editable" contenteditable="true" data-type="${sec.type}">${sec.content}</div>`;
                div.querySelector('.post-content-editable').oninput = () => updateMockup(postContainer);
                postContainer.appendChild(div);
            });

            const mockup = document.createElement('div');
            mockup.className = 'mockup-container';
            mockup.innerHTML = `
                <div class="mockup-header">
                    <div class="mockup-avatar" title="Click to change photo"></div>
                    <div class="mockup-info"><div>You (PostGenius Architect)</div><div>Just now • 🌐</div></div>
                </div>
                <div class="mockup-body" id="mockup-text"></div>
                <div class="mockup-footer"><span>👍 Like</span><span>💬 Comment</span><span>🔁 Repost</span></div>
            `;
            postContainer.appendChild(mockup);
            postOutput.appendChild(postContainer);
            updateMockup(postContainer);
            postContainer.scrollIntoView({ behavior: 'smooth' });
        }

        function updateMockup(container) {
            const hook = container.querySelector('[data-type="hook"]').textContent;
            const body = container.querySelector('[data-type="body"]').textContent;
            const cta = container.querySelector('[data-type="cta"]').textContent;
            const tags = container.querySelector('[data-type="tags"]').textContent;
            container.querySelector('#mockup-text').textContent = `${hook}\n\n${body}\n\n${cta}\n\n${tags}`;
        }

        function saveToLibrary(post) {
            try {
                const library = JSON.parse(localStorage.getItem('post_library') || '[]');
                const idx = library.findIndex(item => item.id === post.id);
                if (idx > -1) library[idx] = post; else library.unshift(post);
                localStorage.setItem('post_library', JSON.stringify(library));
                updateLibraryUI();
            } catch (err) { showToast('Error saving.', 'error'); }
        }

        function updateLibraryUI(searchTerm = '') {
            let library = [];
            try { library = JSON.parse(localStorage.getItem('post_library') || '[]'); } catch (err) {}
            if (searchTerm) {
                const s = searchTerm.toLowerCase();
                library = library.filter(item => item.idea.toLowerCase().includes(s) || item.hook.toLowerCase().includes(s));
            }
            libraryList.innerHTML = '';
            if (library.length === 0) {
                libraryList.innerHTML = `
                    <svg class="empty-state-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    <p class="empty-msg" style="text-align: center;">No drafts found.</p>
                `;
                return;
            }
            library.forEach(item => {
                const div = document.createElement('div');
                div.className = 'library-item';
                div.innerHTML = `
                    <h4>${item.post_type.replace('_', ' ')}: ${item.idea.substring(0, 30)}...</h4>
                    <p class="preview">${item.hook}</p>
                    <div class="item-actions">
                        <button class="view-btn">View</button>
                        <button class="copy-btn secondary-btn">Copy</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                `;
                div.querySelector('.view-btn').onclick = () => renderPost(item);
                div.querySelector('.copy-btn').onclick = () => navigator.clipboard.writeText(`${item.hook}\n\n${item.post}\n\n${item.cta}\n\n${item.hashtags.join(' ')}`).then(() => showToast('Copied!'));
                div.querySelector('.delete-btn').onclick = () => {
                    let lib = JSON.parse(localStorage.getItem('post_library') || '[]');
                    localStorage.setItem('post_library', JSON.stringify(lib.filter(i => i.id !== item.id)));
                    updateLibraryUI();
                    showToast('Deleted.', 'error');
                };
                libraryList.appendChild(div);
            });
        }

        librarySearch.addEventListener('input', () => updateLibraryUI(librarySearch.value.trim()));
        clearBtn.addEventListener('click', () => {
            postIdeaInput.value = ''; charCounter.textContent = '0 / 3000'; progressFill.style.width = '0%';
            document.getElementById('audience').value = ''; document.getElementById('cta').value = '';
            postOutput.innerHTML = ''; compareBtn.style.display = 'none';
        });
    });
}
