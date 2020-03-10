/*  Copyright 2020 Boran Gögetap <- boran@goegetap.name

    javascript for interactive SVG graph viewer,
    ... Teil von // part of ...
    Knowledge Transformation System (KTS)

    KTS ist Freie Software: Sie können es unter den Bedingungen
    der GNU Affero General Public License, wie von der Free Software Foundation,
    Version 3 der Lizenz oder (nach Ihrer Wahl) jeder neueren
    veröffentlichten Version, weiter verteilen und/oder modifizieren.

    KTS wird in der Hoffnung, dass es nützlich sein wird, aber
    OHNE JEDE GEWÄHRLEISTUNG, bereitgestellt; sogar ohne die implizite
    Gewährleistung der MARKTFÄHIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK.
    Siehe die GNU Affero General Public License für weitere Details.

    Sie sollten eine Kopie der GNU Affero General Public License zusammen mit diesem
    Programm erhalten haben. Wenn nicht, siehe <https://www.gnu.org/licenses/>.

    //

    KTS is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    KTS is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with KTS.  If not, see <https://www.gnu.org/licenses/>.
 */

const DIRECTION_NORTH	= 1
const DIRECTION_SOUTH	= 0

const MISSION_ERASE	= "MISSION_ERASE" 

var NEXT_CLICK_MEMORY		= false
var NEXT_CLICK_DIRECTION	= false
var NEXT_CLICK_MISSION		= false

/*
 * count max distances from node both ways (north and south),
 * then travel the longer path because that is more interesting
 */
function travel( id )
{
 if( NEXT_CLICK_MEMORY == 'r' )
 {
  removeVisitorTags(  document.getElementById( id )  )
  NEXT_CLICK_MEMORY = false; return
 }

 var myTags = [ id + 0, id + 1 ]

 var mdn = count_node( id, DIRECTION_NORTH )
 var mds = count_node( id, DIRECTION_SOUTH )

 var svgElm = document.getElementById( id )
 var visitorTags = [ svgElm.getAttribute( "tag1" ), svgElm.getAttribute( "tag2" )]

 if( mdn > mds || NEXT_CLICK_DIRECTION == DIRECTION_NORTH ) // path to north is longer OR North was selected by user
 {
  if( ! visitorTags.includes( myTags[DIRECTION_NORTH] )  )
  { 
   start_travel ( id , mdn , DIRECTION_NORTH )
  }
  else if( mds > 0 && NEXT_CLICK_DIRECTION != DIRECTION_NORTH ) // there is a path to south and no explicit wish for north
  {
   if( ! visitorTags.includes( myTags[DIRECTION_SOUTH] )  )
   { 
    travel_node( id , 0   , mds+1 , DIRECTION_SOUTH , myTags[DIRECTION_SOUTH] )
   }
   else
   {
    travel_node( id , mdn , mdn+1 , DIRECTION_NORTH , MISSION_ERASE )
    travel_node( id , 0   , mds+1 , DIRECTION_SOUTH , MISSION_ERASE )
   }
  }
   else
   {
    travel_node( id , mdn , mdn+1 , DIRECTION_NORTH , MISSION_ERASE )
    travel_node( id , 0   , mds+1 , DIRECTION_SOUTH , MISSION_ERASE )
   }
 }
 else
 if( mds > mdn ) // path to south is longer
 {
  if( ! visitorTags.includes( myTags[DIRECTION_SOUTH] )  )
  { 
   travel_node( id , 0   , mds+1 , DIRECTION_SOUTH , myTags[DIRECTION_SOUTH] )
  }
  else if( mdn > 0 )
  {
   if( ! visitorTags.includes( myTags[DIRECTION_NORTH] )  )
   { 
    travel_node( id , mdn , mds+1 , DIRECTION_NORTH , myTags[DIRECTION_NORTH] )
   }
   else
   {
    travel_node( id , mdn , mdn+1 , DIRECTION_NORTH , MISSION_ERASE )
    travel_node( id , 0   , mds+1 , DIRECTION_SOUTH , MISSION_ERASE )
   }
  }
   else
   {
    travel_node( id , mdn , mdn+1 , DIRECTION_NORTH , MISSION_ERASE )
    travel_node( id , 0   , mds+1 , DIRECTION_SOUTH , MISSION_ERASE )
   }
 }
 else // paths are equally long
 {
  if( visitorTags[0] == id + "0" && visitorTags[1] == id + "1" )
  {
    travel_node( id , mdn , mdn+1 , DIRECTION_NORTH , MISSION_ERASE )
    travel_node( id , 0   , mds+1 , DIRECTION_SOUTH , MISSION_ERASE )
  }
  else //follow both
  {
   travel_node( id , 0   , mds+1 , DIRECTION_SOUTH , id + DIRECTION_SOUTH  )
   travel_node( id , mdn , mdn+1 , DIRECTION_NORTH , id + DIRECTION_NORTH  )
  }
 }
 NEXT_CLICK_DIRECTION = false
}

function start_travel( id , mdn , direction )
{
 var tag = id + direction

 if( direction == DIRECTION_SOUTH )
 {
   travel_node( id , 0   , mds+1 , DIRECTION_SOUTH , tag )
 }
 if( direction == DIRECTION_NORTH )
 {
   travel_node( id , mdn , mdn+1 , DIRECTION_NORTH , tag )
 }
}

