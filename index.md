---
title: K - I - D - A - K
layout: kts-paper
ogimage: CEPDI/graph-overview.png
abstract: Three alternative (yet complementary) learning paths: via Data, Documents or Doing. All three paths share the same layers of Knowledge Management, which I summarize as KIDAK, an extension of the DIK models.
---
<script src="lib/graph.js" type="text/ecmascript" ></script>
<script>
  window.addEventListener("load", function()
  {
    let
    sdoc = document.getElementById("KIDAK").getSVGDocument()
    onclick(  sdoc, sdoc.getElementById( "K" )  )

    sdoc = document.getElementById("KIDAKS").getSVGDocument()
    onclick(  sdoc, sdoc.getElementById( "CEP-17" )  )
    NEXT_CLICK_MEMORY = 'r'
    onclick(  sdoc, sdoc.getElementById( "CEP-18" )  )
    execute_keyboard_function( sdoc, "F" )
    onclick(  sdoc, sdoc.getElementById( "K" )  )
  
    sdoc = document.getElementById("KIDAKP").getSVGDocument()
    onclick(  sdoc, sdoc.getElementById( "CEP-25" )  )
    execute_keyboard_function( sdoc, "F" )
    onclick(  sdoc, sdoc.getElementById( "K" )  )

    sdoc = document.getElementById("KIDAKM").getSVGDocument()
    onclick(  sdoc, sdoc.getElementById( "CEP-21" )  )
    onclick(  sdoc, sdoc.getElementById( "CEP-21" )  )
    execute_keyboard_function( sdoc, "F" )
    onclick(  sdoc, sdoc.getElementById( "K" )  )

    sdoc = document.getElementById("KIDAKAI").getSVGDocument()
    onclick(  sdoc, sdoc.getElementById( "CEP-15" )  )
    execute_keyboard_function( sdoc, "F" )
    onclick(  sdoc, sdoc.getElementById( "K" )  )

    sdoc = document.getElementById("KIDAKHL").getSVGDocument()
    onclick(  sdoc, sdoc.getElementById( "CEP-22" )  )
    onclick(  sdoc, sdoc.getElementById( "CEP-22" )  )
    NEXT_CLICK_MEMORY = 'r'
    onclick(  sdoc, sdoc.getElementById( "CEP-18" )  )
    execute_keyboard_function( sdoc, "F" )
    onclick(  sdoc, sdoc.getElementById( "K" )  )
  });
</script>


# <center>Data, Documents and Doing:</center>
# <center>3 Paths of Learning for Humans and Machines</center>

<object class="clear" id="KIDAK" width="100%" data="CEPDI/graph-local.svg" type="image/svg+xml"></object>

Knowledge Management has one goal: **providing knowledge to those who need it**.

Here I present three alternative (yet complementary) paths for achieving that: via **Data**, **Documents** or **Doing**.

All three paths share the same layers of Knowledge Management, which I summarize as KIDAK (right-hand side of diagram), an extension of the DIK[^DIK] models.

<p><small>draft version 2020-10-25</small></p>
---

# 1. The Document path (study)

<object id="KIDAKS" width="50%" data="CEPDI/graph-local.svg" type="image/svg+xml"></object>

This is the predominant learning path since Gutenberg[^Gutenberg], 15th century, and only accellerated in the information age.

## main flow explanation

1. An initial owner had **knowledge**[^knowledge] about a topic
1. This owner serialized the knowledge into **information**, e.g. in the process of writing or dictating
1. The information is captured in a **document**.
1. Another **human** reads (studies) the document
1. That human now possesses **equivalent knowledge**, compared to the initial knowledge

## alternative flow: Information - Records - Document

Records play a similar role like documents in the KIDAK model. For the purpose of this *study path* let us assume that reading records, through a human-readable document like a report (KI**D**DAK with 2 Ds), is an alternative flow to the typical document-flow KIDAK. *There are more subtle difference between records and documents which I may detail out in a different paper or a future version of this paper.*

