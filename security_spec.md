# Security Specification - LinkedIn Post Architect

## 1. Data Invariants
- A post must belong to a valid authenticated user.
- A user can only access (read/update/delete) their own posts.
- Posts must have a valid topic, hook, and content.
- Timestamps must be server-generated.

## 2. The Dirty Dozen Payloads (Rejection Tests)
1. Creating a post for another user (`userId` mismatch).
2. Creating a post without a `userId`.
3. Creating a post with a massive 1MB topic string.
4. Updating a post's `userId` to someone else.
5. Updating a post's `createdAt` timestamp.
6. Reading a post belonging to another user.
7. Deleting a post belonging to another user.
8. Using a non-alphanumeric string as a `postId`.
9. Adding a "ghost field" like `isAdmin: true` during creation.
10. Creating a post while unauthenticated.
11. Updating a post with an invalid `post_type`.
12. Injecting a massive array into the `hashtags` field.

## 3. Implementation Plan
- Default deny all.
- Implement `isValidId` and `isValidPost` helpers.
- Enforce `isOwner` for all operations.
- Enforce immutable `userId` and `createdAt`.
