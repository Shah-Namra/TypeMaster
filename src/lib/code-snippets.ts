export const codeSnippets = {
  javascript: `// JavaScript Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(sum); // 15`,

  typescript: `// TypeScript Interface
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isActive: true
};`,

  python: `# Python List Comprehension
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
evens = [x for x in numbers if x % 2 == 0]
print(squares)  # [1, 4, 9, 16, 25]
print(evens)    # [2, 4]`,

  'html/css': `<!-- HTML/CSS Example -->
<div class="card">
  <h2 class="title">Hello World</h2>
  <p class="content">Welcome to my website!</p>
</div>

<style>
.card {
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>`
};