import { useRouter } from 'next/router';

function withRouter(Component) {
  return function ComponentWithRouterProps(props) {
    const { query, pathname, push } = useRouter();
    const navigate = (to, options) => push(to, undefined, options);
    
    return (
      <Component
        {...props}
        location={{ pathname }}
        params={query}
        navigate={navigate}
      />
    );
  }
}

export default withRouter;
