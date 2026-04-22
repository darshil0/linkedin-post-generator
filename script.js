document.addEventListener('DOMContentLoaded', () => {
    const postIdeaInput = document.getElementById('post-idea');
    const generateBtn = document.getElementById('generate-btn');
    const postOutput = document.getElementById('post-output');
    const copyBtn = document.getElementById('copy-btn');

    generateBtn.addEventListener('click', () => {
        const postIdea = postIdeaInput.value.trim();
        const tone = document.querySelector('input[name="tone"]:checked').value;
        const postType = document.getElementById('post-type').value;
        const audience = document.getElementById('audience').value.trim();
        const length = document.getElementById('length').value;
        const ctaPreference = document.getElementById('cta').value.trim();
        const includeHashtags = document.getElementById('include-hashtags').checked;

        // Clear previous output
        postOutput.innerHTML = '';
        copyBtn.style.display = 'none';

        if (!postIdea) {
            renderMessage('Please enter a post idea, notes, or a rough draft.', 'error');
            return;
        }

        // Basic validation for vague input
        if (postIdea.length < 5) {
            renderMessage('The input is a bit too short to generate a high-quality post. Could you provide a few more details?', 'clarification');
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

        if (result.status === 'success') {
            renderPost(result);
            copyBtn.style.display = 'block';
            // Store current post text for copying
            copyBtn.dataset.clipboardText = `${result.hook}\n\n${result.post}\n\n${result.cta}${result.hashtags.length > 0 ? '\n\n' + result.hashtags.join(' ') : ''}`;
        } else {
            renderMessage(result.clarification_needed, 'clarification');
        }
    });

    copyBtn.addEventListener('click', () => {
        const textToCopy = copyBtn.dataset.clipboardText;

        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });

    function renderMessage(message, type) {
        const div = document.createElement('div');
        div.className = type;
        div.textContent = message;
        postOutput.appendChild(div);
    }

    function renderPost(result) {
        const postContainer = document.createElement('div');
        postContainer.className = 'generated-post';

        const title = document.createElement('h3');
        title.textContent = `Generated ${result.post_type.replace('_', ' ')} Post`;
        postContainer.appendChild(title);

        const sections = [
            { label: 'Hook', content: result.hook },
            { label: 'Body', content: result.post },
            { label: 'CTA', content: result.cta }
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
            const altTitle = document.createElement('h3');
            altTitle.textContent = 'Alternate Versions';
            postContainer.appendChild(altTitle);

            result.alt_versions.forEach((alt, index) => {
                const altDiv = document.createElement('div');
                altDiv.className = 'alt-version';

                const h4 = document.createElement('h4');
                h4.textContent = `Option ${index + 1}`;

                const hookDiv = document.createElement('div');
                const hookLabel = document.createElement('strong');
                hookLabel.textContent = 'Hook: ';
                const hookText = document.createTextNode(alt.hook);
                hookDiv.appendChild(hookLabel);
                hookDiv.appendChild(hookText);

                const bodyDiv = document.createElement('div');
                bodyDiv.style.whiteSpace = 'pre-wrap';
                const bodyLabel = document.createElement('strong');
                bodyLabel.textContent = 'Post:';
                const bodyText = document.createTextNode(`\n${alt.post}`);
                bodyDiv.appendChild(bodyLabel);
                bodyDiv.appendChild(bodyText);

                altDiv.appendChild(h4);
                altDiv.appendChild(hookDiv);
                altDiv.appendChild(bodyDiv);
                postContainer.appendChild(altDiv);
            });
        }

        postOutput.appendChild(postContainer);
    }

    function generateLinkedInPost(inputs) {
        const { idea, tone, postType, audience, length, ctaPreference, includeHashtags } = inputs;

        // In a real app, this would call an AI API.
        // For this static version, we use sophisticated template logic to simulate the "LinkedIn Agent".

        const hooks = getHooks(idea, postType, tone);
        const bodies = getBodies(idea, postType, tone, audience, length);
        const ctas = getCTAs(ctaPreference, postType);
        const hashtags = includeHashtags ? getHashtags(idea, postType) : [];

        return {
            status: "success",
            post_type: postType,
            hook: hooks[0],
            post: bodies[0],
            cta: ctas[0],
            hashtags: hashtags,
            alt_versions: [
                {
                    hook: hooks[1],
                    post: bodies[1]
                },
                {
                    hook: hooks[2],
                    post: bodies[2]
                }
            ]
        };
    }

    function getHooks(idea, type, tone) {
        const templates = {
            thought_leadership: [
                `Most people think ${idea} is about one thing. They're wrong.`,
                `I spent years thinking about ${idea}. Here's the one thing I finally realized.`,
                `${idea} is changing faster than we realize.`
            ],
            story: [
                `I'll never forget the day I first encountered ${idea}.`,
                `It started with a simple observation about ${idea}.`,
                `I used to struggle with ${idea}. Then everything changed.`
            ],
            lesson: [
                `Here is the biggest lesson I've learned about ${idea}.`,
                `${idea} taught me more than any textbook ever could.`,
                `If I could go back and tell myself one thing about ${idea}, it would be this.`
            ],
            update: [
                `I’m excited to share a quick update regarding ${idea}.`,
                `Big things are happening with ${idea}.`,
                `Grateful to be reaching a new milestone in ${idea}.`
            ],
            announcement: [
                `It’s finally here: we’re launching something new for ${idea}.`,
                `We’ve been working behind the scenes on ${idea}, and today is the day.`,
                `The future of ${idea} just got a lot more interesting.`
            ],
            hiring: [
                `We're looking for someone who lives and breathes ${idea}.`,
                `Our team is growing, and we need an expert in ${idea}.`,
                `Know anyone who is passionate about ${idea}? We're hiring.`
            ],
            educational: [
                `How to master ${idea} in 3 simple steps.`,
                `Stop making this common mistake with ${idea}.`,
                `Everything you need to know about ${idea} (in 2 minutes).`
            ],
            opinion: [
                `Unpopular opinion: ${idea} is overrated.`,
                `${idea} is the most underrated skill in the industry right now.`,
                `We need to have an honest conversation about ${idea}.`
            ]
        };

        let result = templates[type] || templates.thought_leadership;
        if (tone === 'casual') {
            result = result.map(h => h.replace('I encountered', 'I ran into').replace('milestone', 'win'));
        }
        return result;
    }

    function getBodies(idea, type, tone, audience, length) {
        const aud = audience ? ` to all the ${audience} out there` : "";
        const intro = tone === 'professional' ? `In my experience with ${idea}${aud}, I've noticed a pattern.` : `So, I was thinking about ${idea}${aud} the other day.`;

        const core_point = `The real key isn't just working harder, but understanding how ${idea} actually creates value. It's about specificity and consistency.`;

        const details = {
            short: "Keep it simple. Focus on the core objective and ignore the noise.",
            medium: "When we dive deeper, we see that it's the small adjustments that lead to the biggest breakthroughs. It's not about a total overhaul, but about refined execution.",
            long: "Most professionals overlook the foundational elements. By focusing on the underlying principles of ${idea}, you can build a system that scales. This requires patience, a willingness to iterate, and a clear vision of the end goal. Success doesn't happen overnight, but it does happen with a disciplined approach."
        };

        const variation1 = `${intro}\n\n${core_point}\n\n${details[length]}`;
        const variation2 = `Here is the truth about ${idea}:\n\n1. It's harder than it looks.\n2. It's more rewarding than you think.\n3. Most people give up too early.\n\n${details[length]}`;
        const variation3 = `Let's talk about ${idea}.\n\nI see a lot of people struggling with this. But it doesn't have to be complicated. If you focus on the basics and keep showing up, the results will follow.`;

        return [variation1, variation2, variation3];
    }

    function getCTAs(pref, type) {
        const defaultCTA = pref || "What's your take on this?";
        return [
            defaultCTA,
            "Drop a comment below with your thoughts.",
            "If you found this useful, feel free to share it with your network."
        ];
    }

    function getHashtags(idea, type) {
        const base = idea.split(' ')[0].toLowerCase();
        return [`#${base}`, `#${type}`, `#networking`, `#professionalgrowth`];
    }
});
