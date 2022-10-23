---
title: "KTS: Jira Diagram Generator with 1 line of source code"
layout: kts-paper
ogimage: graph-local.png
abstract: "How to generate a diagram from Jira content (linked issues) with one line of sourcecode"
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

# <center>{{ page.title }}</center>

~~~~ bash
curl -s https://knowhere.atlassian.net/rest/api/2/search?jql=project=K1L|jq -r '"digraph{rankdir=BT",(.issues[]|("<"+.key+">[label=\""+.fields.summary+"\"]"),(.key as $k|.fields.issuelinks[]|select(.inwardIssue)|"<"+$k+">-><"+.inwardIssue.key+">")),"}"'|dot -Tpng>P;eog P
~~~~

<object class="clear" id="graph_1" width="100%" data="graph-local.svg" type="image/svg+xml"></object>

<hr/>
<p>KTS = Knowledge Transformation System</p>
<p>This diagram explains the execution flow and data flow of a program with less than 300 characters of source code which extracts linked issue information from Jira and turns that into a diagram.</p>
<button onclick="highlightExecution()">highlight execution path</button>
<button onclick="focusDependencies() ">focus package dependencies</button>