## Where to apply

Individuals apply pull on this learning path (from the top) for one or more of the following reasons:
1. to learn desired knowledge when no teacher is available
1. to learn quickly and inexpensivly
1. to learn various subjects in parallel

Organizations push this learning path (from the bottom) for following reasons:
1. to scale (knowledge is needed by an increasing set of people)
1. to conserve (availability of critical knowledge shall not depend on a few people)
1. to master complexity (topics that are too large for short-term memory must be written down)
1. to prove (written documents are easier evidence for covering required management topics)
1. ... and more

That is why formal standards and certifications like documents.

ISO 9.000[^ISO9000] and every other formal standard requires the existence of documents. Looking at the KIDAK model we can confirm that such a requirement is necessary but not sufficient:

Smarter auditors will also check for *communication* or *training* of such documents, i.e. how they are delivered to people.

Only a few (excellent) HR / talent organizations attempt the ultimate check: several months after delivering a training they ask training participants: *"was this information relevant for your job?"*

Translated to the KIDAK (or DIK) model this question can be rephrased as: *"was it actual **knowledge** which you received, or merely **information**?"* 

So-called *knowledge bases* routinely ask their readers *"was this page useful?"*, which is a perfect type of micro-census, an immediate and specific way of managing chunks of knowledge. More relevant articles rank higher in search results. Less relevant articles might be removed from display alltogether.

## Notes about the *study* path

### Information within Document

A *Document* and its enclosed *Information* can not be separated but they are still two different *things*. It becomes more obvious when we consider that the same information can be encoded in two different documents (one handwritten letter, one electronic mail, both with the same content). The information is kind of abstract and hard to imagine *without* a carrier (document). It may be easier to image it *within* its carrier. 

Let's compare Information and Document from a causal perspective. I hold the opinion that Information came first. You need to have some information before you can write it down. The document manifests or resembles informationi. Information existed *before* the document.

That is why I put Information before Document in the causal flow (from bottom to top).

### Information versus Knowledge

If knowledge is *the capability to solve a task*, then some information is more relevant for that purpose, or any purpose, than other information.

Information without a purpose can be seen as noise. We all know these anti-patterns from unsolicited emails, unnecessary information during some times in some meetings, or interruptions by chat/messenger applications before we mute a distracting channel.

### Akquired knowledge versus initial knowledge

The akquired knowledge (top of diagram) is ideally *equivalent* to the initial knowledge (bottom of diagram). Equivalent meaning here: similar (or even the same) tasks can be solved by applying either akquired or initial knowledge.

Yet these two pieces of knowledge are different. We can easily tell it be their lifecycles: The akquired knowledge begins later and perists, even when the initial knowledge gets lost eventually. Different lifecycles may be a main reason to manage knowledge: making it available beyond the initial holder's availability.

Akquired knowledge and initial knowledge each live in different peoples' brains. Two instances of knowledge in two different brains may resemble each other but they cannot be the *same thing*.

---

# 2. The interpersonal path (guided practice, learning-by-doing)

<object id="KIDAKP" width="50%" data="CEPDI/graph-local.svg" type="image/svg+xml"></object>

## Flow explanation

1. A *master* (teacher / coach / trainer / instructor) of an art or a science has practical (working) knowledge which may be implicit[^implicit] or explicit. It is great if the teacher can also explain his or her knowledge (explicit), but for practical reasons it is good enough if the master knows how to perform her art.
1. The coach (instructor) helps another person *doing* some activity of interest. In her role as Instructor, this person *informs* another person.
1. *Doing* is the medium which encodes and conveys information
1. Another person (student) is actively involved in *doing* the activity.
1. Performing the activiy creates new practical knowledge. Positive results from the activity confirm that akquired knowledge. 

## Where to apply

