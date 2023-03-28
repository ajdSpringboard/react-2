### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

```It's purpose is to make handling web page navigation and routing easier for React apps.```

- What is a single page application?

```It is an application that runs on one page and updates the page dynamically as opposed to requesting separate pages from a server.```

- What are some differences between client side and server side routing?

```With server-side routing, the page is typically refreshed when changing pages, whereas with client-side, you only need a partial refresh. Server-side routing can be slightly slower.```

- What are two ways of handling redirects with React Router? When would you use each?

```With the <Redirect> component or using the useHistory hook. You would use the component for conditionally needing to redirect, and use the hook when programmatically navigating in response to an event or action.```

- What are two different ways to handle page-not-found user experiences using React Router? 

- How do you grab URL parameters from within a component using React Router?

``` You can use the useParams() hook ```

- What is context in React? When would you use it?

```Context is a way to share data between components without needing to pass props down through every level```

- Describe some differences between class-based components and function
  components in React.

```Function components use hooks to manage state where classes use their own internal state. Class-based has methods like componentDidMount, and function-based uses useEffect. Function-based return JSX```

- What are some of the problems that hooks were designed to solve?

```Reduce the complexity of stateful logic in componenets. Increase the reusability of component logic. Reduce repetitive code.```