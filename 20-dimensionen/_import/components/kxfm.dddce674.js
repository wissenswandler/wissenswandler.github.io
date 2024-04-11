function get_params()
{
    return Object.fromEntries(
        [...new URL(document.baseURI).searchParams]
        .map
        (  ( [k, v] ) => {
            try { v = JSON.parse(v); }
            catch (e) { }
            return [k, v];
        })
    );
}

function set_input_value(input, value, add_or_remove = undefined ) 
{
  if( add_or_remove === undefined )
    input.value = value
  else
  {
    switch( add_or_remove )
    {
      case '+':
        input.value = input.value.concat( Array.isArray(value) ? value : [value] )
        break
      case '-':
        input.value = input.value.filter( e => e != value )
        break
      default:
        throw new Error( `only operations '+' and '-' are defined (reading "${add_or_remove}")` )
    }
  }
  
  input.dispatchEvent(new Event("input", {bubbles: true}));
}

export { get_params, set_input_value }