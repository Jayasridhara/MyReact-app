# React Repo for FSD-C-WE-T-B23

## Steps to initialize the project as a Git Repo

1. **Initialize Git**: Open your terminal and navigate to the project directory. Run:

```bash
git init
```

2. Visit [GitHub](https://github.com) and create a new repository. Do not initialize it with a README, .gitignore, or license.

3. **Add Remote Origin**: After creating the repository, copy the remote URL and run:

```bash
git remote add origin <your-repo-url>
```

4. **Rename the default branch**: If your Git version is 2.28 or later, you can set the default branch name to `main` by running:

```bash
git branch -M main
```

5. **Add Files**: Add all files to the staging area:

```bash
git add .
```

6. **Commit Changes**: Commit the changes with a message:

```bash
git commit -m "Initial commit"
```

7. **Push to GitHub**: Finally, push your changes to the remote repository:

```bash
git push -u origin main
```

#### Component

- Component are the building blocks of React applications.
- They are reusable pieces of code that can be composed to create complex UIs.

#### JSX

- JavaScript XML (JSX) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.

#### Props Drilling

- Props drilling refers to the process of passing data from a parent component to a deeply nested child component through multiple layers of components.

ComponentA (data)

- return ComponentB (data) - return ComponentC (data) - return ComponentD (data)

Disadvantages of Props Drilling:

- It can make the code harder to read and maintain.
- It can lead to unnecessary re-renders of components that do not need the data.
- The data is passed through multiple layers of components, which might not need it, leading to performance issues.

#### Solution to Props Drilling

- Use Context API.
