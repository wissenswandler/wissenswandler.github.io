---
title: "KTS: Jira Diagram Generator with 1 line of source code"
layout: kts-paper
ogimage: graph.png
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

Would you like to see the structure of you Jira content? How issues and epics relate? Which issues block or duplicate other issues?

Well... you can generate all that automatically with one (long) command in a Linux shell. All it requires are three popular Linux packages (curl, jq, graphviz) and a Jira cloud instance to pull *issues* from.

This is your command:

~~~~ bash
curl -s https://knowhere.atlassian.net/rest/api/2/search?jql=project=K1L|jq -r '"digraph{rankdir=BT",(.issues[]|("<"+.key+">[label=\""+.fields.summary+"\"]"),(.key as $k|.fields.issuelinks[]|select(.inwardIssue)|"<"+$k+">-><"+.inwardIssue.key+">")),"}"'|dot -Tpng>P;eog P
~~~~

The resulting diagram looks [like this](P.png).

Here is how it works:

<object class="clear" id="graph_1" width="100%" data="graph-local.svg" type="image/svg+xml"></object>

- - -
***KTS*** = Knowledge Transformation System

This diagram explains the execution flow and data flow of a program with less than 300 characters of source code which extracts linked issue information from Jira and turns that into a diagram.

You can click on nodes in the diagram to see their sources or effects. You can also press one of the following buttons for some prepared information surgery:

<button onclick="highlightExecution()">highlight execution path</button>
<button onclick="focusDependencies() ">focus package dependencies</button>

- - -
## Notes

1. Obviously you can use this example and adjust it to your Jira instance name, project name or other JQL
1. You can also contact me to assist you in more advanced planning, extraction or transformation of Information
1. This example does not use authentication. It will work only with *public* Jira data.
1. For more advanced Knowledge Management in Jira, see the KTS hyperlink in the footer.
1. see also the experimental [port on Observable](https://observablehq.com/@bogo/minimal-jira-diagram-generator)
