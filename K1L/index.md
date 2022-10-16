---
title: KTS Jira Oneliner
layout: kts-paper
ogimage: graph-local.png
abstract: "KTS: Jira Diagram Generator with 1 line of source code"
---
<script src="/lib/graph.js" type="text/ecmascript"></script>
<script>
      var sdoc
      window.addEventListener("load", function()
      {
        sdoc = document.getElementById("graph_1").getSVGDocument()
        highlightExecution()
      })

      function highlightExecution()
      {
        onpress( sdoc, "e"      )
        onclick( sdoc, "K1L-17" )
      }

      function focusDependencies()
      {
        onpress( sdoc, "e"      )
        onclick( sdoc, "K1L-17" )
        onclick( sdoc, "K1L-18" )
        onpress( sdoc, "o"      )
        onpress( sdoc, "F"      )
      }
</script>

<h1><center>KTS: Jira Diagram Generator with 1 line of source code</center></h1>

<pre>
curl -s https://knowhere.atlassian.net/rest/api/2/search?jql=project=K1L|jq -r '"digraph{rankdir=BT",(.issues[]|("&lt;"+.key+"&gt;[label=\""+.fields.summary+"\"]"),(.key as $k|.fields.issuelinks[]|select(.inwardIssue)|"&lt;"+$k+"&gt;-&gt;&lt;"+.inwardIssue.key+"&gt;")),"}"'|dot -Tpng&gt;P&amp;&amp;eog P
</pre>

<object class="clear" id="graph_1" width="100%" data="graph-local.svg" type="image/svg+xml"></object>

<hr/>
<p>KTS = Knowledge Transformation System</p>
<p>This diagram explains the execution flow and data flow of a program with less than 300 characters of source code which extracts linked issue information from Jira and turns that into a diagram.</p>
<button onclick="highlightExecution()">highlight execution path</button>
<button onclick="focusDependencies() ">focus package dependencies</button>

