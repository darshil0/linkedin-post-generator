import { describe, it, expect } from 'vitest';
import * as script from './script.js';

const { getHooks, getBodies, getCTAs, getHashtags, generateLinkedInPost } = script.default || script;

describe('LinkedIn Post Generation Logic', () => {
    const idea = "Remote work benefits";

    it('should generate correct hooks for thought leadership', () => {
        const hooks = getHooks(idea, 'thought_leadership', 'professional');
        expect(hooks).toHaveLength(3);
        expect(hooks[0]).toContain(idea);
        expect(hooks[0]).toContain('technical problem');
    });

    it('should adjust tone to casual in hooks', () => {
        const hooks = getHooks(idea, 'story', 'casual');
        expect(hooks[1]).toContain('path');
        expect(hooks[1]).not.toContain('trajectory');
    });

    it('should generate bodies with correct length', () => {
        const bodyShort = getBodies(idea, 'educational', 'professional', '', 'short');
        const bodyLong = getBodies(idea, 'educational', 'professional', '', 'long');
        expect(bodyLong[0].length).toBeGreaterThan(bodyShort[0].length);
    });

    it('should include audience in the body if provided', () => {
        const audience = "Junior Developers";
        const body = getBodies(idea, 'educational', 'professional', audience, 'medium');
        expect(body[0]).toContain(audience);
    });

    it('should return custom CTA if provided', () => {
        const customCta = "Join my newsletter!";
        const ctas = getCTAs(customCta);
        expect(ctas[0]).toBe(customCta);
    });

    it('should return default CTA if none provided', () => {
        const ctas = getCTAs("");
        expect(ctas[0]).toBe("What's the one thing you'd add to this?");
    });

    it('should generate correct hashtags', () => {
        const hashtags = getHashtags("AI in Marketing", "educational");
        expect(hashtags).toContain("#ai");
        expect(hashtags).toContain("#educational");
    });

    it('should assemble a full post object correctly', () => {
        const inputs = {
            idea,
            tone: 'professional',
            postType: 'thought_leadership',
            audience: 'Managers',
            length: 'medium',
            ctaPreference: 'Let me know.',
            includeHashtags: true
        };
        const result = generateLinkedInPost(inputs);
        expect(result).toHaveProperty('hook');
        expect(result).toHaveProperty('post');
        expect(result).toHaveProperty('cta');
        expect(result.hashtags.length).toBeGreaterThan(0);
        expect(result.alt_versions).toHaveLength(2);
    });
});
