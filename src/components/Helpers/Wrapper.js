/*
It is perfectly valid to just return
props.children. This is all we need to do
because we just need to pass in content.
The sole purpose of this component is to fulfill
JSX's requirement to only return a single root 
element.

JSX just needs one root element to be returned
it does NOT need to be rendered, because (ya know)
we're trying to prevent elements from being
unnecessarily output to the DOM.
*/

const Wrapper = props => {
    return props.children;
}

export default Wrapper