/*
 * recursive distance count, node hop
 */
function count_node( id, direction )
{
 var edges = document.querySelectorAll( next_edges_selector( id, direction ) )
 if( edges.length == 0 ) return 0
 return Math.max(   ... Array.from(  edges, x => count_edge( x.id, direction )  )   )
}

/*
 * recursive distance count, edge hop
 */
function    count_edge( id, direction )
{
 return 1 + count_node( id.split( "__" )[direction], direction )
}

function next_edges_selector( id, direction )
{
 if( direction == DIRECTION_NORTH ) { return '[id^="' + id + '__"]' }
 if( direction == DIRECTION_SOUTH ) { return '[id$="__' + id + '"]' }
 return "error - unknown direction code"
}


/*
 * recursive coloring travel, node hop
 */
function travel_node( id , current_dist , total_ranks , direction , tag )
{
 set_travelling_tags( id , current_dist , total_ranks , direction , tag )  

 // recurse and increment color rank IF travelling south (color rank increases from node to next edge)
 document.querySelectorAll(  next_edges_selector( id, direction )  ).forEach( (edge) => {
  travel_edge( edge.id , current_dist + 1 - direction , total_ranks , direction , tag )
 })
}

/*
 * recursive coloring travel, edge hop
 */
function travel_edge( id , current_dist , total_ranks , direction , tag )
{
 set_travelling_tags( id , current_dist , total_ranks , direction , tag ) 

 // recurse and decrement color rank IF travelling north (color rank decreases from edge to next node)
 travel_node( id.split( "__" )[ direction ] , current_dist - direction , total_ranks , direction , tag )
}


function set_travelling_tags( id , current_dist , total_ranks , direction , tag )
{
 var svgElm = document.getElementById( id )

 svgElm.classList.remove( "dim" )

 if( tag == MISSION_ERASE )
 {
  removeVisitorTags( svgElm ); return false
 }

 var tag1   = svgElm.getAttribute( "tag1" )
 if( tag1 == tag )
 {
  return true;
 }

 svgElm.classList.add( "q" + current_dist + "-" + total_ranks )
 svgElm.setAttribute( "distance", direction == DIRECTION_NORTH ? total_ranks-1-current_dist : current_dist )

 if( tag1 == null )
 {
  svgElm.setAttribute( "tag1", tag )
  return true;
 }
 else
 {
     svgElm.setAttribute( "tag2", tag )
 }
 return false
}

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Should do nothing if the default action has been cancelled
  }

  var handled = false;
  if (event.key !== undefined)
  {
    handled = true

         if( event.key == 'm' )
    {
      console.log( "[M]erge path intersections" )
      document.querySelectorAll( "g[tag2]" ).forEach( (svgElm) => { svgElm.removeAttribute( "tag2" ) })
    }
    else if( event.key == 'x' )
    {
      console.log( "clear path intersections [X]" )
      document.querySelectorAll( "g[tag2]" ).forEach( (svgElm) => { removeVisitorTags( svgElm ) })
    }
    else if( event.key == 'c' )
    {
      console.log( "[C]lear all travel paths" )
      document.querySelectorAll( "g[tag1]" ).forEach( (svgElm) => { removeVisitorTags( svgElm ) })
    }
    else if( event.key == 'd' )
    {
      console.log( "[D]im selected nodes" )
      document.querySelectorAll( "g[tag1]" ).forEach( (svgElm) => { removeVisitorTags( svgElm ); svgElm.classList.add( "dim" ) })
    }
    else if( event.key == 'i' )
    {
      console.log( "keep [I]ntersecting paths (clear the rest)" )
      var intersection = document.querySelectorAll( "g[tag2]" )
      if( intersection.length > 0 )
      {
       document.querySelectorAll( "g[tag1]:not([tag2])" ).forEach( (svgElm) => { svgElm.removeAttribute( "tag1" ) })
       console.log( "all but intersection cleared - you can [M]erge to turn the former intersection from blue to orange")
      }
      else
      {
       console.log( "currently no intersecting paths")
      }
    }
    else if( event.key == 'n' ) // key 'f' also captures CTRL-F in chrome, so no more find-in-page possible
    {
      console.log( "travel [N]orth (forward) direction - PLEASE CLICK" )
      NEXT_CLICK_DIRECTION = DIRECTION_NORTH
    }
    else if( event.key == 'r' )
    {
      console.log( "remove a single node - PLEASE CLICK" )
      NEXT_CLICK_MEMORY = event.key
    }
    else if( event.key == 'l' )
    {
      console.log( "[L]ist of selected nodes:" )
      document.querySelectorAll( "g.node[tag1]" ).forEach( (svgElm) => { console.log( svgElm.id ) })
    }
    else
    {
      console.log( event.key )
      handled = false
    }
  } else if (event.keyCode !== undefined) {
    // Handle the event with KeyboardEvent.keyCode and set handled true.
  }

  if (handled) {
    // Suppress "double action" if event handled
    event.preventDefault();
  }
}, true);

function removeVisitorTags( svgElm )
{
 svgElm.removeAttribute( "tag1" );
 svgElm.removeAttribute( "tag2" );
 svgElm.classList.remove( "dim" );
}