Any sports and athletic activities can be trained by *doing* them, and necessarily by practicing. This is well known in private life.

Many soft skills, like communication, leadership or other interaction between people, are taught most effectively also by example. 

What seems to be common sense in private life is not widely established in corporate life. "Preaching water and drinking wine" would be an anti-pattern for *leading-by-example*.

*Learning-on-the-job* is another pattern for this learning path.

*Job rotation* and *Pair Programming* are other examples for practical teaching that does not require producing documents, because the art for a particular topic might be so subtle that it is difficult to express it in words.

Co-locating teams has the main effect of learning informally, exaclty because of frequent interactions between team members, and copying efficient patterns from each other.

Even if so-called *knowledge transfer* is organized formally, there is no need for a syllabus or to know the structure of the topic in advance (explicitly). Humans are well capable of learning by doing, so **chosing** an activity to learn is the only formal definition that is needed.

## Notes about the *guided practice* path

### Evolution

*Learning by doing* is the historical form of knowledge akquisition, not only for humans but across many species (in particular those who raise children).

We have many mechanisms hardwired in our brains which facilitate this learning path, and we can apply some of them even without effort (observing, remembering, imitating, playing).

Chances are higher to make this practicing path even fun, compared to the *study path*.

### Practice versus Teaching

I choose to call this path **guided practice** to emphasize the practical aspect. You could call the same path *teaching*, but teaching is often associated with a mix of media, including documents. Thus it would blur the line between the *study* path and the *guided practice* path.

Of course a combination of different media and learning paths makes perfect sense in the real world. Even for such a multi-media approach you need to understand the available options. This is why the conceptual KIDAK model portraits the pure-document *study* path and the pure-practice *guided* path separately.

### *Instructor* term

I have chosen this term mainly so that it fits nicely on the **I** layer of KIDAK. Better names would be a ***coach*** or ***facilitator***: someone who performs or guides practical activity.

---


# comparison: Human Learning

<object id="KIDAKHL" width="50%" data="CEPDI/graph-local.svg" type="image/svg+xml"></object>

This diagram shows both flows that lead to natural (human) knowledge: via **Document** or **Doing**. The flows complement each other. Learning complex topics ideally involves both flows. Alternating elements of **presentation** (document-based) and **assignments**, quizzes or other tasks (activity-based) would be an example of a combined teaching style.

For complex topics like aviation (learning to be a pilot) there are separate, dedicated lessons both for theory (mostly document-based) and practice.

---

# 3. The sci-fi path (machine learning)

<object id="KIDAKM" width="50%" data="CEPDI/graph-local.svg" type="image/svg+xml"></object>

## Flow explanation
1. Knowledge ***may*** be serialized into Information 
1. Knowledge (or other sources, e.g. operational facts) are serialized into Information...
1. ... and captured as records or datasets.
1. An artificial agent (software / machine) reads data...
1. ... and has thus akquired knowledge about a particular subject, as defined by the data.

## Notes to this path

Suitable data for machine learning does not only consist of numbers or other facts, but must contain a causal model in addition. See theory of causation[^why] for detailed explanations.

---

# comparison: Artificial Intelligence

<object id="KIDAKAI" width="50%" data="CEPDI/graph-local.svg" type="image/svg+xml"></object>

The KIDAK model presents similar learning paths for human and artificial agents.

If artificial intelligence shall be derived from human patterns of knowledge akquisition then we need a common model to explain both: current paths for human knowledge akquisition and planned paths for AI.

The KIDAK model attempts that consolidation on a high level.

Learning organizations can apply KIDAK or similar models in order to steer development towards AI, in parallel to development of human capital, human talent and natural knowledge.

---

## Notes about the KIDAK model as a whole

### Data (records) and Document

In the KIDAK model, both Data and Document play a similar role in different flows. Ultimately they are both physical representations of Information. Even in case of electronic data, that data is stored on the lowest level in magnetic or other pyhsical states.

With respect to their encoded information, data and documents are equivalent.

You can think of *data*, *data sets* (as in a database) or *records* as synonyms.

### DIK model

Some details are different in KIDAK, compared to the classic DIK model.

The flow of DIK reads roughly: **data** *conveys* **information** which *turns into* **knowledge**.

First of all I hold the opinion that the causal sequence betwenn data and information is confused. I am convinced that you need information first before you can encode it in records (data, data sets) or documents. Therefore, data and documents always contain information. Once an agent has access to data (or documents), that agent also has -indirect- access to information. The agent needs to read (possibly translate) a document, or interpret records, in order to access the contained information.

That is why I change the sequence from Data-to-Information (steps D and I in DIK) into Information-to-Data (steps I and D in KIDAK).

### Introducing the Agent

If knowledge[^knowledge] is a *capability* then there must be some *body* who has that capability. The agent is a holder of knowledge, thus being capable of solving tasks.

I use the term *agent* to generalize human and artificial resources for the purpose of knowledge management. This generalization helps to understand human aspects of interaction with knowledge, and to create artificial systems with similar capabilities in the long run.

In the KIDAK model I place the agent between data/document/doing and (akquired) knowledge, because that is the flow sequence. An agent akquires new knowledge by studying data/documents, or by doing. The D layer (data/document/doing) serves as input for the agent. Akquired knowledge is a result of agent's work.

### Repeating Knowledge on the top and bottom

For the purpose of knowledge management it is important to look at both ends: targets *and* sources of knowledge. Where is knowledge needed and where does it come from?

The DIK model emphasizes the generation of (new, akquired) knowledge. This is a useful yet incomplete view in the context of knowledge management. If you want to *manage* knowledge you need to identify sources and targets of knowledge. Only with explicit sources and target you can plan paths for knowledge akquisition.

## Misconceptions

Here I list some common misconceptions or misleading terms in the field of knowledge management.

### Knowledge Transfer

I like the idea behind it but not that literal terms. Transferring a resource means that the resource is only available at the target after the transfer. Think of soccer stars or money in a bank account. You can transfer them but they can only be in one place.

With knowledge I see the process rather as a path of duplication and akquisition - not a simple transfer.

### Knowledge Sharing

Again I like the idea behind it but not that literal terms. Yes we should share as much we can - but knowledge can't be shared directly. We can share information via documents. But access to a document does not automatically cause knowledge on the receiver's end.

Sharing can be one step in a learning path. It takes place at the document level.

---
## Footnotes

[^knowledge]: Knowledge is an agent's capability to solve a task based on information - to "know how to do it"
*[knowledge_]:Knowledge is an agent's capability to solve a task based on information - to "know how to do it"

[^implicit]: *implicit* knowledge is **not accessible** in such a way that its owner could explain it or write it down, but can apply (perform) the knowledge when needed; every intuitive action is based on implicit knowledge; such knowledge can be inherited or trained

[^ISO9000]: ISO 9000:2015, Quality management systems — Fundamentals and vocabulary; [at this source](https://www.iso.org/standard/45481.html)

[^DIK]: DIK = Data - Information - Knowledge; see also: [https://en.wikipedia.org/wiki/DIKW_pyramid#Data,_Information,_Knowledge]
*[DIK]: DIK = Data - Information - Knowledge

[^KIDAK]: KIDAK = Knowledge - Information - Data - Agent - Knowledge
*[KIDAK]: KIDAK = Knowledge - Information - Data - Agent - Knowledge

[^Gutenberg]: Johannes Gutenberg (1400 – 1468), inventor of the printing press; [see also here](https://en.wikipedia.org/wiki/Johannes_Gutenberg)

[^why]: Judea Pearl, Dana Mackenzie; [The Book of Why: The New Science of Cause and Effect](http://bayes.cs.ucla.edu/WHY/); New York: Basic Books, Published May 15, 2018
