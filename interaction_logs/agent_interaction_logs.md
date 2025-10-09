<!-- agent interaction with LLM -->

        ## Agent Interaction on 2025-09-13T11:31:26.663Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Design
5
th
Semester 
BTech
(Chemical 
Engg
.)
General Design Considerations 
Part 1
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1

1. Health and Safety Hazards2. Loss Prevention3. Environmental Protection
General Design Considerations
4. Plant Location5. Plant Layout6. Plant Operation and Control7. Patent Considerations
2

General Design Considerations
1. Health and Safety Hazards
a) Safety HazardA  highly  toxic  material  that  causes  immediateinjury is classified as a
safety hazard
.
b) Health HazardA material whose effect is apparent only after long
 
exposure at low concentrations is considered as an 
industrial health and hygiene hazard
.
3

General Design Considerations
1. Health and Safety Hazards
The potential
health hazard
to an individual by a
material  used  in  any  chemical  or  biochemicalprocess is a function of the
inherent toxicity
of the
material  and  the
frequency  and  duration  of
exposure
.
exposure
.
a) Sources of Exposureb) Exposure Evaluationc) Control of Exposure Hazardsd) Fire and Explosion Hazardse) Personnel Safety
f) Safety Regulations
4

General Design Considerations
2. Loss Prevention
Loss
in  a  chemical  industry  refers  to  the
financial  loss
associated with an accident.Consequences of 
Loss
Consequences of 
Loss
1)  Cost of repairing (or) replacing the damaged faci
lity.
2)  Taking care of all damage claims.3)  Loss of earnings from lost production during the 
repair 
period.
4)  Any associated lost sale opportunities.
5

General Design Considerations
2. Loss Prevention
Chemical processing is associated with a lot of hazards.
So,
the   design   engineer   must   try   to   minimize   the
Loss
associated with any accident.Process of 
Loss Prevention
Process of 
Loss Prevention
1)  Identification and assessment of the major hazards.2)  Control of the hazards by the most appropriate means
(e.g.,
containment,
improved maintenance
).
3)  Control  of  the  process
(e.g.,  Prevention  of  hazardous
conditions  in  process  operating  variables  by  utilizingautomatic control and relief systems, alarms, etc).
4)  Limitation of the 
Loss
when an accident occurs.
6

General Design Considerations
2. Loss Prevention
Hazard Assessment Techniques
1)  Hazard and Operability Study (
HAZOP
)
2)  Fault Tree Analysis (
FTA
)
3)  Failure Mode – and – Effect Analysis (
FMEA
)
4)  Safety Indexes5)  Safety Audits
7

General Design Considerations
2. Loss Prevention
HAZOP 
Study

Uses  to  identify  all  plant  (or)  equipment  hazards  andoperability problems.

In this technique, each SEGMENT (i.e., pipeline, piece ofequipment, instrument, etc.) is carefully examined andall possible deviations from normal operating conditionsare identified.

This is accomplished by fully defining the
INTENT
of each
SEGMENT  and  then  applying
Guide  Words
to  each
SEGMENT.
8

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
1) NO
or
NOT
No part of the intent is achieved and nothing else occurs.e.g., no flow2) MOREQuantitative increasee.g., higher temperature3) LESSQuantitative decreasee.g., lower pressure
9

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
4) AS WELL ASQualitative increasee.g., an impurity5) PART OFQuantitative decreasee.g., only one of the two components in a mixture6) REVERSEoppositee.g., back flow
10

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
7) OTHER THANNo
part
of
the
intent
is
achieved,
and
something
completely
No
part
of
the
intent
is
achieved,
and
something
completely
different occurse.g., flow of wrong material
Use these GUIDE WORDS to detect and correct the 
deviations.
11

GUIDE  WORDS
Guide WordsNo, NoneMore OfLess Of
MeaningNegation of IntentionQuantitative IncreaseQuantitative Decrease
Less OfAs Well As (More Than)Part OfReverseOther Than
Quantitative DecreaseQualitative IncreaseQualitative DecreaseLogical Opposite of IntentionComplete Substitution
12

Deviations Generated by Each Guide Word
Guide word
Deviations
NONE
No forward flow when there should be, i.e. no flow.
MORE OF
More  of  any  relevant  physical  property  than  there  s
hould
be,   e.g.   higher   flow   (rate   or   total   quantity),   high
er
temperature, higher pressure, higher viscosity, etc
.
LESS OF
Less of any relevant physical property than there s
hould be,
e.g. lower flow (rate or total quantity), lower tem
perature,
lower pressure, etc.
PART OF
Composition of system different from what it should
 be,
PART OF
Composition of system different from what it should
 be,
e.g. change in ratio of components, component missi
ng, ect.
MORE THAN
More components present in the system than there sh
ould
be, e.g. extra phase present (vapour, solid), impur
ities (air.
Water, acids, corrosion products), etc.
OTHER THAN
What else can happen apart from normal operation, e
.g.
start-up, shutdown, uprating, low rate running, alt
ernative
operation mode, failure of plant services, maintena
nce,
catalyst change, etc.
REVERSE: reverse flow
13

EXAMPLE
The flowsheet shows that raw material streams A and B are tran
sferred by
pump to a reactor, where they react to form product C. Assume t
hat the
flow rate of B should not exceed that of A. Otherwise, an explo
sion may
occur. Let’s consider the flow of A in line 1:
A
B
C
B
A
B
F
F
≤
NONE                    No flow of AMORE                    Flow of A greater than desig
n flow
LESS                      Flow of A less than design
 flow
AS WELL AS       Transfer of some component additio
nal to A
PART OF               Failure to transfer a componen
t of A
REVERSE             Flow of A in a direction opposi
te to design direction
OTHER THAN     Transfer of some material other than
 A
A
B
14

HAZOP  DISPLAY
Guide Word   Deviation  Possible Causes    Consequences  Actio
n Required
No
No Flow   Pump Fail
Line Blockage
Operator
System Over-Heated
ShutdownSystem
More
More
Flow
OperatorStops PumpExcessivePump Speed(Control System)
Over-CooledProduct(IncompleteReaction)
ProductUnacceptable;Dump
15

124356789
101112
Select a vesselExplain the general intention of the vessel and its
 lines
Select a lineExplain the intention of the lineApply the first guide wordsDevelop a meaningful deviationExamine possible causesExamine consequencesDetect hazardsMake suitable recordRepeat 6-10 for all meaningful deviations derived f
rom first guide words
Repeat 5
-
11 for all the guide words
Beginning
13141516171819202122232425
Repeat 5
-
11 for all the guide words
Mark line as having been examinedRepeat 3-13 for each lineSelect an auxiliary system (e.g. Heating system)Explain the intention of the auxiliary systemRepeat 5-12 for auxiliary systemMark auxiliary as having been examinedRepeat 15-18 for all auxiliariesExplain intention of the vesselRepeat 5-12Mark vessel as completedRepeat 1-22 for all vessels on flow sheetMark flow sheet as completedRepeat 1-24 for all flow sheets
End
Figure 8.9
Hazard and operability studies : detailed sequence 
of examination
(Chemical Industry Safety and Health Council, 1977 
Item 6)
16

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
risk analysis

The FTA is applied after the hazards have been identifiedby HAZOP.

The
FTA
is
used
to
estimate
the
likelihood
of
an
accident

The
FTA
is
used
to
estimate
the
likelihood
of
an
accident
by breaking it down into contributing sequences.

A
Logic Diagram
(or)
Fault Tree
is constructed with
AND
and
OR
GATES.

Probability of every event is expressed as a yearly rate.
e.g., A
1/100
chance occurrence per year would represent
an event on average would occur only once in every 100years.
17

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
procedure

The
accident
is  broken  down  into  its  contributing
sequences
, each of which is separated into all its
events
.
Accident
Sequences
Events

FTA provides a graphical representation between certainpossible events and an undesired consequence.
18

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic symbols

AND gate

OR gate
19

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic gates

AND  symbol
is  used  where  coincident  lower  –  order
events
are
necessary
to
cause
a
more
severe
higher
–
events
are
necessary
to
cause
a
more
severe
higher
–
order event.

Probability of each
lower – order
event is obtained.
Probability of the
Product of the probabilities of
higher – order event
=
all the lower – order events
20

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic gates

OR symbol
is used when the occurrence of
any one of
a
set
of
lower
–
order
events
is
sufficient
to
cause
a
more
set
of
lower
–
order
events
is
sufficient
to
cause
a
more
serious
higher – order event
.

Probability of each
lower – order
event is obtained.
Probability of the
Sum of the probabilities of
higher – order event
=
all the lower – order events
21

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – events & 
logic gates
22

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 1
23

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 1
24

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 2
25

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 2
26

General Design Considerations
2. Loss Prevention
Failure Mode – and – Effect Analysis (
FMEA
) –
Limited use

Usually  applied  to  a  specific  piece  of  equipment  in  aprocess
or
a
particularly
hazardous
part
of
a
larger
process
or
a
particularly
hazardous
part
of
a
larger
process.

The purpose of FMEA is to evaluate the consequence ofthe    component    failures    on    the    process    andsurroundings.

Drawback:
FMEA  does  not  consider  the  errors  in
operating   procedures   or   those   committed   by   theoperators.
27

General Design Considerations
2. Loss Prevention
Safety Indexes

Developed by the
Dow Chemical Company.

A  method  for  evaluating  the  potential  hazards  of  aprocess  and  assessing  the  safety  and  loss  preventionmeasures needed.

The Dow Fire and Explosion Index is calculated, based onthe  nature  of  the  process  and  properties  of  thematerials.
28

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Calculation of the 
Dow Fire and Explosion Index (F&EI)
1.  Material factor (MF), which is
a measure of the intrinsic
rate
of
energy
release
from
the
burning,
explosion,
or
rate
of
energy
release
from
the
burning,
explosion,
or
chemical reaction of the material
, is estimated.
2.  The general process hazard factor (F
1
) is calculated .
e.g.,
an exothermic reaction
3.  The special process hazard factor (F
2
) is estimated.
e.g.,
operating conditions, proximity to flammable areas
29

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Calculation of the 
Dow Fire and Explosion Index (F&EI)
4.  The process hazard factor (F
3
) is calculated as:
F
3
= F
1
x F
2
5.  F&EI is calculated as:
F&EI = MF x F
3
30

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Dow F&EI Range
Degree of Hazard
1 – 60
Light
61 
–
96
Moderate
61 
–
96
Moderate
97 – 127
Intermediate
128 – 158
Heavy
>=159
Severe
31

General Design Considerations
2. Loss Prevention
Safety Audits

Detailed checklists to cover every aspect of
1.Safety2.
Health
&
2.
Health
&
3.Loss Prevention

Useful guide for the less experienced.

Review of general safety rules.

Safety audits provide safety rules for new process areasand associated emergency response procedures.
32

General Design Considerations
2. Loss Prevention
Safety Audits
33

General Design Considerations
2. Loss Prevention
Safety Audits
34

General Design Considerations
2. Loss Prevention
Safety Audits
35

General Design Considerations
2. Loss Prevention
Safety Audits
36

General Design Considerations
2. Loss Prevention
Safety Audits
37

General Design Considerations
2. Loss Prevention
Safety Audits
The checklist is intended 
to 
promote thought
,
to 
raise questions 
such as 
1.  Is it needed?
2.  What are the alternatives?
3.  Has provision been made for, checked for?
4.  Has it been provided?
38

General Design Considerations
References
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
Solen, K. A., J. N. Harb, Introduction to Chemical Enginee
ring – Tools for Today and
Tomorrow, 5
th
Edition, Wiley India Private Limited, New Delhi, 2014.
39  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Design Study Guide

## 1. Concise Bullet-Point Summary:

* **General Design Considerations:** encompass health and safety, loss prevention, environmental protection, plant location, layout, operation, and patent considerations.
* **Health and Safety Hazards:**  involve **safety hazards** (immediate injury) and **health hazards** (long-term effects).  Exposure sources, evaluation, control, fire/explosion hazards, personnel safety, and regulations are key.
* **Loss Prevention:** aims to minimize financial losses from accidents.  This includes identifying hazards, controlling them, and limiting losses during accidents.
* **Hazard Assessment Techniques:** include **HAZOP (Hazard and Operability Study)**, **FTA (Fault Tree Analysis)**, **FMEA (Failure Mode and Effect Analysis)**, safety indexes, and safety audits.
* **HAZOP:** uses **guide words** (NO, MORE, LESS, AS WELL AS, PART OF, REVERSE, OTHER THAN) to identify deviations from normal operation and potential hazards.
* **FTA:** estimates accident likelihood by breaking down contributing sequences using AND and OR gates.  Probabilities are expressed as yearly rates.
* **FMEA:** evaluates consequences of equipment failures.
* **Safety Indexes (e.g., Dow Fire and Explosion Index):** quantify process hazards based on material factors and process characteristics.
* **Safety Audits:** utilize checklists to review safety, health, and loss prevention aspects.
* **Plant Location & Layout:** critical for efficient operations and safety.
* **Plant Operation & Control:** requires careful planning for efficient and safe running.
* **Patent Considerations:** protect intellectual property related to the design.


## 2. Prioritized 3-Hour Study Plan:

**Hour 1: Foundations (0:00 - 1:00)**

* (0:00 - 0:15): Review General Design Considerations and Health & Safety Hazards.  Focus on definitions of safety and health hazards and sources of exposure.
* (0:15 - 0:45):  Deep dive into Loss Prevention. Understand the concept of financial loss and the process of loss prevention.
* (0:45 - 1:00):  Brief overview of all hazard assessment techniques (HAZOP, FTA, FMEA, Safety Indexes, Safety Audits).


**Hour 2: Hazard Assessment Techniques (1:00 - 2:00)**

* (1:00 - 1:30):  Detailed study of HAZOP. Understand guide words and their application in identifying deviations. Work through examples.
* (1:30 - 2:00):  Focus on FTA.  Learn AND and OR gates, probability calculations, and how to interpret a fault tree.


**Hour 3:  Remaining Topics & Review (2:00 - 3:00)**

* (2:00 - 2:15):  Quickly review FMEA, Safety Indexes (focus on Dow F&EI), and Safety Audits.
* (2:15 - 2:45): Practice multiple-choice questions and review key concepts from the entire module.
* (2:45 - 3:00): Final review of any remaining weak areas.


## 3. Multiple-Choice Questions:

**1. A material causing immediate injury upon exposure is classified as:**
    a) A health hazard
    b) An environmental hazard
    c) **A safety hazard**
    d) A process hazard

**2.  Which hazard assessment technique utilizes guide words like "NO," "MORE," and "LESS"?**
    a) FTA
    b) FMEA
    c) **HAZOP**
    d) Safety Audit

**3. In FTA, an "AND" gate signifies:**
    a) The occurrence of any one lower-order event causing a higher-order event.
    b) **The simultaneous occurrence of all lower-order events causing a higher-order event.**
    c) A single point of failure.
    d) A feedback loop.

**4. The Dow Fire and Explosion Index (F&EI) is primarily used to:**
    a) Assess environmental impact.
    b) Evaluate equipment reliability.
    c) **Quantify the potential for fire and explosion hazards.**
    d) Identify ergonomic issues.

**5.  Safety audits primarily involve:**
    a)  Complex simulations.
    b)  Statistical modeling.
    c) **Detailed checklists to assess safety, health, and loss prevention.**
    d)  Advanced risk assessments.



        ```
        

    
        ## Agent Interaction on 2025-09-13T11:31:55.542Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Generate detailed study notes from the following text.  
                - Organize with clear **sections and headings**.  
                - Add short explanations for each major concept.  
                - Use bullet points for clarity.  
                - Make formatting structured and neat for UI readability.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Design
5
th
Semester 
BTech
(Chemical 
Engg
.)
General Design Considerations 
Part 1
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1

1. Health and Safety Hazards2. Loss Prevention3. Environmental Protection
General Design Considerations
4. Plant Location5. Plant Layout6. Plant Operation and Control7. Patent Considerations
2

General Design Considerations
1. Health and Safety Hazards
a) Safety HazardA  highly  toxic  material  that  causes  immediateinjury is classified as a
safety hazard
.
b) Health HazardA material whose effect is apparent only after long
 
exposure at low concentrations is considered as an 
industrial health and hygiene hazard
.
3

General Design Considerations
1. Health and Safety Hazards
The potential
health hazard
to an individual by a
material  used  in  any  chemical  or  biochemicalprocess is a function of the
inherent toxicity
of the
material  and  the
frequency  and  duration  of
exposure
.
exposure
.
a) Sources of Exposureb) Exposure Evaluationc) Control of Exposure Hazardsd) Fire and Explosion Hazardse) Personnel Safety
f) Safety Regulations
4

General Design Considerations
2. Loss Prevention
Loss
in  a  chemical  industry  refers  to  the
financial  loss
associated with an accident.Consequences of 
Loss
Consequences of 
Loss
1)  Cost of repairing (or) replacing the damaged faci
lity.
2)  Taking care of all damage claims.3)  Loss of earnings from lost production during the 
repair 
period.
4)  Any associated lost sale opportunities.
5

General Design Considerations
2. Loss Prevention
Chemical processing is associated with a lot of hazards.
So,
the   design   engineer   must   try   to   minimize   the
Loss
associated with any accident.Process of 
Loss Prevention
Process of 
Loss Prevention
1)  Identification and assessment of the major hazards.2)  Control of the hazards by the most appropriate means
(e.g.,
containment,
improved maintenance
).
3)  Control  of  the  process
(e.g.,  Prevention  of  hazardous
conditions  in  process  operating  variables  by  utilizingautomatic control and relief systems, alarms, etc).
4)  Limitation of the 
Loss
when an accident occurs.
6

General Design Considerations
2. Loss Prevention
Hazard Assessment Techniques
1)  Hazard and Operability Study (
HAZOP
)
2)  Fault Tree Analysis (
FTA
)
3)  Failure Mode – and – Effect Analysis (
FMEA
)
4)  Safety Indexes5)  Safety Audits
7

General Design Considerations
2. Loss Prevention
HAZOP 
Study

Uses  to  identify  all  plant  (or)  equipment  hazards  andoperability problems.

In this technique, each SEGMENT (i.e., pipeline, piece ofequipment, instrument, etc.) is carefully examined andall possible deviations from normal operating conditionsare identified.

This is accomplished by fully defining the
INTENT
of each
SEGMENT  and  then  applying
Guide  Words
to  each
SEGMENT.
8

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
1) NO
or
NOT
No part of the intent is achieved and nothing else occurs.e.g., no flow2) MOREQuantitative increasee.g., higher temperature3) LESSQuantitative decreasee.g., lower pressure
9

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
4) AS WELL ASQualitative increasee.g., an impurity5) PART OFQuantitative decreasee.g., only one of the two components in a mixture6) REVERSEoppositee.g., back flow
10

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
7) OTHER THANNo
part
of
the
intent
is
achieved,
and
something
completely
No
part
of
the
intent
is
achieved,
and
something
completely
different occurse.g., flow of wrong material
Use these GUIDE WORDS to detect and correct the 
deviations.
11

GUIDE  WORDS
Guide WordsNo, NoneMore OfLess Of
MeaningNegation of IntentionQuantitative IncreaseQuantitative Decrease
Less OfAs Well As (More Than)Part OfReverseOther Than
Quantitative DecreaseQualitative IncreaseQualitative DecreaseLogical Opposite of IntentionComplete Substitution
12

Deviations Generated by Each Guide Word
Guide word
Deviations
NONE
No forward flow when there should be, i.e. no flow.
MORE OF
More  of  any  relevant  physical  property  than  there  s
hould
be,   e.g.   higher   flow   (rate   or   total   quantity),   high
er
temperature, higher pressure, higher viscosity, etc
.
LESS OF
Less of any relevant physical property than there s
hould be,
e.g. lower flow (rate or total quantity), lower tem
perature,
lower pressure, etc.
PART OF
Composition of system different from what it should
 be,
PART OF
Composition of system different from what it should
 be,
e.g. change in ratio of components, component missi
ng, ect.
MORE THAN
More components present in the system than there sh
ould
be, e.g. extra phase present (vapour, solid), impur
ities (air.
Water, acids, corrosion products), etc.
OTHER THAN
What else can happen apart from normal operation, e
.g.
start-up, shutdown, uprating, low rate running, alt
ernative
operation mode, failure of plant services, maintena
nce,
catalyst change, etc.
REVERSE: reverse flow
13

EXAMPLE
The flowsheet shows that raw material streams A and B are tran
sferred by
pump to a reactor, where they react to form product C. Assume t
hat the
flow rate of B should not exceed that of A. Otherwise, an explo
sion may
occur. Let’s consider the flow of A in line 1:
A
B
C
B
A
B
F
F
≤
NONE                    No flow of AMORE                    Flow of A greater than desig
n flow
LESS                      Flow of A less than design
 flow
AS WELL AS       Transfer of some component additio
nal to A
PART OF               Failure to transfer a componen
t of A
REVERSE             Flow of A in a direction opposi
te to design direction
OTHER THAN     Transfer of some material other than
 A
A
B
14

HAZOP  DISPLAY
Guide Word   Deviation  Possible Causes    Consequences  Actio
n Required
No
No Flow   Pump Fail
Line Blockage
Operator
System Over-Heated
ShutdownSystem
More
More
Flow
OperatorStops PumpExcessivePump Speed(Control System)
Over-CooledProduct(IncompleteReaction)
ProductUnacceptable;Dump
15

124356789
101112
Select a vesselExplain the general intention of the vessel and its
 lines
Select a lineExplain the intention of the lineApply the first guide wordsDevelop a meaningful deviationExamine possible causesExamine consequencesDetect hazardsMake suitable recordRepeat 6-10 for all meaningful deviations derived f
rom first guide words
Repeat 5
-
11 for all the guide words
Beginning
13141516171819202122232425
Repeat 5
-
11 for all the guide words
Mark line as having been examinedRepeat 3-13 for each lineSelect an auxiliary system (e.g. Heating system)Explain the intention of the auxiliary systemRepeat 5-12 for auxiliary systemMark auxiliary as having been examinedRepeat 15-18 for all auxiliariesExplain intention of the vesselRepeat 5-12Mark vessel as completedRepeat 1-22 for all vessels on flow sheetMark flow sheet as completedRepeat 1-24 for all flow sheets
End
Figure 8.9
Hazard and operability studies : detailed sequence 
of examination
(Chemical Industry Safety and Health Council, 1977 
Item 6)
16

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
risk analysis

The FTA is applied after the hazards have been identifiedby HAZOP.

The
FTA
is
used
to
estimate
the
likelihood
of
an
accident

The
FTA
is
used
to
estimate
the
likelihood
of
an
accident
by breaking it down into contributing sequences.

A
Logic Diagram
(or)
Fault Tree
is constructed with
AND
and
OR
GATES.

Probability of every event is expressed as a yearly rate.
e.g., A
1/100
chance occurrence per year would represent
an event on average would occur only once in every 100years.
17

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
procedure

The
accident
is  broken  down  into  its  contributing
sequences
, each of which is separated into all its
events
.
Accident
Sequences
Events

FTA provides a graphical representation between certainpossible events and an undesired consequence.
18

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic symbols

AND gate

OR gate
19

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic gates

AND  symbol
is  used  where  coincident  lower  –  order
events
are
necessary
to
cause
a
more
severe
higher
–
events
are
necessary
to
cause
a
more
severe
higher
–
order event.

Probability of each
lower – order
event is obtained.
Probability of the
Product of the probabilities of
higher – order event
=
all the lower – order events
20

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic gates

OR symbol
is used when the occurrence of
any one of
a
set
of
lower
–
order
events
is
sufficient
to
cause
a
more
set
of
lower
–
order
events
is
sufficient
to
cause
a
more
serious
higher – order event
.

Probability of each
lower – order
event is obtained.
Probability of the
Sum of the probabilities of
higher – order event
=
all the lower – order events
21

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – events & 
logic gates
22

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 1
23

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 1
24

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 2
25

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 2
26

General Design Considerations
2. Loss Prevention
Failure Mode – and – Effect Analysis (
FMEA
) –
Limited use

Usually  applied  to  a  specific  piece  of  equipment  in  aprocess
or
a
particularly
hazardous
part
of
a
larger
process
or
a
particularly
hazardous
part
of
a
larger
process.

The purpose of FMEA is to evaluate the consequence ofthe    component    failures    on    the    process    andsurroundings.

Drawback:
FMEA  does  not  consider  the  errors  in
operating   procedures   or   those   committed   by   theoperators.
27

General Design Considerations
2. Loss Prevention
Safety Indexes

Developed by the
Dow Chemical Company.

A  method  for  evaluating  the  potential  hazards  of  aprocess  and  assessing  the  safety  and  loss  preventionmeasures needed.

The Dow Fire and Explosion Index is calculated, based onthe  nature  of  the  process  and  properties  of  thematerials.
28

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Calculation of the 
Dow Fire and Explosion Index (F&EI)
1.  Material factor (MF), which is
a measure of the intrinsic
rate
of
energy
release
from
the
burning,
explosion,
or
rate
of
energy
release
from
the
burning,
explosion,
or
chemical reaction of the material
, is estimated.
2.  The general process hazard factor (F
1
) is calculated .
e.g.,
an exothermic reaction
3.  The special process hazard factor (F
2
) is estimated.
e.g.,
operating conditions, proximity to flammable areas
29

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Calculation of the 
Dow Fire and Explosion Index (F&EI)
4.  The process hazard factor (F
3
) is calculated as:
F
3
= F
1
x F
2
5.  F&EI is calculated as:
F&EI = MF x F
3
30

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Dow F&EI Range
Degree of Hazard
1 – 60
Light
61 
–
96
Moderate
61 
–
96
Moderate
97 – 127
Intermediate
128 – 158
Heavy
>=159
Severe
31

General Design Considerations
2. Loss Prevention
Safety Audits

Detailed checklists to cover every aspect of
1.Safety2.
Health
&
2.
Health
&
3.Loss Prevention

Useful guide for the less experienced.

Review of general safety rules.

Safety audits provide safety rules for new process areasand associated emergency response procedures.
32

General Design Considerations
2. Loss Prevention
Safety Audits
33

General Design Considerations
2. Loss Prevention
Safety Audits
34

General Design Considerations
2. Loss Prevention
Safety Audits
35

General Design Considerations
2. Loss Prevention
Safety Audits
36

General Design Considerations
2. Loss Prevention
Safety Audits
37

General Design Considerations
2. Loss Prevention
Safety Audits
The checklist is intended 
to 
promote thought
,
to 
raise questions 
such as 
1.  Is it needed?
2.  What are the alternatives?
3.  Has provision been made for, checked for?
4.  Has it been provided?
38

General Design Considerations
References
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
Solen, K. A., J. N. Harb, Introduction to Chemical Enginee
ring – Tools for Today and
Tomorrow, 5
th
Edition, Wiley India Private Limited, New Delhi, 2014.
39  
                ---  
            
        ```
        **Response Received from API:**
        ```
        ## CHC303 Process Design and Economics: Process Design - General Design Considerations

**Module:** Process Design
**Semester:** 5th Semester BTech (Chemical Engg.)
**Instructor:** Dr. D. Krishna Sandilya
**Institute:** IIT (ISM), Dhanbad
**Semester:** Monsoon Semester (2025-2026)


**I. Health and Safety Hazards**

* **Safety Hazard:**  A material causing immediate injury upon exposure (high toxicity).
* **Health Hazard:** A material causing effects only after prolonged exposure at low concentrations (industrial health and hygiene hazard).
* **Factors influencing health hazard:**
    * Inherent toxicity of the material.
    * Frequency and duration of exposure.
* **Key Aspects:**
    * Sources of exposure
    * Exposure evaluation
    * Control of exposure hazards
    * Fire and explosion hazards
    * Personnel safety
    * Safety regulations


**II. Loss Prevention**

* **Definition of Loss:** Financial loss associated with accidents, including:
    * Repair/replacement costs.
    * Damage claims.
    * Lost production earnings.
    * Lost sales opportunities.
* **Process of Loss Prevention:**
    * Hazard identification and assessment.
    * Hazard control (containment, improved maintenance).
    * Process control (preventing hazardous conditions using automatic controls, relief systems, alarms).
    * Limiting loss during accidents.
* **Hazard Assessment Techniques:**
    * Hazard and Operability Study (HAZOP)
    * Fault Tree Analysis (FTA)
    * Failure Mode and Effects Analysis (FMEA)
    * Safety Indexes
    * Safety Audits


**III. Hazard and Operability Study (HAZOP)**

* **Purpose:** Identify plant/equipment hazards and operability problems.
* **Method:**  Examine each segment (pipeline, equipment, instrument) by defining its intent and applying guide words to identify deviations from normal operation.
* **Guide Words:**  Used to systematically explore potential deviations.
    * **NO/NOT:** Negation of intention (e.g., no flow).
    * **MORE:** Quantitative increase (e.g., higher temperature).
    * **LESS:** Quantitative decrease (e.g., lower pressure).
    * **AS WELL AS:** Qualitative increase (e.g., an impurity).
    * **PART OF:** Quantitative decrease (e.g., only one component in a mixture).
    * **REVERSE:** Opposite (e.g., backflow).
    * **OTHER THAN:** Complete substitution (e.g., flow of wrong material).


**IV.  HAZOP Detailed Procedure**

(Refer to Figure 8.9 in the original notes for a visual representation of the detailed HAZOP examination sequence)  The procedure involves systematically examining each vessel, line, and auxiliary system on a flowsheet, applying guide words to identify deviations, possible causes, consequences, and required actions.


**V. Fault Tree Analysis (FTA)**

* **Purpose:** Estimate the likelihood of an accident by breaking it down into contributing sequences.
* **Method:** Constructs a logic diagram (fault tree) using AND and OR gates to represent event relationships.  Probabilities of events are expressed as yearly rates.
* **Logic Gates:**
    * **AND Gate:**  All lower-order events must occur for the higher-order event to happen. Probability of higher-order event = product of probabilities of lower-order events.
    * **OR Gate:**  Occurrence of any one lower-order event causes the higher-order event. Probability of higher-order event = sum of probabilities of lower-order events.
* **Procedure:** The accident is broken down into contributing sequences and individual events, graphically showing the relationship between events and undesired consequences.  (Examples 1 and 2 in original notes provide visual illustrations).


**VI. Failure Mode and Effects Analysis (FMEA)**

* **Purpose:** Evaluate consequences of component failures on the process and surroundings.
* **Application:** Typically applied to specific equipment or hazardous parts of a process.
* **Limitation:** Does not consider errors in operating procedures or operator errors.


**VII. Safety Indexes (Dow Fire and Explosion Index - F&EI)**

* **Purpose:** Evaluate process hazards and assess safety/loss prevention measures.
* **Calculation:** Based on material factor (MF), general process hazard factor (F1), special process hazard factor (F2).  F3 = F1 x F2; F&EI = MF x F3.
* **Hazard Levels:**  Defined by F&EI ranges (Light, Moderate, Intermediate, Heavy, Severe).


**VIII. Safety Audits**

* **Purpose:** Comprehensive checklists covering safety, health, and loss prevention aspects.  Used as a guide for less experienced personnel and reviews general safety rules.  Provide safety rules for new process areas and emergency response procedures.
* **Checklist Questions:**  Promotes critical thinking by asking: Is it needed?  What are the alternatives? Has provision been made? Has it been checked/provided?


**IX. References**

(List of references from the original notes is included here)


This structured format provides a clearer and more accessible overview of the provided notes.  Remember that diagrams and figures from the original notes (especially the HAZOP procedure and FTA examples) would significantly enhance understanding and are highly recommended to be included in any complete study guide.

        ```
        

    
        ## Agent Interaction on 2025-09-13T11:32:19.952Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Create **at least 8 multiple-choice questions** from the following lecture notes.  

                Formatting rules:  
                - Each question should be numbered (Q1, Q2, …).  
                - Provide exactly 4 options (a, b, c, d), each option on its own line.  
                - Show the correct answer on a separate line in the format:  
                  **Answer: [letter]**  
                - Each question block must be self-contained and separated by a blank line.  
                - Make formatting clean, structured, and easy to read in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Design
5
th
Semester 
BTech
(Chemical 
Engg
.)
General Design Considerations 
Part 1
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1

1. Health and Safety Hazards2. Loss Prevention3. Environmental Protection
General Design Considerations
4. Plant Location5. Plant Layout6. Plant Operation and Control7. Patent Considerations
2

General Design Considerations
1. Health and Safety Hazards
a) Safety HazardA  highly  toxic  material  that  causes  immediateinjury is classified as a
safety hazard
.
b) Health HazardA material whose effect is apparent only after long
 
exposure at low concentrations is considered as an 
industrial health and hygiene hazard
.
3

General Design Considerations
1. Health and Safety Hazards
The potential
health hazard
to an individual by a
material  used  in  any  chemical  or  biochemicalprocess is a function of the
inherent toxicity
of the
material  and  the
frequency  and  duration  of
exposure
.
exposure
.
a) Sources of Exposureb) Exposure Evaluationc) Control of Exposure Hazardsd) Fire and Explosion Hazardse) Personnel Safety
f) Safety Regulations
4

General Design Considerations
2. Loss Prevention
Loss
in  a  chemical  industry  refers  to  the
financial  loss
associated with an accident.Consequences of 
Loss
Consequences of 
Loss
1)  Cost of repairing (or) replacing the damaged faci
lity.
2)  Taking care of all damage claims.3)  Loss of earnings from lost production during the 
repair 
period.
4)  Any associated lost sale opportunities.
5

General Design Considerations
2. Loss Prevention
Chemical processing is associated with a lot of hazards.
So,
the   design   engineer   must   try   to   minimize   the
Loss
associated with any accident.Process of 
Loss Prevention
Process of 
Loss Prevention
1)  Identification and assessment of the major hazards.2)  Control of the hazards by the most appropriate means
(e.g.,
containment,
improved maintenance
).
3)  Control  of  the  process
(e.g.,  Prevention  of  hazardous
conditions  in  process  operating  variables  by  utilizingautomatic control and relief systems, alarms, etc).
4)  Limitation of the 
Loss
when an accident occurs.
6

General Design Considerations
2. Loss Prevention
Hazard Assessment Techniques
1)  Hazard and Operability Study (
HAZOP
)
2)  Fault Tree Analysis (
FTA
)
3)  Failure Mode – and – Effect Analysis (
FMEA
)
4)  Safety Indexes5)  Safety Audits
7

General Design Considerations
2. Loss Prevention
HAZOP 
Study

Uses  to  identify  all  plant  (or)  equipment  hazards  andoperability problems.

In this technique, each SEGMENT (i.e., pipeline, piece ofequipment, instrument, etc.) is carefully examined andall possible deviations from normal operating conditionsare identified.

This is accomplished by fully defining the
INTENT
of each
SEGMENT  and  then  applying
Guide  Words
to  each
SEGMENT.
8

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
1) NO
or
NOT
No part of the intent is achieved and nothing else occurs.e.g., no flow2) MOREQuantitative increasee.g., higher temperature3) LESSQuantitative decreasee.g., lower pressure
9

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
4) AS WELL ASQualitative increasee.g., an impurity5) PART OFQuantitative decreasee.g., only one of the two components in a mixture6) REVERSEoppositee.g., back flow
10

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
7) OTHER THANNo
part
of
the
intent
is
achieved,
and
something
completely
No
part
of
the
intent
is
achieved,
and
something
completely
different occurse.g., flow of wrong material
Use these GUIDE WORDS to detect and correct the 
deviations.
11

GUIDE  WORDS
Guide WordsNo, NoneMore OfLess Of
MeaningNegation of IntentionQuantitative IncreaseQuantitative Decrease
Less OfAs Well As (More Than)Part OfReverseOther Than
Quantitative DecreaseQualitative IncreaseQualitative DecreaseLogical Opposite of IntentionComplete Substitution
12

Deviations Generated by Each Guide Word
Guide word
Deviations
NONE
No forward flow when there should be, i.e. no flow.
MORE OF
More  of  any  relevant  physical  property  than  there  s
hould
be,   e.g.   higher   flow   (rate   or   total   quantity),   high
er
temperature, higher pressure, higher viscosity, etc
.
LESS OF
Less of any relevant physical property than there s
hould be,
e.g. lower flow (rate or total quantity), lower tem
perature,
lower pressure, etc.
PART OF
Composition of system different from what it should
 be,
PART OF
Composition of system different from what it should
 be,
e.g. change in ratio of components, component missi
ng, ect.
MORE THAN
More components present in the system than there sh
ould
be, e.g. extra phase present (vapour, solid), impur
ities (air.
Water, acids, corrosion products), etc.
OTHER THAN
What else can happen apart from normal operation, e
.g.
start-up, shutdown, uprating, low rate running, alt
ernative
operation mode, failure of plant services, maintena
nce,
catalyst change, etc.
REVERSE: reverse flow
13

EXAMPLE
The flowsheet shows that raw material streams A and B are tran
sferred by
pump to a reactor, where they react to form product C. Assume t
hat the
flow rate of B should not exceed that of A. Otherwise, an explo
sion may
occur. Let’s consider the flow of A in line 1:
A
B
C
B
A
B
F
F
≤
NONE                    No flow of AMORE                    Flow of A greater than desig
n flow
LESS                      Flow of A less than design
 flow
AS WELL AS       Transfer of some component additio
nal to A
PART OF               Failure to transfer a componen
t of A
REVERSE             Flow of A in a direction opposi
te to design direction
OTHER THAN     Transfer of some material other than
 A
A
B
14

HAZOP  DISPLAY
Guide Word   Deviation  Possible Causes    Consequences  Actio
n Required
No
No Flow   Pump Fail
Line Blockage
Operator
System Over-Heated
ShutdownSystem
More
More
Flow
OperatorStops PumpExcessivePump Speed(Control System)
Over-CooledProduct(IncompleteReaction)
ProductUnacceptable;Dump
15

124356789
101112
Select a vesselExplain the general intention of the vessel and its
 lines
Select a lineExplain the intention of the lineApply the first guide wordsDevelop a meaningful deviationExamine possible causesExamine consequencesDetect hazardsMake suitable recordRepeat 6-10 for all meaningful deviations derived f
rom first guide words
Repeat 5
-
11 for all the guide words
Beginning
13141516171819202122232425
Repeat 5
-
11 for all the guide words
Mark line as having been examinedRepeat 3-13 for each lineSelect an auxiliary system (e.g. Heating system)Explain the intention of the auxiliary systemRepeat 5-12 for auxiliary systemMark auxiliary as having been examinedRepeat 15-18 for all auxiliariesExplain intention of the vesselRepeat 5-12Mark vessel as completedRepeat 1-22 for all vessels on flow sheetMark flow sheet as completedRepeat 1-24 for all flow sheets
End
Figure 8.9
Hazard and operability studies : detailed sequence 
of examination
(Chemical Industry Safety and Health Council, 1977 
Item 6)
16

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
risk analysis

The FTA is applied after the hazards have been identifiedby HAZOP.

The
FTA
is
used
to
estimate
the
likelihood
of
an
accident

The
FTA
is
used
to
estimate
the
likelihood
of
an
accident
by breaking it down into contributing sequences.

A
Logic Diagram
(or)
Fault Tree
is constructed with
AND
and
OR
GATES.

Probability of every event is expressed as a yearly rate.
e.g., A
1/100
chance occurrence per year would represent
an event on average would occur only once in every 100years.
17

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
procedure

The
accident
is  broken  down  into  its  contributing
sequences
, each of which is separated into all its
events
.
Accident
Sequences
Events

FTA provides a graphical representation between certainpossible events and an undesired consequence.
18

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic symbols

AND gate

OR gate
19

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic gates

AND  symbol
is  used  where  coincident  lower  –  order
events
are
necessary
to
cause
a
more
severe
higher
–
events
are
necessary
to
cause
a
more
severe
higher
–
order event.

Probability of each
lower – order
event is obtained.
Probability of the
Product of the probabilities of
higher – order event
=
all the lower – order events
20

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic gates

OR symbol
is used when the occurrence of
any one of
a
set
of
lower
–
order
events
is
sufficient
to
cause
a
more
set
of
lower
–
order
events
is
sufficient
to
cause
a
more
serious
higher – order event
.

Probability of each
lower – order
event is obtained.
Probability of the
Sum of the probabilities of
higher – order event
=
all the lower – order events
21

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – events & 
logic gates
22

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 1
23

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 1
24

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 2
25

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 2
26

General Design Considerations
2. Loss Prevention
Failure Mode – and – Effect Analysis (
FMEA
) –
Limited use

Usually  applied  to  a  specific  piece  of  equipment  in  aprocess
or
a
particularly
hazardous
part
of
a
larger
process
or
a
particularly
hazardous
part
of
a
larger
process.

The purpose of FMEA is to evaluate the consequence ofthe    component    failures    on    the    process    andsurroundings.

Drawback:
FMEA  does  not  consider  the  errors  in
operating   procedures   or   those   committed   by   theoperators.
27

General Design Considerations
2. Loss Prevention
Safety Indexes

Developed by the
Dow Chemical Company.

A  method  for  evaluating  the  potential  hazards  of  aprocess  and  assessing  the  safety  and  loss  preventionmeasures needed.

The Dow Fire and Explosion Index is calculated, based onthe  nature  of  the  process  and  properties  of  thematerials.
28

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Calculation of the 
Dow Fire and Explosion Index (F&EI)
1.  Material factor (MF), which is
a measure of the intrinsic
rate
of
energy
release
from
the
burning,
explosion,
or
rate
of
energy
release
from
the
burning,
explosion,
or
chemical reaction of the material
, is estimated.
2.  The general process hazard factor (F
1
) is calculated .
e.g.,
an exothermic reaction
3.  The special process hazard factor (F
2
) is estimated.
e.g.,
operating conditions, proximity to flammable areas
29

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Calculation of the 
Dow Fire and Explosion Index (F&EI)
4.  The process hazard factor (F
3
) is calculated as:
F
3
= F
1
x F
2
5.  F&EI is calculated as:
F&EI = MF x F
3
30

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Dow F&EI Range
Degree of Hazard
1 – 60
Light
61 
–
96
Moderate
61 
–
96
Moderate
97 – 127
Intermediate
128 – 158
Heavy
>=159
Severe
31

General Design Considerations
2. Loss Prevention
Safety Audits

Detailed checklists to cover every aspect of
1.Safety2.
Health
&
2.
Health
&
3.Loss Prevention

Useful guide for the less experienced.

Review of general safety rules.

Safety audits provide safety rules for new process areasand associated emergency response procedures.
32

General Design Considerations
2. Loss Prevention
Safety Audits
33

General Design Considerations
2. Loss Prevention
Safety Audits
34

General Design Considerations
2. Loss Prevention
Safety Audits
35

General Design Considerations
2. Loss Prevention
Safety Audits
36

General Design Considerations
2. Loss Prevention
Safety Audits
37

General Design Considerations
2. Loss Prevention
Safety Audits
The checklist is intended 
to 
promote thought
,
to 
raise questions 
such as 
1.  Is it needed?
2.  What are the alternatives?
3.  Has provision been made for, checked for?
4.  Has it been provided?
38

General Design Considerations
References
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
Solen, K. A., J. N. Harb, Introduction to Chemical Enginee
ring – Tools for Today and
Tomorrow, 5
th
Edition, Wiley India Private Limited, New Delhi, 2014.
39  
                ---  
            
        ```
        **Response Received from API:**
        ```
        Q1. A material whose effect is apparent only after long exposure at low concentrations is considered as:
a) A safety hazard
b) An industrial health and hygiene hazard
c) A fire hazard
d) An environmental hazard

**Answer: b**


Q2. The potential health hazard to an individual from a material used in a chemical process is a function of:
a) Only the inherent toxicity of the material
b) Only the frequency of exposure
c) Only the duration of exposure
d) The inherent toxicity, frequency, and duration of exposure

**Answer: d**


Q3.  Loss in the chemical industry primarily refers to:
a) Loss of human life
b) Environmental damage
c) Financial loss associated with an accident
d) Damage to equipment

**Answer: c**


Q4. Which of the following is NOT a hazard assessment technique mentioned in the notes?
a) HAZOP
b) FTA
c) FMEA
d) SWOT Analysis

**Answer: d**


Q5. In a HAZOP study, the guide word "MORE" signifies:
a) A qualitative increase
b) A quantitative decrease
c) A quantitative increase
d) A negation of intention

**Answer: c**


Q6.  In a HAZOP study, the guide word "OTHER THAN" indicates:
a) No part of the intent is achieved, and something completely different occurs.
b) A quantitative decrease.
c) A qualitative decrease.
d) The opposite of the intended action.

**Answer: a**


Q7. In Fault Tree Analysis (FTA), an "AND" gate means:
a) The occurrence of any one of a set of lower-order events is sufficient to cause a higher-order event.
b) Coincident lower-order events are necessary to cause a more severe higher-order event.
c)  The negation of the intention.
d) A quantitative increase.

**Answer: b**


Q8. In Fault Tree Analysis (FTA), an "OR" gate means:
a) Coincident lower-order events are necessary to cause a more severe higher-order event.
b) The occurrence of any one of a set of lower-order events is sufficient to cause a higher-order event.
c) A quantitative decrease.
d) The opposite of the intended action.

**Answer: b**


Q9. The Dow Fire and Explosion Index (F&EI) is calculated using:
a) Only the material factor (MF)
b) Only the process hazard factor (F3)
c) The material factor (MF) and the process hazard factor (F3)
d)  The material factor (MF), and the general and special process hazard factors (F1 and F2)

**Answer: c**


Q10.  A Safety Audit primarily involves:
a)  A single, focused inspection of a specific piece of equipment.
b)  Detailed checklists covering safety, health, and loss prevention aspects.
c)  The calculation of the Dow Fire and Explosion Index.
d)  The application of Fault Tree Analysis.

**Answer: b**


        ```
        

    
        ## Agent Interaction on 2025-09-13T11:59:23.056Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Time Value of Money
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Time Value of Money
Money
2

Time Value of Money
Which would you rather have ?? 
$1,000 today $1,000 today 
or 
$1,000 in $1,000 in 
5 years?5 years?
Obviously, 
$1,000 today$1,000 today
.
Money received sooner rather than later allows 
one to use the funds for investment or 
3
one to use the funds for investment or consumption purposes.  This concept is referred to as the  
TIME VALUE OF TIME VALUE OF 
MONEYMONEY
!!
Money + Time = more MoneyRemember, one CANNOT compare numbers in 
different time periods
without first adjusting 
them using an interest rate.

Interest
Interest  is  a  charge  for  borrowing  money,  usuallystated as a percentage of the amount borrowed overa specific period of time.A
large
part
of
business
activity
is
based
on
the
fact
4
A
large
part
of
business
activity
is
based
on
the
fact
that  money  can  be  borrowed  or  loaned.  Whenmoney is loaned there is always a risk that it may notbe returned. Interest is the inducement offered tomake the risk acceptable.

Interest
“When money is lent on a contract to receive not only theprincipal  sum  again,  but  also  an  increase  by  way  ofcompensation for the use, the increase is called
interest
by
those who think it lawful, and
usury
by those who do not."
(
Blackstone's  Commentaries  on  the  Laws  of  England
,
pp
.
1336
,
1769
)
.
5
pp
.
1336
,
1769
)
.
In economics, interest is considered the price of credit.Interest is often compounded, which means that interest isearned on prior interest in addition to the principal. Thetotal amount of debt grows exponentially.

Interest Rate
6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

References
Time Value of Money
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
41
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        ## CHC303 Process Design and Economics: Process Economics Study Guide

**1. Concise Bullet-Point Summary:**

* **Time Value of Money (TVM):** Money received today is worth more than the same amount received in the future due to its potential earning capacity.
* **Interest:** A charge for borrowing money, representing the cost of credit.
* **Compounding:** Interest earned on both principal and accumulated interest.  This leads to exponential growth of debt or investment.
* **Risk and Return:**  Higher risk investments generally offer a higher potential return (interest).
* **Present Worth:** The current value of a future sum of money.
* **Future Worth:** The value of an investment at a specified date in the future.
* **Interest Rate:** The percentage charged on borrowed money or earned on invested money.  A crucial factor in TVM calculations.
* **Comparing Values Across Time:**  Requires adjusting values using an appropriate interest rate.
* **Investment Decisions:**  TVM is fundamental for evaluating the financial viability of projects.
* **Economic Analysis:** TVM aids in comparing different investment options with varying timelines.
* **Usury:** Historically, the term for charging excessive interest (ethically problematic).
* **Price of Credit:** In economics, interest is viewed as the price paid for borrowing funds.


**2. Prioritized 3-Hour Study Plan:**

**Hour 1: Understanding Core Concepts (60 minutes)**

* (15 minutes) Review the bullet-point summary, focusing on definitions of key terms like **Time Value of Money**, **Interest**, and **Compounding**.
* (30 minutes) Carefully read sections of the textbook (Peters et al., Towler & Sinnott, etc.) explaining the fundamentals of TVM and the concept of the **price of credit**.  Take notes and highlight key formulas.
* (15 minutes)  Work through examples illustrating how to calculate simple interest.

**Hour 2:  Applying Concepts & Problem Solving (60 minutes)**

* (30 minutes) Solve problems involving the calculation of simple and compound interest.  Practice different scenarios (e.g., calculating future value, present value).
* (30 minutes) Focus on understanding the impact of different interest rates and time periods on investment outcomes.


**Hour 3:  Review and Practice Questions (60 minutes)**

* (15 minutes) Review your notes and highlight areas where you feel less confident.
* (30 minutes) Complete the multiple-choice questions below and review the answers.
* (15 minutes)  Review relevant sections in your textbook to clarify any remaining doubts.


**3. Multiple-Choice Questions:**

**1. Which of the following best describes the Time Value of Money (TVM)?**
a) Money has the same value regardless of when it's received.
b) Money received in the future is worth more than money received today.
c) **Money received today is worth more than the same amount received in the future.**
d) The value of money is independent of interest rates.

**2.  Interest is best defined as:**
a) A penalty for late payments.
b) A reward for saving money.
c) **A charge for borrowing money.**
d) A tax on financial transactions.

**3. What is compounding?**
a) A method of calculating simple interest.
b) The process of reducing the principal amount of a loan.
c) **The process of earning interest on both principal and accumulated interest.**
d) A type of investment with low risk.

**4.  Why is it important to consider the time value of money in investment decisions?**
a) It makes financial statements look more complex.
b) It is a regulatory requirement.
c) **It allows for accurate comparison of investments with different time horizons.**
d) It simplifies the investment process.

**5.  What does "usury" historically refer to?**
a)  The practice of investing in stocks.
b)  The fair market rate for borrowing money.
c)  **The practice of lending money at excessively high interest rates.**
d) The process of calculating compound interest.



        ```
        

    
        ## Agent Interaction on 2025-09-13T12:01:23.159Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** as an professor of college give me important questions and concepts for my exam and make it perfectly formatted and easy to read
        **Full Prompt Sent to API:**
        ```
        
            SYSTEM: You are an expert academic assistant.  

            USER REQUEST: "as an professor of college give me important questions and concepts for my exam and make it perfectly formatted and easy to read"  

            TASK: Generate study notes based on the user's request.  
            - Use clean formatting with proper spacing, line breaks, and indentation.  
            - Use headings, subheadings, and bullet points where relevant.  
            - Ensure the response is easy to read and visually neat in UI.  

            NOTES:  
            ---  
            

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Time Value of Money
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Time Value of Money
Money
2

Time Value of Money
Which would you rather have ?? 
$1,000 today $1,000 today 
or 
$1,000 in $1,000 in 
5 years?5 years?
Obviously, 
$1,000 today$1,000 today
.
Money received sooner rather than later allows 
one to use the funds for investment or 
3
one to use the funds for investment or consumption purposes.  This concept is referred to as the  
TIME VALUE OF TIME VALUE OF 
MONEYMONEY
!!
Money + Time = more MoneyRemember, one CANNOT compare numbers in 
different time periods
without first adjusting 
them using an interest rate.

Interest
Interest  is  a  charge  for  borrowing  money,  usuallystated as a percentage of the amount borrowed overa specific period of time.A
large
part
of
business
activity
is
based
on
the
fact
4
A
large
part
of
business
activity
is
based
on
the
fact
that  money  can  be  borrowed  or  loaned.  Whenmoney is loaned there is always a risk that it may notbe returned. Interest is the inducement offered tomake the risk acceptable.

Interest
“When money is lent on a contract to receive not only theprincipal  sum  again,  but  also  an  increase  by  way  ofcompensation for the use, the increase is called
interest
by
those who think it lawful, and
usury
by those who do not."
(
Blackstone's  Commentaries  on  the  Laws  of  England
,
pp
.
1336
,
1769
)
.
5
pp
.
1336
,
1769
)
.
In economics, interest is considered the price of credit.Interest is often compounded, which means that interest isearned on prior interest in addition to the principal. Thetotal amount of debt grows exponentially.

Interest Rate
6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

References
Time Value of Money
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
41
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
            ---  
            
        ```
        **Response Received from API:**
        ```
        ## CHC303 Process Design and Economics: Process Economics Exam Study Notes

**Module:** Process Economics
**Semester:** 5th Semester BTech (Chemical Engg.)
**Instructor:** Dr. D. Krishna Sandilya
**IIT (ISM), Dhanbad**


**I. Core Concepts:**

* **Time Value of Money (TVM):** This is the central concept of this module.  Understanding why money available today is worth more than the same amount in the future is crucial. This is due to its potential earning capacity through investment.

* **Interest:**  The cost of borrowing money or the return on lending it.  A deep understanding of simple and compound interest calculations is essential.

    * **Simple Interest:**  Interest calculated only on the principal amount.
    * **Compound Interest:** Interest calculated on the principal amount plus accumulated interest. This leads to exponential growth of the investment or debt.

* **Interest Rate:** The percentage charged or earned on a loan or investment over a specific period.  Factors influencing interest rates (risk, inflation, market conditions) should be understood.

* **Present Worth (PW):**  The current value of a future sum of money or a series of future cash flows, discounted at a specific interest rate.

* **Future Worth (FW):** The value of a sum of money or a series of cash flows at a specified future date, compounded at a given interest rate.

* **Annual Worth (AW):** The equivalent uniform annual cost or benefit over a specified period.  Useful for comparing projects with different lifespans.

* **Rate of Return (ROR):** The percentage return on an investment over a specific period.  Internal Rate of Return (IRR) is a key metric for project evaluation.


**II. Important Questions for the Exam:**

1.  **Explain the concept of Time Value of Money and its importance in process economics.**  Provide real-world examples illustrating its significance.

2.  **Differentiate between simple interest and compound interest.  Calculate the future value of an investment using both methods.**  Show your workings.

3.  **Describe the factors that influence interest rates.** How do these factors affect investment decisions?

4.  **Solve problems involving present worth, future worth, and annual worth calculations.**  Include scenarios with different interest rates and time horizons.

5.  **Explain the concept of the Internal Rate of Return (IRR) and its application in project evaluation.**  Compare and contrast IRR with other methods like Net Present Value (NPV).

6.  **Discuss the role of risk and uncertainty in process economic analysis.** How are these factors incorporated into project evaluations?

7.  **Analyze a case study involving a capital investment decision.**  Use relevant economic evaluation techniques to determine the feasibility of the project.

8.  **Compare and contrast different methods for economic analysis of chemical engineering projects.**  Discuss their strengths and weaknesses.  Examples include Payback Period, Discounted Payback Period,  NPV, IRR, and AW.


**III. Recommended Study Resources:**

*   Peters, M. S., K. D. Timmerhaus, R. E. West, *Plant Design and Economics for Chemical Engineers*, 5th Edition, McGraw-Hill.
*   Towler, G., R. Sinnott, *Chemical Engineering Design – Principles, Practice, Economics of Plant and Process Design*, Butterworth-Heinemann.
*   Silla, H., *Chemical Process Engineering Design and Economics*, Marcel Dekker, Inc.
*   Simpson, R., S. K. Sastry, *Chemical and Bioprocess Engineering*, Springer.
*   James R. Couper, *Process Engineering Economics*, Marcel Dekker, Inc.


This structured format should aid in your exam preparation. Remember to practice solving numerical problems to solidify your understanding of the concepts.  Good luck!

        ```
        

    
        ## Agent Interaction on 2025-09-13T14:10:37.994Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Summarize the following lecture notes into a maximum of 10 bullet points.  
                - Focus only on the most important concepts.  
                - Each point must be on a new line.  
                - Make formatting clear, structured, and easy to read in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Design
5
th
Semester 
BTech
(Chemical 
Engg
.)
General Design Considerations 
Part 1
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1

1. Health and Safety Hazards2. Loss Prevention3. Environmental Protection
General Design Considerations
4. Plant Location5. Plant Layout6. Plant Operation and Control7. Patent Considerations
2

General Design Considerations
1. Health and Safety Hazards
a) Safety HazardA  highly  toxic  material  that  causes  immediateinjury is classified as a
safety hazard
.
b) Health HazardA material whose effect is apparent only after long
 
exposure at low concentrations is considered as an 
industrial health and hygiene hazard
.
3

General Design Considerations
1. Health and Safety Hazards
The potential
health hazard
to an individual by a
material  used  in  any  chemical  or  biochemicalprocess is a function of the
inherent toxicity
of the
material  and  the
frequency  and  duration  of
exposure
.
exposure
.
a) Sources of Exposureb) Exposure Evaluationc) Control of Exposure Hazardsd) Fire and Explosion Hazardse) Personnel Safety
f) Safety Regulations
4

General Design Considerations
2. Loss Prevention
Loss
in  a  chemical  industry  refers  to  the
financial  loss
associated with an accident.Consequences of 
Loss
Consequences of 
Loss
1)  Cost of repairing (or) replacing the damaged faci
lity.
2)  Taking care of all damage claims.3)  Loss of earnings from lost production during the 
repair 
period.
4)  Any associated lost sale opportunities.
5

General Design Considerations
2. Loss Prevention
Chemical processing is associated with a lot of hazards.
So,
the   design   engineer   must   try   to   minimize   the
Loss
associated with any accident.Process of 
Loss Prevention
Process of 
Loss Prevention
1)  Identification and assessment of the major hazards.2)  Control of the hazards by the most appropriate means
(e.g.,
containment,
improved maintenance
).
3)  Control  of  the  process
(e.g.,  Prevention  of  hazardous
conditions  in  process  operating  variables  by  utilizingautomatic control and relief systems, alarms, etc).
4)  Limitation of the 
Loss
when an accident occurs.
6

General Design Considerations
2. Loss Prevention
Hazard Assessment Techniques
1)  Hazard and Operability Study (
HAZOP
)
2)  Fault Tree Analysis (
FTA
)
3)  Failure Mode – and – Effect Analysis (
FMEA
)
4)  Safety Indexes5)  Safety Audits
7

General Design Considerations
2. Loss Prevention
HAZOP 
Study

Uses  to  identify  all  plant  (or)  equipment  hazards  andoperability problems.

In this technique, each SEGMENT (i.e., pipeline, piece ofequipment, instrument, etc.) is carefully examined andall possible deviations from normal operating conditionsare identified.

This is accomplished by fully defining the
INTENT
of each
SEGMENT  and  then  applying
Guide  Words
to  each
SEGMENT.
8

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
1) NO
or
NOT
No part of the intent is achieved and nothing else occurs.e.g., no flow2) MOREQuantitative increasee.g., higher temperature3) LESSQuantitative decreasee.g., lower pressure
9

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
4) AS WELL ASQualitative increasee.g., an impurity5) PART OFQuantitative decreasee.g., only one of the two components in a mixture6) REVERSEoppositee.g., back flow
10

General Design Considerations
2. Loss Prevention
Guide Words 
used in 
HAZOP 
Study
7) OTHER THANNo
part
of
the
intent
is
achieved,
and
something
completely
No
part
of
the
intent
is
achieved,
and
something
completely
different occurse.g., flow of wrong material
Use these GUIDE WORDS to detect and correct the 
deviations.
11

GUIDE  WORDS
Guide WordsNo, NoneMore OfLess Of
MeaningNegation of IntentionQuantitative IncreaseQuantitative Decrease
Less OfAs Well As (More Than)Part OfReverseOther Than
Quantitative DecreaseQualitative IncreaseQualitative DecreaseLogical Opposite of IntentionComplete Substitution
12

Deviations Generated by Each Guide Word
Guide word
Deviations
NONE
No forward flow when there should be, i.e. no flow.
MORE OF
More  of  any  relevant  physical  property  than  there  s
hould
be,   e.g.   higher   flow   (rate   or   total   quantity),   high
er
temperature, higher pressure, higher viscosity, etc
.
LESS OF
Less of any relevant physical property than there s
hould be,
e.g. lower flow (rate or total quantity), lower tem
perature,
lower pressure, etc.
PART OF
Composition of system different from what it should
 be,
PART OF
Composition of system different from what it should
 be,
e.g. change in ratio of components, component missi
ng, ect.
MORE THAN
More components present in the system than there sh
ould
be, e.g. extra phase present (vapour, solid), impur
ities (air.
Water, acids, corrosion products), etc.
OTHER THAN
What else can happen apart from normal operation, e
.g.
start-up, shutdown, uprating, low rate running, alt
ernative
operation mode, failure of plant services, maintena
nce,
catalyst change, etc.
REVERSE: reverse flow
13

EXAMPLE
The flowsheet shows that raw material streams A and B are tran
sferred by
pump to a reactor, where they react to form product C. Assume t
hat the
flow rate of B should not exceed that of A. Otherwise, an explo
sion may
occur. Let’s consider the flow of A in line 1:
A
B
C
B
A
B
F
F
≤
NONE                    No flow of AMORE                    Flow of A greater than desig
n flow
LESS                      Flow of A less than design
 flow
AS WELL AS       Transfer of some component additio
nal to A
PART OF               Failure to transfer a componen
t of A
REVERSE             Flow of A in a direction opposi
te to design direction
OTHER THAN     Transfer of some material other than
 A
A
B
14

HAZOP  DISPLAY
Guide Word   Deviation  Possible Causes    Consequences  Actio
n Required
No
No Flow   Pump Fail
Line Blockage
Operator
System Over-Heated
ShutdownSystem
More
More
Flow
OperatorStops PumpExcessivePump Speed(Control System)
Over-CooledProduct(IncompleteReaction)
ProductUnacceptable;Dump
15

124356789
101112
Select a vesselExplain the general intention of the vessel and its
 lines
Select a lineExplain the intention of the lineApply the first guide wordsDevelop a meaningful deviationExamine possible causesExamine consequencesDetect hazardsMake suitable recordRepeat 6-10 for all meaningful deviations derived f
rom first guide words
Repeat 5
-
11 for all the guide words
Beginning
13141516171819202122232425
Repeat 5
-
11 for all the guide words
Mark line as having been examinedRepeat 3-13 for each lineSelect an auxiliary system (e.g. Heating system)Explain the intention of the auxiliary systemRepeat 5-12 for auxiliary systemMark auxiliary as having been examinedRepeat 15-18 for all auxiliariesExplain intention of the vesselRepeat 5-12Mark vessel as completedRepeat 1-22 for all vessels on flow sheetMark flow sheet as completedRepeat 1-24 for all flow sheets
End
Figure 8.9
Hazard and operability studies : detailed sequence 
of examination
(Chemical Industry Safety and Health Council, 1977 
Item 6)
16

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
risk analysis

The FTA is applied after the hazards have been identifiedby HAZOP.

The
FTA
is
used
to
estimate
the
likelihood
of
an
accident

The
FTA
is
used
to
estimate
the
likelihood
of
an
accident
by breaking it down into contributing sequences.

A
Logic Diagram
(or)
Fault Tree
is constructed with
AND
and
OR
GATES.

Probability of every event is expressed as a yearly rate.
e.g., A
1/100
chance occurrence per year would represent
an event on average would occur only once in every 100years.
17

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
procedure

The
accident
is  broken  down  into  its  contributing
sequences
, each of which is separated into all its
events
.
Accident
Sequences
Events

FTA provides a graphical representation between certainpossible events and an undesired consequence.
18

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic symbols

AND gate

OR gate
19

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic gates

AND  symbol
is  used  where  coincident  lower  –  order
events
are
necessary
to
cause
a
more
severe
higher
–
events
are
necessary
to
cause
a
more
severe
higher
–
order event.

Probability of each
lower – order
event is obtained.
Probability of the
Product of the probabilities of
higher – order event
=
all the lower – order events
20

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) –
logic gates

OR symbol
is used when the occurrence of
any one of
a
set
of
lower
–
order
events
is
sufficient
to
cause
a
more
set
of
lower
–
order
events
is
sufficient
to
cause
a
more
serious
higher – order event
.

Probability of each
lower – order
event is obtained.
Probability of the
Sum of the probabilities of
higher – order event
=
all the lower – order events
21

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – events & 
logic gates
22

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 1
23

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 1
24

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 2
25

General Design Considerations
2. Loss Prevention
Fault Tree Analysis (
FTA
) – example 2
26

General Design Considerations
2. Loss Prevention
Failure Mode – and – Effect Analysis (
FMEA
) –
Limited use

Usually  applied  to  a  specific  piece  of  equipment  in  aprocess
or
a
particularly
hazardous
part
of
a
larger
process
or
a
particularly
hazardous
part
of
a
larger
process.

The purpose of FMEA is to evaluate the consequence ofthe    component    failures    on    the    process    andsurroundings.

Drawback:
FMEA  does  not  consider  the  errors  in
operating   procedures   or   those   committed   by   theoperators.
27

General Design Considerations
2. Loss Prevention
Safety Indexes

Developed by the
Dow Chemical Company.

A  method  for  evaluating  the  potential  hazards  of  aprocess  and  assessing  the  safety  and  loss  preventionmeasures needed.

The Dow Fire and Explosion Index is calculated, based onthe  nature  of  the  process  and  properties  of  thematerials.
28

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Calculation of the 
Dow Fire and Explosion Index (F&EI)
1.  Material factor (MF), which is
a measure of the intrinsic
rate
of
energy
release
from
the
burning,
explosion,
or
rate
of
energy
release
from
the
burning,
explosion,
or
chemical reaction of the material
, is estimated.
2.  The general process hazard factor (F
1
) is calculated .
e.g.,
an exothermic reaction
3.  The special process hazard factor (F
2
) is estimated.
e.g.,
operating conditions, proximity to flammable areas
29

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Calculation of the 
Dow Fire and Explosion Index (F&EI)
4.  The process hazard factor (F
3
) is calculated as:
F
3
= F
1
x F
2
5.  F&EI is calculated as:
F&EI = MF x F
3
30

General Design Considerations
2. Loss Prevention
Safety Indexes (
contd.
)
Dow F&EI Range
Degree of Hazard
1 – 60
Light
61 
–
96
Moderate
61 
–
96
Moderate
97 – 127
Intermediate
128 – 158
Heavy
>=159
Severe
31

General Design Considerations
2. Loss Prevention
Safety Audits

Detailed checklists to cover every aspect of
1.Safety2.
Health
&
2.
Health
&
3.Loss Prevention

Useful guide for the less experienced.

Review of general safety rules.

Safety audits provide safety rules for new process areasand associated emergency response procedures.
32

General Design Considerations
2. Loss Prevention
Safety Audits
33

General Design Considerations
2. Loss Prevention
Safety Audits
34

General Design Considerations
2. Loss Prevention
Safety Audits
35

General Design Considerations
2. Loss Prevention
Safety Audits
36

General Design Considerations
2. Loss Prevention
Safety Audits
37

General Design Considerations
2. Loss Prevention
Safety Audits
The checklist is intended 
to 
promote thought
,
to 
raise questions 
such as 
1.  Is it needed?
2.  What are the alternatives?
3.  Has provision been made for, checked for?
4.  Has it been provided?
38

General Design Considerations
References
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
Solen, K. A., J. N. Harb, Introduction to Chemical Enginee
ring – Tools for Today and
Tomorrow, 5
th
Edition, Wiley India Private Limited, New Delhi, 2014.
39  
                ---  
             
        ```
        **Response Received from API:**
        ```
        * **General Design Considerations:**  Prioritize health, safety, environmental protection, plant location, layout, operation, control, and patent issues.

* **Health & Safety Hazards:**  Assess inherent toxicity, exposure frequency, and duration to mitigate risks; address fire, explosion, and personnel safety; comply with regulations.

* **Loss Prevention:** Minimize financial losses from accidents by identifying, assessing, and controlling major hazards; utilize containment, improved maintenance, and process control.

* **Hazard Assessment Techniques:** Employ HAZOP, FTA, FMEA, safety indexes, and safety audits for risk assessment and mitigation.

* **HAZOP Study:**  Systematically examine process segments, applying guide words (NO, MORE, LESS, AS WELL AS, PART OF, REVERSE, OTHER THAN) to identify deviations and potential hazards.

* **Fault Tree Analysis (FTA):**  Estimates accident likelihood by breaking down contributing sequences using AND/OR gates and probabilities.

* **Failure Mode and Effect Analysis (FMEA):** Evaluates consequences of equipment failures on the process, but doesn't account for operator error.

* **Safety Indexes (e.g., Dow F&EI):** Quantify process hazards based on material factors and process characteristics to assess risk levels.

* **Safety Audits:** Utilize checklists to comprehensively review safety, health, and loss prevention measures; promote proactive identification of issues.

* **References:**  Consult standard chemical engineering design and economics textbooks for detailed information.

        ```
        

    
        ## Agent Interaction on 2025-09-13T14:29:32.932Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Summarize the following lecture notes into a maximum of 10 bullet points.  
                - Focus only on the most important concepts.  
                - Each point must be on a new line.  
                - Make formatting clear, structured, and easy to read in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Design
5
th
Semester 
BTech
(Chemical 
Engg
.)
General Design Considerations
Part 2
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1

1. Health and Safety Hazards2. Loss Prevention3. Environmental Protection
General Design Considerations
4. Plant Location5. Plant Layout6. Plant Operation and Control7. Patent Considerations
2

General Design Considerations
4. Plant Location
The  geographical  location  of  the  final  plant  can  have  stronginfluence on the success of an industrial venture.Considerable
care
must
be
exercised
in
selecting
the
plant
site,
Considerable
care
must
be
exercised
in
selecting
the
plant
site,
and many different factors must be considered.Primarily, the plant should be located where the
minimum cost of
production
and
distribution
can be obtained, but other factors,
such as expansion and safe living conditions for plant opera
tion
as well as the surrounding community, are also important.
3

General Design Considerations
4. Plant Location
A general consensus as to the plant location should be obtain
ed
before a design project reaches the detailed estimate stage
, and
a firm location should be established upon completion of the
detailed
-
estimate
design
.
detailed
-
estimate
design
.
The choice of the final site should first be based on a complet
e
survey   of   the   advantages   and   disadvantages   of   variousgeographical  areas  and,  ultimately,  on  the  advantages  anddisadvantages of available real estate.
4

General Design Considerations
4. Plant Location
The  following  factors  should  be  considered  in  selecting  aplant site:
1.  Raw materials availability2.  Markets3.  Energy availability4.
Climate
4.
Climate
5.  Transportation facilities6.  Water supply7.  Waste disposal8.  Labor supply9.  Taxation and legal restrictions10. Site characteristics11. Flood and fire protection12. Community factors
5

General Design Considerations
4. Plant Location
1.  Raw materials availability
The source of raw materials is one of the most importantfactors  influencing  the  selection  of  a  plant  site.
This  is
particularly  true  if  large  volumes  of  raw  materials  areconsumed, because location near the raw-materials source
permits
considerable
reduction
in
transportation
and
storage
permits
considerable
reduction
in
transportation
and
storage
charges.

Attention should be given to
(i) the purchased price of the raw materials(ii) distance from the source of supply(iii) freight or transportation expenses(iv) availability and reliability of supply(v) Purity of the raw materials &(vi) Storage requirements
6

General Design Considerations
4. Plant Location
2.  Markets
The location of markets or intermediate distribution cente
rs
affects the cost of product distribution and the time requir
ed
for
shipping
.
for
shipping
.

Proximity to the major markets is an important consideratio
n
in the selection of a plant site, because the buyer usuallyfinds it advantageous to purchase from nearby sources.

It should be noted that markets are needed for by-productsas well as for major final products.
7

General Design Considerations
4. Plant Location
3.  Energy availability
Power and steam requirements are high in most industrialplants,  and  fuel  is  ordinarily  required  to  supply  theseutilities.
Consequently, power and fuel can be combined as
one
major
factor
in
the
choice
of
a
plant
site
.
one
major
factor
in
the
choice
of
a
plant
site
.

Electrolytic processes require a cheap source of electrici
ty,
and plants using electrolytic processes are often located n
ear
large hydroelectric installations.

If the plant requires large quantities of coal or oil, locati
on
near a source of fuel supply may be essential for economicoperation.

The local cost of power can help determine whether powershould be purchased or self-generated.
8

General Design Considerations
4. Plant Location
4.  Climate
If  the  plant  is  located  in  a  cold  climate,  costs  may  beincreased  by  the  necessity  for  construction  of  protectiveshelters around the process equipment.

Special cooling towers or air-conditioning equipment may b
e
required if the prevailing temperatures are high.

Excessive humidity or extremes of hot or cold weather canhave a serious effect on the economic operation of a plant,and these factors should be examined when selecting a plantsite.
9

General Design Considerations
4. Plant Location
5.  Transportation facilities
Water, railroads, and highways are the common means oftransportation used by major industrial concerns.

The  kind  and  amount  of  products  and  raw  materialsdetermine the most suitable type of transportation facilit
ies.

In any case, careful attention should be given to local freig
ht
rates and existing railroad lines.

The proximity to railroad centers and the possibility of can
al,
river, lake, or ocean transport must be considered.
10

General Design Considerations
4. Plant Location
5.  Transportation facilities (contd.)
Motor trucking facilities are widely used and can serve as auseful supplement to rail and water facilities.

If  possible,  the  plant  site  should  have  access to all threetypes  of  transportation,  and  certainly,  at  least  two  typesshould be available.

There   is   usually   need   for   convenient   air   and   railtransportation  facilities  between  the  plant  and  the  maincompany headquarters, and effective transportation facil
ities
for the plant personnel are necessary.
11

General Design Considerations
4. Plant Location
6.  Water supply
The  process  industries  use  large  quantities  of  water  forcooling, washing, steam generation, and as a raw material.The plant, therefore, must be located where a dependablesupply
of
water
is
available
.
supply
of
water
is
available
.

A large river or lake is preferable, although deep wells orartesian wells may be satisfactory if the amount of waterrequired is not too great.

The  level  of  the  existing  water  table  can  be  checked  byconsulting the state geological survey, and information onthe constancy of the water table.
12

General Design Considerations
4. Plant Location
6.  Water supply (contd.)
The year-round capacity of local rivers or lakes should beobtained from the state geological survey.

If the water supply shows seasonal fluctuations, it may bedesirable to construct a reservoir or to drill several stand
by
wells.

The  temperature,  mineral  content,  silt  or  sand  content,bacteriological content, and cost for supply and purificat
ion
treatment must also be considered when choosing a watersupply.
13

General Design Considerations
4. Plant Location
7.  Waste disposal
In recent years, many legal restrictions have been placed onthe  methods  for  disposing  of  waste  materials  from  theprocess industries.

The site selected for a plant should have adequate capacityand
facilities
for
correct
waste
disposal
.
and
facilities
for
correct
waste
disposal
.

Even  though  a  given  area  has  minimal  restrictions  onpollution, it should not be assumed that this condition willcontinue to exist.

In choosing a plant site, the permissible tolerance levels f
or
various  methods  of  waste  disposal  should  be  consideredcarefully.

Attention  should  be  given  to  potential  requirements  foradditional waste-treatment facilities.
14

General Design Considerations
4. Plant Location
8.  Labor supply
The type and supply of labor available in the vicinity of aproposed
plant
site
must
be
examined
.
proposed
plant
site
must
be
examined
.

Consideration should be given to
(i)   pay scales,(ii)  restrictions on number of hours worked per week(iii) competing industries that can cause dissatisfaction
or
higher turnover rates among the workers &
(iv) variations in the skill and productivity of the workers
15

General Design Considerations
4. Plant Location
9.  Taxation and legal restrictions
Central   and   state   tax   rates   on   property   income,unemployment insurance, and similar items may vary fromone location to another.

Similarly, local regulations on zoning (
Zoning laws typically
specify the areas in which residential, industrial, recrea
tional
or  commercial  activities  may  take  place.
),  building  codes,
nuisance  aspects,  and  transportation  facilities  can  have  amajor influence on the final choice of a plant site.

In fact, zoning difficulties and obtaining the many require
d
permits can often be much more important in terms of costand time delays than many of the factors already discussed.
16

General Design Considerations
4. Plant Location
10. Site characteristics
The  characteristics  of  the  land  at  a  proposed  plant  siteshould be examined carefully.

The topography of the tract of land and the soil structuremust
be
considered,
since
either
or
both
may
have
a
must
be
considered,
since
either
or
both
may
have
a
pronounced effect on construction costs.

The cost of the land is important, as well as local buildingcosts and living conditions.

Future  changes  may  make  it  desirable  or  necessary  toexpand  the  plant  facilities.
Therefore,  even  though  no
immediate  expansion  is  planned,  a  new  plant  should  beconstructed at a location where additional space is availab
le.
17

General Design Considerations
4. Plant Location
11. Flood and fire protection
Many industrial plants are located along rivers or near largebodies of water, and there are risks of flood damage.

Before selecting a plant site, the regional history of natur
al
events
of
this
type
should
be
examined
and
the
events
of
this
type
should
be
examined
and
the
consequences of such occurrences considered.

Protection from losses by fire is another important factor i
n
selecting a plant location.

In  case  of  a  major  fire,  assistance  from  outside  firedepartments should be available.

Fire hazards in the immediate area surrounding the plant sit
e
must not be overlooked.
18

General Design Considerations
4. Plant Location
12. Community factors
The character and facilities of a community can have quitean effect on the location of the plant.

If a certain number of facilities for satisfactory living of
plant
personnel
do
not
exist,
it
often
becomes
a
burden
for
the
personnel
do
not
exist,
it
often
becomes
a
burden
for
the
plant to subsidize such facilities.

Cultural facilities of the community are important to soundgrowth.

Churches,    libraries,    schools,    civic    theatres,    concertassociations, and other similar groups, if active and dynam
ic,
do much to make a community progressive.
19

General Design Considerations
4. Plant Location
12. Community factors (contd.)
The
problem
of
recreation
deserves
special
consideration
.

The
problem
of
recreation
deserves
special
consideration
.

The  efficiency,  character,  and  history  of  both  central  andstate government should be evaluated .

The existence of low taxes is not in itself a favorable situat
ion
unless  the  community  is  already  well  developed  andrelatively free of debt.
20

General Design Considerations
4. Plant Location
The 
major factors
in the selection of most plant sites are
1.Raw materials2.Markets3.
Energy supply
3.
Energy supply
4.Climate5.Transportation facilities 
&
6.Water supply
However, the final decision on selecting the plant 
should take 
into consideration all the factors that can affect 
the ultimate 
success of the overall operation.
21

General Design Considerations
5. Plant Layout

After   the   process   flow   diagrams   (
PFD
s)   are
completed and before detailed piping, structural, andelectrical  design  can  begin
,  the  layout  of  process
units  in  a  plant  and  the  equipment  within  theseprocess units must be planned.
This   layout   can   play   an   important   part   in
determining construction  and  manufacturing costs,and thus must be planned carefully with attentionbeing given to future problems that may arise.
Since each plant differs in many ways and no two
plant sites are exactly alike,
there in no one ideal
plant layout.
22

General Design Considerations
5. Plant Layout
However, proper layout in each case will include arrangemen
t of processing
areas,  storage  areas,  and  handling  areas in  efficient  coord
ination
and  with
regard to such factors as:
1.   New site development or addition to previously de
veloped 
site
2.   Type and quantity of products to be produced3.
Type of process and product control
3.
Type of process and product control
4.   Operational convenience and accessibility5.   Economic distribution of utilities and services6.   Type of buildings required and building code requ
irements
7.   Health and safety considerations8.   Waste disposable requirements9.   Auxiliary equipment10.  Space available and space required11.  Roads and railroads12.  Possible future expansion
23

General Design Considerations
5. Plant Layout
Preparation of the layout
Scale
drawings,
complete
with
elevation
indications  can  be  used  for  determining  the  bestlocation for equipment and facilities.
Elementary  layouts  are  developed  first.  These
show the fundamental relationships between storagespace and operating equipment.
The next step requires consideration of the safe
operational  sequence  and  gives  a  primary  layoutbased  on  the  flow  of  materials,  unit  operations,storage, and future expansion.
24

General Design Considerations
5. Plant Layout
Preparation of the layout (contd.)
By  analyzing  all  the  factors  involved  in  plant
layout,    a    detailed    recommendation    can    bepresented,  and  drawings  and  elevations,  includingisometric
drawings
of
the
piping
systems,
can
be
prepared
.
isometric
drawings
of
the
piping
systems,
can
be
prepared
.

Templates,  or  small  cutouts  constructed  to  a
selected  scale  are  useful  for  making  rapid  andaccurate  layouts.
Three  dimensional  models  are
often made
Errors in a plant layout are easily located when
three dimensional models are used.
25

General Design Considerations
References
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
Solen, K. A., J. N. Harb, Introduction to Chemical Enginee
ring – Tools for Today and
Tomorrow, 5
th
Edition, Wiley India Private Limited, New Delhi, 2014.
26  
                ---  
             
        ```
        **Response Received from API:**
        ```
        * **Health, Safety, and Environmental Considerations:**  Prioritize worker safety, loss prevention, and environmental protection in all design aspects.

* **Plant Location Factors:**  Optimal plant location minimizes production and distribution costs, considering raw materials, markets, energy, climate, transportation, water, waste disposal, labor, taxes, legal restrictions, and community factors.

* **Raw Material Proximity:**  Locate near raw material sources to reduce transportation and storage costs; consider price, distance, freight, supply reliability, purity, and storage needs.

* **Market Accessibility:**  Proximity to markets (including by-product markets) reduces distribution costs and delivery times.

* **Energy Availability and Cost:**  Consider power and fuel requirements; cheap electricity is crucial for electrolytic processes; evaluate self-generation vs. purchasing power.

* **Climate Impact:**  Extreme temperatures or humidity may increase costs (e.g., protective shelters, cooling systems).

* **Transportation Infrastructure:**  Access to rail, water, and road transport is vital; consider freight rates and accessibility for raw materials and finished products.

* **Water Supply and Waste Disposal:**  Ensure a reliable water supply for various uses; address waste disposal regulations and potential future needs for treatment facilities.

* **Labor Force Analysis:**  Evaluate labor supply, skill levels, pay scales, and potential for worker dissatisfaction or high turnover.

* **Plant Layout Planning:**  Efficient plant layout minimizes costs and maximizes operational efficiency, considering process flow, storage, material handling, safety, and future expansion.

        ```
        

    
        ## Agent Interaction on 2025-09-13T14:29:50.111Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Design
5
th
Semester 
BTech
(Chemical 
Engg
.)
General Design Considerations
Part 2
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1

1. Health and Safety Hazards2. Loss Prevention3. Environmental Protection
General Design Considerations
4. Plant Location5. Plant Layout6. Plant Operation and Control7. Patent Considerations
2

General Design Considerations
4. Plant Location
The  geographical  location  of  the  final  plant  can  have  stronginfluence on the success of an industrial venture.Considerable
care
must
be
exercised
in
selecting
the
plant
site,
Considerable
care
must
be
exercised
in
selecting
the
plant
site,
and many different factors must be considered.Primarily, the plant should be located where the
minimum cost of
production
and
distribution
can be obtained, but other factors,
such as expansion and safe living conditions for plant opera
tion
as well as the surrounding community, are also important.
3

General Design Considerations
4. Plant Location
A general consensus as to the plant location should be obtain
ed
before a design project reaches the detailed estimate stage
, and
a firm location should be established upon completion of the
detailed
-
estimate
design
.
detailed
-
estimate
design
.
The choice of the final site should first be based on a complet
e
survey   of   the   advantages   and   disadvantages   of   variousgeographical  areas  and,  ultimately,  on  the  advantages  anddisadvantages of available real estate.
4

General Design Considerations
4. Plant Location
The  following  factors  should  be  considered  in  selecting  aplant site:
1.  Raw materials availability2.  Markets3.  Energy availability4.
Climate
4.
Climate
5.  Transportation facilities6.  Water supply7.  Waste disposal8.  Labor supply9.  Taxation and legal restrictions10. Site characteristics11. Flood and fire protection12. Community factors
5

General Design Considerations
4. Plant Location
1.  Raw materials availability
The source of raw materials is one of the most importantfactors  influencing  the  selection  of  a  plant  site.
This  is
particularly  true  if  large  volumes  of  raw  materials  areconsumed, because location near the raw-materials source
permits
considerable
reduction
in
transportation
and
storage
permits
considerable
reduction
in
transportation
and
storage
charges.

Attention should be given to
(i) the purchased price of the raw materials(ii) distance from the source of supply(iii) freight or transportation expenses(iv) availability and reliability of supply(v) Purity of the raw materials &(vi) Storage requirements
6

General Design Considerations
4. Plant Location
2.  Markets
The location of markets or intermediate distribution cente
rs
affects the cost of product distribution and the time requir
ed
for
shipping
.
for
shipping
.

Proximity to the major markets is an important consideratio
n
in the selection of a plant site, because the buyer usuallyfinds it advantageous to purchase from nearby sources.

It should be noted that markets are needed for by-productsas well as for major final products.
7

General Design Considerations
4. Plant Location
3.  Energy availability
Power and steam requirements are high in most industrialplants,  and  fuel  is  ordinarily  required  to  supply  theseutilities.
Consequently, power and fuel can be combined as
one
major
factor
in
the
choice
of
a
plant
site
.
one
major
factor
in
the
choice
of
a
plant
site
.

Electrolytic processes require a cheap source of electrici
ty,
and plants using electrolytic processes are often located n
ear
large hydroelectric installations.

If the plant requires large quantities of coal or oil, locati
on
near a source of fuel supply may be essential for economicoperation.

The local cost of power can help determine whether powershould be purchased or self-generated.
8

General Design Considerations
4. Plant Location
4.  Climate
If  the  plant  is  located  in  a  cold  climate,  costs  may  beincreased  by  the  necessity  for  construction  of  protectiveshelters around the process equipment.

Special cooling towers or air-conditioning equipment may b
e
required if the prevailing temperatures are high.

Excessive humidity or extremes of hot or cold weather canhave a serious effect on the economic operation of a plant,and these factors should be examined when selecting a plantsite.
9

General Design Considerations
4. Plant Location
5.  Transportation facilities
Water, railroads, and highways are the common means oftransportation used by major industrial concerns.

The  kind  and  amount  of  products  and  raw  materialsdetermine the most suitable type of transportation facilit
ies.

In any case, careful attention should be given to local freig
ht
rates and existing railroad lines.

The proximity to railroad centers and the possibility of can
al,
river, lake, or ocean transport must be considered.
10

General Design Considerations
4. Plant Location
5.  Transportation facilities (contd.)
Motor trucking facilities are widely used and can serve as auseful supplement to rail and water facilities.

If  possible,  the  plant  site  should  have  access to all threetypes  of  transportation,  and  certainly,  at  least  two  typesshould be available.

There   is   usually   need   for   convenient   air   and   railtransportation  facilities  between  the  plant  and  the  maincompany headquarters, and effective transportation facil
ities
for the plant personnel are necessary.
11

General Design Considerations
4. Plant Location
6.  Water supply
The  process  industries  use  large  quantities  of  water  forcooling, washing, steam generation, and as a raw material.The plant, therefore, must be located where a dependablesupply
of
water
is
available
.
supply
of
water
is
available
.

A large river or lake is preferable, although deep wells orartesian wells may be satisfactory if the amount of waterrequired is not too great.

The  level  of  the  existing  water  table  can  be  checked  byconsulting the state geological survey, and information onthe constancy of the water table.
12

General Design Considerations
4. Plant Location
6.  Water supply (contd.)
The year-round capacity of local rivers or lakes should beobtained from the state geological survey.

If the water supply shows seasonal fluctuations, it may bedesirable to construct a reservoir or to drill several stand
by
wells.

The  temperature,  mineral  content,  silt  or  sand  content,bacteriological content, and cost for supply and purificat
ion
treatment must also be considered when choosing a watersupply.
13

General Design Considerations
4. Plant Location
7.  Waste disposal
In recent years, many legal restrictions have been placed onthe  methods  for  disposing  of  waste  materials  from  theprocess industries.

The site selected for a plant should have adequate capacityand
facilities
for
correct
waste
disposal
.
and
facilities
for
correct
waste
disposal
.

Even  though  a  given  area  has  minimal  restrictions  onpollution, it should not be assumed that this condition willcontinue to exist.

In choosing a plant site, the permissible tolerance levels f
or
various  methods  of  waste  disposal  should  be  consideredcarefully.

Attention  should  be  given  to  potential  requirements  foradditional waste-treatment facilities.
14

General Design Considerations
4. Plant Location
8.  Labor supply
The type and supply of labor available in the vicinity of aproposed
plant
site
must
be
examined
.
proposed
plant
site
must
be
examined
.

Consideration should be given to
(i)   pay scales,(ii)  restrictions on number of hours worked per week(iii) competing industries that can cause dissatisfaction
or
higher turnover rates among the workers &
(iv) variations in the skill and productivity of the workers
15

General Design Considerations
4. Plant Location
9.  Taxation and legal restrictions
Central   and   state   tax   rates   on   property   income,unemployment insurance, and similar items may vary fromone location to another.

Similarly, local regulations on zoning (
Zoning laws typically
specify the areas in which residential, industrial, recrea
tional
or  commercial  activities  may  take  place.
),  building  codes,
nuisance  aspects,  and  transportation  facilities  can  have  amajor influence on the final choice of a plant site.

In fact, zoning difficulties and obtaining the many require
d
permits can often be much more important in terms of costand time delays than many of the factors already discussed.
16

General Design Considerations
4. Plant Location
10. Site characteristics
The  characteristics  of  the  land  at  a  proposed  plant  siteshould be examined carefully.

The topography of the tract of land and the soil structuremust
be
considered,
since
either
or
both
may
have
a
must
be
considered,
since
either
or
both
may
have
a
pronounced effect on construction costs.

The cost of the land is important, as well as local buildingcosts and living conditions.

Future  changes  may  make  it  desirable  or  necessary  toexpand  the  plant  facilities.
Therefore,  even  though  no
immediate  expansion  is  planned,  a  new  plant  should  beconstructed at a location where additional space is availab
le.
17

General Design Considerations
4. Plant Location
11. Flood and fire protection
Many industrial plants are located along rivers or near largebodies of water, and there are risks of flood damage.

Before selecting a plant site, the regional history of natur
al
events
of
this
type
should
be
examined
and
the
events
of
this
type
should
be
examined
and
the
consequences of such occurrences considered.

Protection from losses by fire is another important factor i
n
selecting a plant location.

In  case  of  a  major  fire,  assistance  from  outside  firedepartments should be available.

Fire hazards in the immediate area surrounding the plant sit
e
must not be overlooked.
18

General Design Considerations
4. Plant Location
12. Community factors
The character and facilities of a community can have quitean effect on the location of the plant.

If a certain number of facilities for satisfactory living of
plant
personnel
do
not
exist,
it
often
becomes
a
burden
for
the
personnel
do
not
exist,
it
often
becomes
a
burden
for
the
plant to subsidize such facilities.

Cultural facilities of the community are important to soundgrowth.

Churches,    libraries,    schools,    civic    theatres,    concertassociations, and other similar groups, if active and dynam
ic,
do much to make a community progressive.
19

General Design Considerations
4. Plant Location
12. Community factors (contd.)
The
problem
of
recreation
deserves
special
consideration
.

The
problem
of
recreation
deserves
special
consideration
.

The  efficiency,  character,  and  history  of  both  central  andstate government should be evaluated .

The existence of low taxes is not in itself a favorable situat
ion
unless  the  community  is  already  well  developed  andrelatively free of debt.
20

General Design Considerations
4. Plant Location
The 
major factors
in the selection of most plant sites are
1.Raw materials2.Markets3.
Energy supply
3.
Energy supply
4.Climate5.Transportation facilities 
&
6.Water supply
However, the final decision on selecting the plant 
should take 
into consideration all the factors that can affect 
the ultimate 
success of the overall operation.
21

General Design Considerations
5. Plant Layout

After   the   process   flow   diagrams   (
PFD
s)   are
completed and before detailed piping, structural, andelectrical  design  can  begin
,  the  layout  of  process
units  in  a  plant  and  the  equipment  within  theseprocess units must be planned.
This   layout   can   play   an   important   part   in
determining construction  and  manufacturing costs,and thus must be planned carefully with attentionbeing given to future problems that may arise.
Since each plant differs in many ways and no two
plant sites are exactly alike,
there in no one ideal
plant layout.
22

General Design Considerations
5. Plant Layout
However, proper layout in each case will include arrangemen
t of processing
areas,  storage  areas,  and  handling  areas in  efficient  coord
ination
and  with
regard to such factors as:
1.   New site development or addition to previously de
veloped 
site
2.   Type and quantity of products to be produced3.
Type of process and product control
3.
Type of process and product control
4.   Operational convenience and accessibility5.   Economic distribution of utilities and services6.   Type of buildings required and building code requ
irements
7.   Health and safety considerations8.   Waste disposable requirements9.   Auxiliary equipment10.  Space available and space required11.  Roads and railroads12.  Possible future expansion
23

General Design Considerations
5. Plant Layout
Preparation of the layout
Scale
drawings,
complete
with
elevation
indications  can  be  used  for  determining  the  bestlocation for equipment and facilities.
Elementary  layouts  are  developed  first.  These
show the fundamental relationships between storagespace and operating equipment.
The next step requires consideration of the safe
operational  sequence  and  gives  a  primary  layoutbased  on  the  flow  of  materials,  unit  operations,storage, and future expansion.
24

General Design Considerations
5. Plant Layout
Preparation of the layout (contd.)
By  analyzing  all  the  factors  involved  in  plant
layout,    a    detailed    recommendation    can    bepresented,  and  drawings  and  elevations,  includingisometric
drawings
of
the
piping
systems,
can
be
prepared
.
isometric
drawings
of
the
piping
systems,
can
be
prepared
.

Templates,  or  small  cutouts  constructed  to  a
selected  scale  are  useful  for  making  rapid  andaccurate  layouts.
Three  dimensional  models  are
often made
Errors in a plant layout are easily located when
three dimensional models are used.
25

General Design Considerations
References
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
Solen, K. A., J. N. Harb, Introduction to Chemical Enginee
ring – Tools for Today and
Tomorrow, 5
th
Edition, Wiley India Private Limited, New Delhi, 2014.
26  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Design Study Guide

## 1. Concise Bullet-Point Summary

* **Plant Location:** Crucial for minimizing production and distribution costs.
* **Factors Affecting Plant Location:** Raw materials availability, markets, energy, climate, transportation, water, waste disposal, labor, taxes/legal restrictions, site characteristics, flood/fire protection, community factors.
* **Raw Materials:**  Consider price, distance, freight, availability, purity, storage.
* **Markets:** Proximity to markets for both main and by-products is vital.
* **Energy:**  Availability and cost of power and fuel (electricity, coal, oil) are significant.
* **Climate:** Impacts construction costs (shelters, cooling), operational efficiency.
* **Transportation:** Access to water, rail, and road transport is ideal.
* **Water Supply:** Abundant, reliable water source crucial for cooling, washing, and processes.
* **Waste Disposal:** Compliance with legal restrictions and future expansion needs considered.
* **Labor:**  Availability, skill level, pay scales, and potential turnover affect operations.
* **Plant Layout:**  Arrangement of units impacts construction, manufacturing, and operational efficiency.
* **Plant Layout Considerations:** Process flow, storage, handling, operational convenience, utilities, safety, future expansion.


## 2. Prioritized 3-Hour Study Plan

**Hour 1: Plant Location (Factors & Prioritization)**

* (0:00-0:15): Review bullet points on Plant Location factors (Raw Materials to Transportation).
* (0:15-0:45): Deep dive into the impact of **Raw Materials** and **Markets** on plant location decisions.  Analyze examples from the notes.
* (0:45-1:00): Prioritize the top 3 most critical factors influencing plant location, justifying your choices using examples from the notes.


**Hour 2: Plant Location (Remaining Factors & Case Study)**

* (1:00-1:30): Review bullet points on remaining Plant Location factors (Water Supply to Community Factors). Focus on understanding the interconnectedness of these factors.
* (1:30-2:00): Create a hypothetical case study: Select a specific industry (e.g., petrochemical) and identify 5-7 key location factors for its plant, explaining your reasoning.
* (2:00-2:30): Review the case study and identify potential conflicts or trade-offs between different factors.


**Hour 3: Plant Layout & Review**

* (2:30-2:45): Review bullet points on Plant Layout and its considerations.
* (2:45-3:00): Revise all material, focusing on areas where you felt less confident.  Practice answering the multiple-choice questions below.


## 3. Multiple-Choice Questions

**1. Which factor is LEAST likely to be a primary consideration when choosing a plant site for a large-scale steel mill?**
    a) Proximity to iron ore mines
    b) Availability of skilled labor
    c) Local zoning regulations regarding noise pollution
    d) Access to nearby golf courses
    **Answer: d)**


**2.  A company producing a perishable product should prioritize which factor in plant location selection?**
    a) Low tax rates
    b) Proximity to markets
    c) Abundant water supply
    d) Availability of cheap land
    **Answer: b)**


**3.  What is a significant advantage of locating a plant near a source of raw materials?**
    a) Reduced labor costs
    b) Lower transportation and storage charges
    c) Increased access to skilled labor
    d) Proximity to large cities
    **Answer: b)**


**4. The most important aspect of a well-designed plant layout is:**
    a) Aesthetics of buildings
    b) Minimizing land usage
    c) Efficient material flow and operational safety
    d) Large parking area for employees
    **Answer: c)**


**5.  Before detailed design begins, which step is crucial in process design?**
    a) Selecting the construction company
    b) Defining marketing strategies
    c) Developing process flow diagrams (PFDs) and plant layout
    d) Securing funding for the project
    **Answer: c)**

        ```
        

    
        ## Agent Interaction on 2025-09-14T04:31:46.918Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Economics Study Guide

## 1. Concise Bullet-Point Summary

* **Compounding:** Calculates future value (**F**) from present value (**P**) using interest rate (**i**) and number of periods (**n**).  Formula: F = P(F/P, i%, n)
* **Discounting:** Calculates present value (**P**) from future value (**F**) using interest rate (**i**) and number of periods (**n**). Formula: P = F(P/F, i%, n)
* **Future-Worth Factor (F/P):**  Used to determine future value from a present sum.
* **Present-Worth Factor (P/F):** Used to determine present value from a future sum.
* **Present-Worth Annuity Factor (P/A):** Used to determine present value of a uniform series of payments (annuity). Formula: P = A(P/A, i%, n)
* **Capital Recovery Factor (A/P):** Used to calculate the equivalent uniform annual payment for a present sum. Formula: A = P(A/P, i%, n)
* **Sinking Fund Factor (A/F):** Used to determine the uniform annual deposit required to accumulate a future sum.
* **Perpetuity:** An annuity with payments continuing indefinitely.  Useful for calculating capitalized costs.
* **Capitalized Cost (CK):** Total capital required to perpetually replace an asset, considering initial investment, salvage value, and interest.
* **Salvage Value:** Value of an asset at the end of its useful life.
* **Scrap Value:** Value of an asset when disposed of as junk.
* **Inflation:** Decrease in the buying power of money over time. Affects interest rates and cost calculations.


## 2. Prioritized 3-Hour Study Plan

**Hour 1: Core Concepts (60 minutes)**

* **(15 min):** Review basic definitions: compounding, discounting,  future and present worth factors.  Practice simple calculations.
* **(15 min):**  Focus on annuity factors (P/A, A/P, A/F). Work through example problems.
* **(15 min):** Understand perpetuity and its application in capitalized cost calculations. Solve a simple perpetuity problem.
* **(15 min):**  Define salvage and scrap values; explain the difference.


**Hour 2: Advanced Applications (60 minutes)**

* **(20 min):**  Deep dive into capitalized cost calculations. Work through a detailed problem involving initial investment, salvage value, and replacement costs.
* **(20 min):**  Study the effect of inflation on cost analysis. Practice calculating real interest rates.
* **(20 min):** Review formulas and their applications.  Create flashcards for important formulas and definitions.


**Hour 3: Practice & Review (60 minutes)**

* **(30 min):**  Solve multiple-choice questions and review answers.  Identify areas needing further attention.
* **(30 min):**  Review the entire module's key concepts. Summarize the material in your own words to test your understanding.


## 3. Multiple-Choice Questions

**1.  What is the present worth factor used for?**
    a) Calculating future value from a present sum.
    b) Calculating present value from a future sum.
    c) Calculating uniform annual payments from a present sum.
    d) Calculating a future sum from a uniform series of payments.
    **Answer: b)**

**2. Which factor helps determine the uniform annual deposit needed to accumulate a future sum?**
    a) Present-worth factor
    b) Capital recovery factor
    c) Sinking fund factor
    d) Future-worth factor
    **Answer: c)**

**3. What is a perpetuity?**
    a) A short-term investment
    b) An annuity with payments for a fixed period
    c) An annuity with payments continuing indefinitely
    d) A type of bond
    **Answer: c)**

**4.  What does the capitalized cost represent?**
    a) The initial investment cost of an asset.
    b) The total cost of owning an asset for a specific period.
    c) The total capital required to perpetually replace an asset.
    d) The salvage value of an asset.
    **Answer: c)**

**5. How does inflation affect interest rates?**
    a) It decreases interest rates.
    b) It has no effect on interest rates.
    c) It generally increases interest rates.
    d) It causes interest rates to fluctuate randomly.
    **Answer: c)**



        ```
        

    
        ## Agent Interaction on 2025-09-14T04:32:28.361Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Summarize the following lecture notes into a maximum of 10 bullet points.  
                - Focus only on the most important concepts.  
                - Each point must be on a new line.  
                - Make formatting clear, structured, and easy to read in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
             
        ```
        **Response Received from API:**
        ```
        * **Compounding and Discounting Factors:**  These factors are used to calculate future (F) and present (P) values of money, considering interest rates (i) and time periods (n).  Standard notations like (F/P, i%, n) represent these calculations.

* **Future Worth Factor (F/P):**  Calculates the future value (F) of a present amount (P) given interest and time.

* **Present Worth Factor (P/F):** Calculates the present value (P) of a future amount (F) given interest and time.

* **Present Worth Annuity Factor (P/A):** Calculates the present value (P) of a uniform series of payments (A) over time.

* **Capital Recovery Factor (A/P):** Calculates the uniform annual payment (A) needed to recover a present investment (P) over time.

* **Sinking Fund Factor (A/F):**  Calculates the uniform annual payment (A) needed to accumulate a future amount (F) over time.

* **Perpetuity:** An annuity with payments continuing indefinitely; used in calculating capitalized cost.

* **Capitalized Cost (CK):** The total capital required for an asset, considering its initial cost, replacement costs, and interest over its infinite lifespan.

* **Inflation:** The decrease in the purchasing power of money over time, impacting interest rates and financial calculations.

* **Real Interest Rate:** The interest rate adjusted for inflation, reflecting the actual return on investment.

        ```
        

    
        ## Agent Interaction on 2025-09-14T04:35:25.212Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Economics Study Guide

## 1. Concise Bullet-Point Summary

* **Compounding:**  Calculates future value (F) from present value (P) using interest rate (i) and time period (n).  Uses **future-worth factor (F/P, i%, n)**.
* **Discounting:** Calculates present value (P) from future value (F) using interest rate (i) and time period (n). Uses **present-worth factor (P/F, i%, n)**.
* **Present-Worth Annuity Factor (P/A, i%, n):** Determines present value of a series of equal payments (annuity).
* **Capital Recovery Factor (A/P, i%, n):** Determines equal annual payments needed to recover a present investment.
* **Sinking Fund Factor (A/F, i%, n):** Determines equal annual payments required to accumulate a future sum.
* **Future-Worth Annuity Factor (F/A, i%, n):**  Determines future value of a series of equal payments.
* **Perpetuity:** Annuity with payments continuing indefinitely.  Useful for calculating capitalized cost.
* **Capitalized Cost (CK):** Total capital required to perpetually maintain an asset, considering initial investment, replacement costs, and interest.
* **Salvage Value:** Value of an asset at the end of its useful life.
* **Scrap Value:** Value of an asset when it can only be sold as junk.
* **Inflation:** Increase in prices over time, reducing the buying power of money. Affects interest rates and calculations.
* **Real Interest Rate:** Nominal interest rate adjusted for inflation.


## 2. Prioritized 3-Hour Study Plan

**Hour 1: Foundational Concepts (60 minutes)**

* **(15 minutes):** Review definitions of compounding and discounting.  Practice calculating future and present values using basic formulas.
* **(15 minutes):** Understand and apply the different factors: (F/P), (P/F), (P/A), (A/P), (A/F), (F/A).  Work through example problems.
* **(30 minutes):** Master the concept of perpetuity and its application in capitalized cost calculations.


**Hour 2: Advanced Applications (60 minutes)**

* **(20 minutes):** Deep dive into capitalized cost calculations. Practice problems with varying initial costs, salvage values, and interest rates.
* **(20 minutes):**  Understand the difference between salvage and scrap value and their impact on calculations.
* **(20 minutes):** Thoroughly grasp the concept of inflation and its influence on interest rates and economic analysis.


**Hour 3:  Problem Solving & Review (60 minutes)**

* **(30 minutes):** Solve a variety of mixed problems involving compounding, discounting, perpetuity, capitalized cost, and inflation.
* **(30 minutes):** Review all concepts and formulas. Identify areas needing further clarification and revisit relevant sections.


## 3. Multiple-Choice Questions

**1.  What factor is used to calculate the future value of a single present investment?**
    a) Present-worth factor
    b) **Future-worth factor**
    c) Present-worth annuity factor
    d) Capital recovery factor

**2.  An annuity is:**
    a) A single lump-sum payment.
    b) A series of unequal payments over time.
    c) **A series of equal payments over time.**
    d) An investment that generates no return.

**3. The capitalized cost represents:**
    a) The initial investment cost only.
    b) The present worth of all future replacement costs.
    c) **The total cost of owning and replacing an asset perpetually.**
    d) The salvage value of an asset.

**4. Inflation leads to:**
    a) A decrease in the real value of money.
    b) **A decrease in the buying power of money.**
    c) An increase in the real interest rate.
    d) Both a) and c).

**5.  Which of the following best describes the relationship between the nominal interest rate (i), the real interest rate (r), and the inflation rate (f)?**
    a) i = r + f
    b) i = r - f
    c) i = r * f
    d) **Approximately, i = r + f** (This is the approximation mentioned in the notes)



        ```
        

    
        ## Agent Interaction on 2025-09-14T04:35:45.479Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Summarize the following lecture notes into a maximum of 10 bullet points.  
                - Focus only on the most important concepts.  
                - Each point must be on a new line.  
                - Make formatting clear, structured, and easy to read in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
             
        ```
        **Response Received from API:**
        ```
        * **Compounding and Discounting Factors:**  These factors are used to calculate future and present values of money, considering interest rates and time periods.  Standard notations (F/P, P/F, P/A, A/P, A/F) represent these calculations.

* **Future Worth Factor (F/P):** Calculates the future value (F) of a present amount (P) at a given interest rate (i) over a specified number of periods (n).

* **Present Worth Factor (P/F):** Calculates the present value (P) of a future amount (F) at a given interest rate (i) over a specified number of periods (n).

* **Present Worth Annuity Factor (P/A):** Calculates the present value (P) of a series of equal payments (annuity A) over a given number of periods (n) at a given interest rate (i).

* **Capital Recovery Factor (A/P):** Determines the equivalent uniform annual payment (A) required to recover a present investment (P) over a given period (n) at a given interest rate (i).

* **Sinking Fund Factor (A/F):**  Calculates the uniform annual payment (A) needed to accumulate a specific future amount (F) at a given interest rate (i) over a specified number of periods (n).

* **Perpetuity:**  An annuity with payments continuing indefinitely, useful for calculating the capitalized cost of perpetually replaceable assets.

* **Capitalized Cost:** The total capital investment required for an asset considering its initial cost, replacement cost, and interest earned.  It's used for comparing different investment options.

* **Salvage and Scrap Values:**  Salvage value is the resale value of an asset after use, while scrap value is the value obtained from its disposal as junk.

* **Inflation:**  The decrease in the purchasing power of money over time, affecting interest rates and future value calculations.  Real interest rates account for inflation.

        ```
        

    
        ## Agent Interaction on 2025-09-14T04:36:27.974Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Generate detailed study notes from the following text.  
                - Organize with clear **sections and headings**.  
                - Add short explanations for each major concept.  
                - Use bullet points for clarity.  
                - Make formatting structured and neat for UI readability.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Economics - Compounding and Discounting Factors

**Module:** Process Economics
**Semester:** 5th Semester BTech (Chemical Engg.)
**Instructor:** Dr. D. Krishna Sandilya
**Institution:** IIT (ISM), Dhanbad
**Semester:** Monsoon Semester (2025-2026)


## I. Compounding and Discounting Factors

This section introduces the fundamental concepts of compounding and discounting, crucial for evaluating the economic viability of chemical engineering projects.

**A. Standard Notation:**

* The general format is represented as (X/Y, i%, n), where:
    * X represents the unknown variable you want to find.
    * Y represents the known variable given.
    * i represents the interest rate per period (expressed as a percentage).
    * n represents the number of periods.


**B. Future Worth Factor (F/P):**

* This factor calculates the future value (F) of a present investment (P) after 'n' periods at an interest rate of 'i'.
* Formula:  F = P(F/P, i%, n)
* (F/P, i%, n) is the future worth factor or single payment future worth factor.  This is a multiplier obtained from financial tables or calculated using the formula: (1+i)^n


**C. Present Worth Factor (P/F):**

* This factor calculates the present value (P) of a future amount (F) discounted back over 'n' periods at an interest rate of 'i'.
* Formula: P = F(P/F, i%, n)
* (P/F, i%, n) is the present worth factor or single payment present worth factor. This is a multiplier obtained from financial tables or calculated using the formula: 1/(1+i)^n


**D. Present Worth Annuity Factor (P/A):**

* This factor calculates the present value (P) of a series of equal payments (A) made over 'n' periods at an interest rate of 'i'. This is commonly used for evaluating projects with recurring costs or revenues.
* Formula: P = A(P/A, i%, n)
* (P/A, i%, n) is the present worth annuity factor or uniform series present worth factor.


**E. Capital Recovery Factor (A/P):**

* The inverse of the present worth annuity factor.  It determines the equivalent uniform annual payment (A) required to recover the initial investment (P) over 'n' periods at interest rate 'i'.  Useful for loan amortization calculations.
* Formula: A = P(A/P, i%, n)
* (A/P, i%, n) is the capital recovery factor.


**F. Sinking Fund Factor (A/F):**

* This factor calculates the equivalent uniform annual payment (A) required to accumulate a future amount (F) after 'n' periods at interest rate 'i'.  Used for situations needing to set aside money for future expenses (e.g., equipment replacement).
* Formula: A = F(A/F, i%, n)
* (A/F, i%, n) is the sinking fund factor.


**G. Future Worth Annuity Factor (F/A):**

* This factor determines the future value (F) of a series of equal payments (A) made over 'n' periods at interest rate 'i'.
* Formula: F = A(F/A, i%, n)
* (F/A, i%, n) is the future worth annuity factor.


## II. Perpetuity

* A perpetuity is an annuity with payments continuing indefinitely.  It is useful for modeling situations where an asset is replaced perpetually, such as equipment replacement with a constant cost.
* The capitalized cost is the total capital needed to fund a perpetuity.

## III. Capitalized Cost (CK)

* The total capital investment required to perpetually maintain an asset, considering initial investment, replacement costs, and interest.
* The relationship between capitalized cost (CK), initial investment cost (CI), salvage value (CS), interest rate (i), and service life (n) is given by: (CK - CI)(1+i)^n = CK - CS
* This equation can be solved for CK to determine the capitalized cost.
* Note: CR = CI - CS represents the cost of replacement.


## IV. Salvage and Scrap Values

* **Salvage value:** The net amount obtained from selling used property, considering removal and sale costs. Implies further service potential.
* **Scrap value:** The profit from selling unusable property as raw material (junk value).


## V. Inflation

* Inflation represents the decrease in the buying power of money over time, leading to increased prices.
* It affects economic evaluations because future cash flows have a lower real value than present cash flows.
* **Future amount (considering inflation):** Future amount = Constant value (1 + f)^n, where 'f' is the inflation rate, and 'n' is the number of years.
* The relationship between nominal interest rate (i), real interest rate (r), and inflation rate (f) is approximately: r ≈ i - f


## VI. References

The provided notes cite several textbooks commonly used in chemical engineering for process design and economics.  These provide further details and examples.


This structured format facilitates better understanding and memorization of the concepts related to compounding and discounting factors, crucial for effective process economic analysis in chemical engineering.

        ```
        

    
        ## Agent Interaction on 2025-09-14T04:39:31.272Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Economics Study Guide

## 1. Concise Bullet-Point Summary:

* **Compounding:**  Calculating future value (F) from present value (P) using interest rate (i) and time periods (n).  Formula: F = P(F/P, i%, n)
* **Discounting:** Calculating present value (P) from future value (F) using interest rate (i) and time periods (n). Formula: P = F(P/F, i%, n)
* **Future-Worth Factor (F/P):** Used to find the future value of a single present amount.
* **Present-Worth Factor (P/F):** Used to find the present value of a single future amount.
* **Present-Worth Annuity Factor (P/A):** Used to find the present value of a uniform series of payments (annuity). Formula: P = A(P/A, i%, n)
* **Capital Recovery Factor (A/P):** Used to find the equivalent uniform annual cost of a present amount. Formula: A = P(A/P, i%, n)
* **Sinking Fund Factor (A/F):** Used to find the equivalent uniform annual payment to accumulate a future amount.
* **Future-Worth Annuity Factor (F/A):** Used to find the future value of a uniform series of payments (annuity).
* **Perpetuity:** An annuity with payments continuing indefinitely.  Useful for calculating capitalized cost.
* **Capitalized Cost (CK):** The total capital required to perpetually maintain an asset, considering initial investment, replacement costs, and interest.
* **Salvage Value:** The value of an asset at the end of its useful life.
* **Inflation:** The decrease in the purchasing power of money over time; affects interest rates and cost calculations.


## 2. Prioritized 3-Hour Study Plan:

**Hour 1:  Fundamental Concepts (60 minutes)**

* **(15 min):** Review compounding and discounting definitions and formulas.  Focus on understanding the notation (X/Y, i%, n).
* **(15 min):** Practice calculating future and present values using the provided formulas and simple examples.
* **(15 min):** Understand the meaning and application of Future-Worth, Present-Worth, and Annuity factors.  Work through example problems from the textbook or lecture slides.
* **(15 min):** Thoroughly understand the concept of **Perpetuity**.

**Hour 2: Advanced Applications & Examples (60 minutes)**

* **(20 min):** Focus on understanding Capital Recovery Factor and Sinking Fund Factor.  Solve example problems involving these factors.
* **(20 min):**  Deep dive into **Capitalized Cost** calculations. Work through the formula and example problems, paying close attention to salvage value.
* **(20 min):**  Study the differences between salvage value and scrap value. 

**Hour 3: Inflation & Review (60 minutes)**

* **(20 min):** Understand the impact of **inflation** on cost calculations and how it relates to real vs. nominal interest rates.
* **(20 min):** Review all concepts and formulas.  Try to solve problems without looking at the notes.
* **(20 min):** Practice solving the multiple-choice questions below and review any weak areas.


## 3. Multiple-Choice Questions:

**1.  What does the notation (P/A, 8%, 10) represent?**
    a) Future worth factor
    b) Present worth factor of a single payment
    c) **Present worth annuity factor**
    d) Sinking fund factor

**2.  Which factor is used to determine the equivalent uniform annual cost of a present investment?**
    a) Future-worth factor
    b) Present-worth annuity factor
    c) **Capital recovery factor**
    d) Sinking fund factor


**3. A perpetuity is:**
    a) A loan with a fixed interest rate.
    b) **An annuity with payments continuing indefinitely.**
    c) A type of bond.
    d) A method of calculating inflation.


**4.  What is capitalized cost?**
    a) The initial cost of an asset.
    b) The cost of replacing an asset after its useful life.
    c) The total cost of borrowing money.
    d) **The total cost of owning and maintaining an asset perpetually.**


**5.  Which of the following best describes salvage value?**
    a) The cost of disposing of an asset.
    b) The scrap value of an asset.
    c) **The resale value of an asset at the end of its useful life.**
    d) The initial cost of an asset.


**Answer Key:** 1.c, 2.c, 3.b, 4.d, 5.c

        ```
        

    
        ## Agent Interaction on 2025-09-14T04:39:54.721Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Summarize the following lecture notes into a maximum of 10 bullet points.  
                - Focus only on the most important concepts.  
                - Each point must be on a new line.  
                - Make formatting clear, structured, and easy to read in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
             
        ```
        **Response Received from API:**
        ```
        * **Compounding and Discounting Factors:**  These factors are used to calculate future and present values of money, considering interest rates and time periods.  Standard notations (e.g., (F/P, i%, n)) represent these calculations.

* **Future Worth Factor (F/P):** Calculates the future value (F) of a present amount (P) given an interest rate (i) and number of periods (n).

* **Present Worth Factor (P/F):** Calculates the present value (P) of a future amount (F) given interest rate and number of periods.

* **Present Worth Annuity Factor (P/A):**  Calculates the present value (P) of a series of uniform payments (A) over a given time period.

* **Capital Recovery Factor (A/P):**  Calculates the uniform annual payment (A) required to recover a present amount (P) over a given time period.

* **Sinking Fund Factor (A/F):** Calculates the uniform annual payment (A) needed to accumulate a future amount (F) over a given time period.

* **Perpetuity:**  An annuity with payments continuing indefinitely; useful for calculating costs of perpetually replaceable assets.

* **Capitalized Cost:** The total capital investment required for an asset considering initial cost, replacement costs, and interest over its indefinite lifespan.

* **Salvage and Scrap Values:** Salvage value is the resale value of an asset; scrap value is its value as raw material after dismantling.

* **Inflation:**  The decrease in the purchasing power of money over time, affecting interest rates and economic calculations.  Real interest rates should account for inflation.

        ```
        

    
        ## Agent Interaction on 2025-09-14T04:40:27.450Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Generate detailed study notes from the following text.  
                - Organize with clear **sections and headings**.  
                - Add short explanations for each major concept.  
                - Use bullet points for clarity.  
                - Make formatting structured and neat for UI readability.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Economics - Compounding and Discounting

**Module:** Process Economics
**Semester:** 5th Semester BTech (Chemical Engg.)
**Instructor:** Dr. D. Krishna Sandilya
**Institution:** IIT (ISM), Dhanbad
**Semester:** Monsoon Semester (2025-2026)


## I. Compounding and Discounting Factors

**A. Standard Notation:**

*   The general format is (X/Y, i%, n), where:
    *   X represents the unknown value to be calculated.
    *   Y represents the known value.
    *   i represents the interest rate per period (as a percentage).
    *   n represents the number of periods.

**B.  Future Worth Factor (F/P):**

*   Calculates the future value (F) of a present value (P) after n periods at an interest rate of i%.
*   Formula: F = P(F/P, i%, n)
*   (F/P, i%, n) is the future worth factor or single payment future worth factor.  This factor is obtained from compound interest tables or calculations.

**C. Present Worth Factor (P/F):**

*   Calculates the present value (P) of a future value (F) discounted over n periods at an interest rate of i%.
*   Formula: P = F(P/F, i%, n)
*   (P/F, i%, n) is the present worth factor or single payment present worth factor. This factor is the inverse of the future worth factor.

**D. Present Worth Annuity Factor (P/A):**

*   Calculates the present value (P) of a uniform series of payments (A) over n periods at an interest rate of i%.  An annuity is a series of equal payments made at regular intervals.
*   Formula: P = A(P/A, i%, n)
*   (P/A, i%, n) is the present worth annuity factor or uniform series present worth factor.

**E. Capital Recovery Factor (A/P):**

*   Calculates the equivalent uniform annual payment (A) required to recover the initial investment (P) over n periods at an interest rate of i%.  This is the inverse of the present worth annuity factor.
*   Formula: A = P(A/P, i%, n)
*   (A/P, i%, n) is the capital recovery factor.

**F. Sinking Fund Factor (A/F):**

*   Calculates the equivalent uniform annual payment (A) required to accumulate a future sum (F) after n periods at an interest rate of i%.
*   The formula is not explicitly shown, but it is understood to be the factor used to calculate A given F.

**G. Future Worth Annuity Factor (F/A):**

*   Calculates the future value (F) of a uniform series of payments (A) after n periods at an interest rate of i%.  The formula is not explicitly shown but is implied.


## II. Perpetuity

*   A perpetuity is an annuity with payments continuing indefinitely.
*   Useful for evaluating costs of perpetually replaceable assets (without considering inflation/deflation).
*   Example:  Calculating the fund needed to perpetually replace a piece of equipment with a given cost and lifespan.  The capitalized cost considers both initial investment and the perpetual replacement fund.

## III. Capitalized Cost (CK)

*   The total capital required to perpetually own and replace an asset.
*   This includes the initial investment cost (CI) and the present worth of all future replacement costs.
*   Relationship with initial investment (CI) and salvage value (CS): (CK – CI)(1+i)^n = CK – CS
*   Simplified:  CK = (CI – CS)/i  + CI (where CR = CI - CS represents the cost of replacement)


## IV. Salvage and Scrap Values

*   **Salvage Value:** The net amount received from selling a used asset; implies the asset has remaining useful life.
*   **Scrap Value:** The amount received from selling an asset as junk or raw material; implies the asset has no further service life.


## V. Inflation

*   The decrease in the purchasing power of money over time, leading to a general increase in prices.
*   Affects the real interest rate, as borrowing becomes more attractive if inflation is expected.
*   The real interest rate should be higher than the inflation rate to provide a real return for lenders.
*   Future amount considering inflation: Future amount = Constant value (1 + f)^n  where 'f' is the inflation rate and 'n' is the number of years.
*   Relationship between real interest rate (r), nominal interest rate (i), and inflation rate (f):  r ≈ i – f (approximation)


## VI. References

The provided references list textbooks commonly used in chemical engineering process design and economics courses.  These books cover the topics discussed in more detail.

        ```
        

    
        ## Agent Interaction on 2025-09-14T04:47:50.947Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Economics Study Guide

## 1. Concise Bullet-Point Summary

* **Compounding:** Calculating future value (F) from present value (P) using interest rate (i) and number of periods (n).  Uses **future-worth factor (F/P, i%, n)**.
* **Discounting:** Calculating present value (P) from future value (F) using interest rate (i) and number of periods (n). Uses **present-worth factor (P/F, i%, n)**.
* **Present-Worth Annuity Factor (P/A, i%, n):**  Calculates present value from a series of equal payments (annuity).
* **Capital Recovery Factor (A/P, i%, n):** Calculates annual equivalent payment from present value.
* **Sinking Fund Factor (A/F, i%, n):** Calculates annual payment needed to accumulate a future sum.
* **Future-Worth Annuity Factor (F/A, i%, n):** Calculates future value from a series of equal payments.
* **Perpetuity:** An annuity with payments continuing indefinitely; useful for calculating capitalized cost.
* **Capitalized Cost (CK):** Total capital required to perpetually replace an asset; considers initial investment, salvage value, and interest.
* **Salvage Value:** Value of an asset at the end of its useful life.
* **Scrap Value:** Value of an asset when disposed of as junk material.
* **Inflation:** Decrease in the buying power of money over time; affects interest rate calculations.
* **Real Interest Rate:** Nominal interest rate adjusted for inflation.


## 2. Prioritized 3-Hour Study Plan

**Hour 1:  Fundamental Concepts (60 minutes)**

* (15 min) Review compounding and discounting definitions and formulas. Practice calculating future and present values using simple examples.
* (15 min) Understand the different factors: Future-worth factor, present-worth factor, present-worth annuity factor.  Work through example problems for each.
* (30 min) Grasp the concept of perpetuity and capitalized cost. Solve problems relating to calculating capitalized cost given initial investment, salvage value, and interest rate.

**Hour 2: Advanced Concepts & Problem Solving (60 minutes)**

* (20 min) Focus on capital recovery and sinking fund factors; solve practice problems involving these factors.
* (20 min) Deep dive into the relationship between nominal and real interest rates, considering inflation's impact. Work on problems involving inflation adjustments.
* (20 min) Review different types of factors and their applications based on problem context. Practice choosing the right factor for different scenarios.

**Hour 3: Practice & Review (60 minutes)**

* (30 min) Solve a diverse set of problems encompassing all concepts (compounding, discounting, annuities, perpetuity, capitalized cost, and inflation).
* (30 min) Review the key formulas and definitions. Identify areas where you need further clarification and revisit those sections.


## 3. Multiple-Choice Questions

**1.  What factor is used to calculate the future value (F) from a present value (P) with a given interest rate (i) and number of periods (n)?**
    a) Present-worth factor
    b) **Future-worth factor**
    c) Present-worth annuity factor
    d) Capital recovery factor

**2. An annuity is:**
    a) A single payment received at the end of a period.
    b) A single payment made at the beginning of a period.
    c) **A series of equal payments made at regular intervals.**
    d) None of the above.


**3. Which factor is used to determine the annual equivalent payment from a given present value?**
    a) Sinking fund factor
    b) **Capital recovery factor**
    c) Future-worth annuity factor
    d) Present-worth annuity factor


**4.  Capitalized cost is primarily used for:**
    a) Determining the salvage value of an asset
    b) Calculating the scrap value of an asset
    c) **Comparing alternative investment choices**
    d) Predicting inflation rates


**5.  The real interest rate considers:**
    a) Only the nominal interest rate.
    b) Only the inflation rate.
    c) **Both the nominal interest rate and the inflation rate.**
    d) Neither the nominal interest rate nor the inflation rate.


        ```
        

    
        ## Agent Interaction on 2025-09-14T04:48:14.414Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Generate detailed study notes from the following text.  
                - Organize with clear **sections and headings**.  
                - Add short explanations for each major concept.  
                - Use bullet points for clarity.  
                - Make formatting structured and neat for UI readability.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Economics - Compounding and Discounting Factors

**Module:** Process Economics
**Semester:** 5th Semester BTech (Chemical Engg.)
**Instructor:** Dr. D. Krishna Sandilya
**Institution:** IIT (ISM), Dhanbad
**Semester:** Monsoon Semester (2025-2026)


## I. Compounding and Discounting Factors

**A. Standard Notation:**

*   The general format for representing compounding and discounting factors is (X/Y, i%, n).
*   `X` represents the unknown variable you want to find.
*   `Y` represents the known variable.
*   `i` represents the interest rate per period (expressed as a percentage).
*   `n` represents the number of periods.

**B. Key Factors:**

*   **(F/P, i%, n): Future Worth Factor (Single Payment Future Worth Factor)**
    *   This factor calculates the future amount (F) accumulated after *n* periods from a present amount (P) at an interest rate of *i*.
    *   Formula:  F = P(F/P, i%, n)

*   **(P/F, i%, n): Present Worth Factor (Single Payment Present Worth Factor)**
    *   This factor calculates the present worth (P) of a future amount (F) at an interest rate of *i* over *n* periods.
    *   Formula: P = F(P/F, i%, n)

*   **(P/A, i%, n): Present Worth Annuity Factor (Uniform Series Present Worth Factor)**
    *   This factor calculates the present worth (P) of a uniform series of payments (A) made over *n* periods at an interest rate of *i*.
    *   Formula: P = A(P/A, i%, n)

*   **(A/P, i%, n): Capital Recovery Factor**
    *   The inverse of the Present Worth Annuity Factor.  It calculates the equivalent uniform annual payment (A) required to recover a present amount (P) over *n* periods at an interest rate of *i*.
    *   Formula: A = P(A/P, i%, n)

*   **(A/F, i%, n): Sinking Fund Factor**
    *   This factor calculates the uniform annual payment (A) needed to accumulate a future amount (F) after *n* periods at an interest rate of *i*.


## II. Perpetuity

*   **Definition:** A perpetuity is an annuity where periodic payments continue indefinitely.
*   **Engineering Relevance:** Useful for determining the total cost of assets that are replaced perpetually without considering inflation/deflation.

**Example:**  Equipment costing $12,000 with a 10-year lifespan and $2,000 scrap value needs replacement every 10 years at a cost of $10,000.  A fund needs to be established to cover these replacements.  At 6% interest, the required fund size can be calculated.


## III. Capitalized Cost (CK)

*   **Definition:** The total capital required to perpetually maintain an asset, considering initial investment, replacement costs, and interest.
*   **Calculation:**  The formula relates the capitalized cost (CK) to the initial investment cost (CI), salvage value (CS), interest rate (i), and service life (n).
    *   (CK – CI)(1 + i)^n = CK – CS
    *   This simplifies to a formula where the replacement cost (CR = CI – CS) is used.


## IV. Salvage and Scrap Values

*   **Salvage Value:** The net amount obtained from selling used property after deducting removal and sale costs. Implies the asset has further service potential.
*   **Scrap Value:** The profit obtained from selling an asset as junk or raw material if it cannot be used further.


## V. Inflation

*   **Definition:** A general increase in prices, decreasing the buying power of money over time.  It's linked to an increase in the money supply.
*   **Effect on Interest Rates:** Interest rates should be higher than the inflation rate to ensure real earnings for the lender. Borrowing is more attractive during inflation as the debt is repaid with less valuable future cash.
*   **Calculating Future Amount with Inflation:**
    *   Future Amount = Constant Value (1 + f)^n
    *   where 'f' is the inflation rate and 'n' is the number of years.

* **Real Interest Rate:** The real interest rate (r) considers the effect of inflation on the nominal interest rate (i). It can be approximated as r ≈ i - f.


## VI. References

The provided notes cite several textbooks as references for further study on process economics, compounding, and discounting.  These are valuable resources for expanding understanding of the concepts discussed.

        ```
        

    
        ## Agent Interaction on 2025-09-14T04:57:43.169Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Economics Study Guide

## 1. Concise Bullet-Point Summary

* **Compounding:**  Calculates future value (F) from present value (P) using interest rate (i) and number of periods (n).  Uses **future-worth factor (F/P, i%, n)**.
* **Discounting:** Calculates present value (P) from future value (F) using interest rate (i) and number of periods (n). Uses **present-worth factor (P/F, i%, n)**.
* **Present-worth Annuity Factor (P/A, i%, n):** Determines present value of a series of equal payments (annuity).
* **Capital Recovery Factor (A/P, i%, n):** Calculates the equivalent uniform annual payment for a given present value.
* **Sinking Fund Factor (A/F, i%, n):**  Calculates the uniform annual payment required to accumulate a specific future sum.
* **Future Worth Annuity Factor (F/A, i%, n):** Calculates the future value of a series of equal payments.
* **Perpetuity:** An annuity with payments continuing indefinitely; useful for calculating **capitalized cost**.
* **Capitalized Cost (CK):** Total capital required to perpetually maintain an asset, considering initial investment, replacement costs, and interest.
* **Salvage Value:** Value of an asset at the end of its useful life.
* **Scrap Value:** Value of an asset when disposed of as junk.
* **Inflation:**  Decrease in the buying power of money over time; affects interest rates and future value calculations.  Use **(1+f)^n** to account for inflation.
* **Real Interest Rate:** Nominal interest rate adjusted for inflation.

## 2. Prioritized 3-Hour Study Plan

**Hour 1: Core Concepts (60 minutes)**

* **(15 minutes):** Review the definitions and formulas for compounding and discounting (F/P, P/F). Work through example problems.
* **(15 minutes):** Understand and practice using the present-worth annuity factor (P/A) and capital recovery factor (A/P).  Solve problems involving annuities.
* **(15 minutes):** Learn the sinking fund factor (A/F) and future-worth annuity factor (F/A). Practice calculations.
* **(15 minutes):**  Define and understand perpetuity and its application in calculating capitalized cost.


**Hour 2: Applications and Problem Solving (60 minutes)**

* **(20 minutes):** Work through example problems involving capitalized cost calculations, incorporating salvage and scrap values.
* **(20 minutes):**  Solve more complex problems that combine different factors (e.g., calculating the present worth of an asset with periodic replacements).
* **(20 minutes):**  Focus on problems involving inflation and real interest rates. Practice incorporating inflation into calculations.


**Hour 3: Review and Practice Questions (60 minutes)**

* **(30 minutes):** Review all key concepts and formulas.  Identify areas needing further clarification.
* **(30 minutes):**  Complete the multiple-choice questions below and review your answers.


## 3. Multiple-Choice Questions

**1.  Which factor is used to calculate the future worth of a single present amount?**
    a) Present-worth factor
    b) **Future-worth factor**
    c) Present-worth annuity factor
    d) Capital recovery factor

**2.  What does the notation (P/A, 8%, 10) represent?**
    a) Future worth of an annuity
    b) **Present worth of an annuity**
    c) Capital recovery factor
    d) Sinking fund factor

**3. An annuity is defined as:**
    a) A single payment made at the beginning of a period.
    b) A single payment made at the end of a period.
    c) **A series of equal payments made at regular intervals.**
    d) An infinite series of decreasing payments.

**4. Capitalized cost is most useful for:**
    a) Determining the scrap value of an asset.
    b) Calculating the annual cost of an annuity.
    c) **Comparing the economic viability of different projects with long lifespans.**
    d) Predicting inflation rates.

**5.  How does inflation affect the interest rate needed to ensure a positive return for a lender?**
    a) It lowers the required interest rate.
    b) **It increases the required interest rate.**
    c) It has no effect on the required interest rate.
    d) It makes borrowing less attractive.



        ```
        

    
        ## Agent Interaction on 2025-09-14T04:58:11.224Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Summarize the following lecture notes into a maximum of 10 bullet points.  
                - Focus only on the most important concepts.  
                - Each point must be on a new line.  
                - Make formatting clear, structured, and easy to read in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
             
        ```
        **Response Received from API:**
        ```
        * **Compounding and Discounting Factors:**  These factors are used to calculate future and present values of money considering interest rates over time.  Notation (X/Y, i%, n) represents the calculation.

* **Future Worth Factor (F/P):** Calculates the future value (F) from a present value (P) given interest rate (i) and number of periods (n).

* **Present Worth Factor (P/F):** Calculates the present value (P) from a future value (F) given interest rate and number of periods.

* **Present Worth Annuity Factor (P/A):** Calculates the present value of a series of equal payments (annuity).

* **Capital Recovery Factor (A/P):** Calculates the annual equivalent cost of a present sum.

* **Sinking Fund Factor (A/F):** Calculates the uniform annual amount needed to accumulate a future sum.

* **Perpetuity:**  An annuity with payments continuing indefinitely; useful for calculating costs of perpetually replacing assets.

* **Capitalized Cost:** The total capital required to purchase and perpetually maintain an asset.

* **Inflation:** The decrease in purchasing power of money over time; impacts interest rates and future worth calculations.  The real interest rate must exceed the inflation rate.

* **Salvage and Scrap Value:**  Distinction between the value of an asset for further service (salvage) and the value of its constituent materials (scrap).

        ```
        

    
        ## Agent Interaction on 2025-09-14T05:06:57.935Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Economics Study Guide

## 1. Concise Bullet-Point Summary:

* **Compounding:** Calculating future worth (F) from present worth (P) using interest rate (i) and number of periods (n).  Formula: F = P(F/P, i%, n)
* **Discounting:** Calculating present worth (P) from future worth (F) using interest rate (i) and number of periods (n). Formula: P = F(P/F, i%, n)
* **Future Worth Factor (F/P):** Converts present worth to future worth.
* **Present Worth Factor (P/F):** Converts future worth to present worth.
* **Present Worth Annuity Factor (P/A):** Calculates present worth from a uniform series of payments (annuity). Formula: P = A(P/A, i%, n)
* **Capital Recovery Factor (A/P):** Calculates the uniform annual payment required to recover the initial investment. Formula: A = P(A/P, i%, n)
* **Sinking Fund Factor (A/F):** Calculates the uniform annual payment required to accumulate a future sum.
* **Perpetuity:** An annuity with payments continuing indefinitely; useful for calculating capitalized cost.
* **Capitalized Cost (CK):** The total capital required to perpetually maintain an asset, considering initial cost, replacement costs, and interest.
* **Salvage Value:** Value of an asset at the end of its useful life.
* **Scrap Value:** Value of an asset when disposed of as junk.
* **Inflation:** Decrease in the buying power of money over time; affects interest rates and cost calculations.

## 2. Prioritized 3-Hour Study Plan:

**Hour 1:  Fundamentals of Compounding and Discounting (60 minutes)**

* (15 min) Review definitions of **compounding** and **discounting**.  Understand the standard notation (X/Y, i%, n).
* (15 min) Practice calculating future worth using the **future worth factor**. Solve 3-5 example problems.
* (15 min) Practice calculating present worth using the **present worth factor**. Solve 3-5 example problems.
* (15 min)  Master the difference between single payment and annuity factors.


**Hour 2: Annuity Factors and Capitalized Cost (60 minutes)**

* (20 min) Understand and practice using the **present worth annuity factor (P/A)** and **capital recovery factor (A/P)**.  Solve problems.
* (20 min) Learn about the **sinking fund factor (A/F)**. Solve example problems.
* (20 min) Focus on **Perpetuity** and its application in engineering economics. Work through the example in the notes.


**Hour 3: Capitalized Cost, Salvage/Scrap Value, and Inflation (60 minutes)**

* (20 min) Deep dive into the concept of **capitalized cost (CK)**. Understand the formula and its relationship with initial investment, salvage value, and replacement cost. Solve problems.
* (15 min) Differentiate between **salvage value** and **scrap value**.
* (25 min) Study the effect of **inflation** on economic calculations and the relationship between real and nominal interest rates.


## 3. Multiple-Choice Questions:

1.  What does the notation (P/A, 8%, 10) represent?
    a) Future worth factor  
    b) **Present worth annuity factor** 
    c) Capital recovery factor
    d) Sinking fund factor

2.  Which factor converts a future value to a present value?
    a) Future worth factor
    b) **Present worth factor**
    c) Capital recovery factor
    d) Sinking fund factor

3.  What is the capitalized cost?
    a) Initial investment cost only.
    b) The cost of the asset over its entire life considering interest only.
    c) The cost of an asset for perpetuity, considering replacement costs and interest.
    d) The yearly cost of maintaining an asset.
    **Answer: c)**

4.  An annuity is:
    a) A single payment at a specific time.
    b) **A series of equal payments made at regular intervals.**
    c) The value of an asset at the end of its useful life.
    d) The interest rate adjusted for inflation.

5.  How does inflation affect the interest rate?
    a) Inflation lowers the interest rate.
    b) **Inflation typically causes the nominal interest rate to increase.**
    c) Inflation has no effect on the interest rate.
    d) Inflation causes interest rates to be unpredictable.


        ```
        

    
        ## Agent Interaction on 2025-09-14T05:07:21.728Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Summarize the following lecture notes into a maximum of 10 bullet points.  
                - Focus only on the most important concepts.  
                - Each point must be on a new line.  
                - Make formatting clear, structured, and easy to read in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
             
        ```
        **Response Received from API:**
        ```
        * **Compounding and Discounting Factors:**  These factors are used to calculate future and present values of money, considering interest rates and time periods.  Standard notations (e.g., (F/P, i%, n)) represent these calculations.

* **Future Worth Factor (F/P):** Calculates the future value (F) of a present sum (P) given an interest rate (i) and number of periods (n).

* **Present Worth Factor (P/F):** Calculates the present value (P) of a future sum (F) given an interest rate (i) and number of periods (n).

* **Present Worth Annuity Factor (P/A):**  Calculates the present value (P) of a series of equal payments (A) over a specified time period.

* **Capital Recovery Factor (A/P):** Calculates the annual equivalent payment (A) required to recover a present investment (P).

* **Sinking Fund Factor (A/F):** Calculates the uniform annual payment (A) needed to accumulate a future sum (F).

* **Perpetuity:** An annuity with payments continuing indefinitely; useful for calculating costs of perpetually replaced assets.

* **Capitalized Cost:** The total capital required to perpetually maintain an asset, considering initial investment, replacement costs, and interest.

* **Salvage and Scrap Values:**  Salvage value is the resale value of a used asset; scrap value is the value of the asset as raw material.

* **Inflation:**  The decrease in the purchasing power of money over time; influences interest rates and future value calculations.  Real interest rates need to account for inflation.

        ```
        

    
        ## Agent Interaction on 2025-09-14T05:15:14.735Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        # CHC303 Process Design and Economics: Process Economics Study Guide

## 1. Concise Bullet-Point Summary:

* **Compounding:** Determining the **future worth (F)** of a present amount (P) given an interest rate (i) and time period (n).  Uses **future-worth factor (F/P)**.
* **Discounting:** Determining the **present worth (P)** of a future amount (F) given i and n. Uses **present-worth factor (P/F)**.
* **Present Worth Annuity Factor (P/A):** Calculates the present worth of a series of equal payments (annuity, A).
* **Capital Recovery Factor (A/P):** Calculates the uniform annual payment (A) required to recover a present investment (P).
* **Sinking Fund Factor (A/F):** Calculates the uniform annual payment (A) required to accumulate a future amount (F).
* **Future Worth Annuity Factor (F/A):** Calculates the future worth of a series of equal payments (A).
* **Perpetuity:** An annuity with payments continuing indefinitely; useful for calculating **capitalized cost**.
* **Capitalized Cost (CK):** The total capital required for an asset considering initial investment, replacements, and interest.
* **Salvage Value:** The value of an asset at the end of its useful life, if it can be further used.
* **Scrap Value:** The value of an asset at the end of its useful life, if it cannot be used any more.
* **Inflation:**  A general increase in prices reducing the buying power of money; it impacts interest rates and economic calculations.
* **Real Interest Rate:**  The nominal interest rate adjusted for inflation.


## 2. Prioritized 3-Hour Study Plan:

**Hour 1:  Fundamental Concepts (60 minutes)**

* (15 min) Review the definitions of compounding and discounting, their formulas and the standard notation (X/Y, i%, n).
* (15 min) Master the interpretations and applications of Future-Worth and Present-Worth factors (F/P and P/F).
* (30 min) Understand Present Worth Annuity Factor (P/A), Capital Recovery Factor (A/P), and Sinking Fund Factor (A/F).  Practice simple calculation examples.

**Hour 2: Advanced Concepts & Applications (60 minutes)**

* (20 min) Focus on Future Worth Annuity Factor (F/A) and the concept of Perpetuity. Work through examples involving periodic payments.
* (20 min) Thoroughly understand the concept of Capitalized Cost (CK) and its calculation.  Solve problems involving salvage/scrap values.
* (20 min)  Deep dive into the impact of **inflation** on economic analysis.  Practice calculating real interest rates.


**Hour 3: Problem Solving & Review (60 minutes)**

* (45 min) Solve a variety of problems encompassing all the concepts learned.  Focus on application, rather than just formula memorization.
* (15 min) Review your notes and identify any remaining weak areas.  Refer to the textbook or supplementary materials for clarification.


## 3. Multiple-Choice Questions:

**1. What does (P/A, 8%, 10) represent?**
a) Future worth factor
b) Present worth factor
c) Present worth annuity factor  **Correct Answer**
d) Sinking fund factor

**2.  An annuity is:**
a) A single lump sum payment.
b) A series of equal payments over a period of time. **Correct Answer**
c) The interest earned on an investment.
d) The salvage value of an asset.


**3.  Capitalized cost is primarily used for:**
a) Determining the initial investment of a project.
b) Comparing alternative investment options. **Correct Answer**
c) Calculating depreciation.
d) Determining the scrap value of an asset.


**4. Which factor is used to determine the equal annual payment needed to repay a loan?**
a) (F/P, i%, n)
b) (P/F, i%, n)
c) (A/P, i%, n) **Correct Answer**
d) (A/F, i%, n)


**5.  What is the relationship between the nominal interest rate (i), real interest rate (r), and inflation rate (f)?**
a) i = r + f (approximately) **Correct Answer**
b) i = r - f
c) i = r * f
d) i = r / f



        ```
        

    
        ## Agent Interaction on 2025-09-14T05:15:49.620Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Summarize the following lecture notes into a maximum of 10 bullet points.  
                - Focus only on the most important concepts.  
                - Each point must be on a new line.  
                - Make formatting clear, structured, and easy to read in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Economics
5
th
Semester 
BTech
(Chemical 
Engg
.)
Compounding and Discounting 
Factors
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)
1
Slides courtesy: www.msubbu.in

Compounding and Discounting Factors
The standard notation in the general format:
(
X
/
Y
, 
i
%, 
n
)
X
represents what you want to find
Y
represents what is given
2
e.g.,
(
F
/
P
,
6
%,
20
) represents the factor that is used
to calculate the future amount
F
accumulated in 20
periods if the interest rate is 6% per period, for thegiven
P
.

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
3
notation
format,
as
F
= 
P
(
F
/
P
, 
i
%, 
n
)
The factor
(
F
/
P
,
i
%,
n
)
is known as the
future–worth factor 
(or) 
single payment future–worth factor

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
4
notation
format,
as
P
= 
F
(
P
/
F
, 
i
%, 
n
)
The factor
(
P
/
F
,
i
%,
n
)
is known as the
present–worth factor 
(or) 
single payment present–worth factor

Compounding and Discounting Factors
Present
–
worth factor:
Future–worth factor:
5
Present
–
worth factor:

Compounding and Discounting Factors
The  above  formula  can  be  written  in  standardnotation
format,
as
6
notation
format,
as
P
= 
A
(
P
/
A
, 
i
%, 
n
)
The factor
(
P
/
A
,
i
%,
n
)
is known as the
present–worth annuity factor 
(or) 
uniform series present–worth factor

Compounding and Discounting Factors
Present–worth annuity factor
7

Compounding and Discounting Factors
The inverse of the above, has the standard notationof
A
= 
P
(
A
/
P
, 
i
%, 
n
)
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
8
The
factor
(
A
/
P
,
i
%
,
n
)
is
known
as
the
Capital recovery factor 
The factor
(
A
/
F
,
i
%,
n
)
is called the
Sinking fund factor

Compounding and Discounting Factors
Capital recovery factor
9

Compounding and Discounting Factors
Sinking fund factor
10

Compounding and Discounting Factors
Future worth annuity factor
11

Perpetuity
A
perpetuity
is an annuity in which the periodic payments
continue indefinitely.This type of annuity is of particular interest to engineers,
for
12
in some cases they may desire to determine a total cost fora piece of equipment or other asset under conditions whichpermit  the  asset  to  be  replaced  perpetually  withoutconsidering inflation or deflation.

Perpetuity –
example
Consider  the  example  in  which  the  originalcost  of  a  certain  piece  of  equipment  is$12,000.
13
The useful-life period is 10 years.The scrap value at the end of the useful life is$2000.

Perpetuity –
example
The engineer reasons that this piece of equipment,or its replacement, will be in use for an indefinitelylong
period
of
time,
and
it
will
be
necessary
to
14
long
period
of
time,
and
it
will
be
necessary
to
supply $10,000 every 10 years in order to replacethe equipment.

Perpetuity –
example
He therefore wishes to provide a fund of sufficientsize so that it will earn enough interest to pay for theperiodic
replacement
.
15
periodic
replacement
.
If the discrete annual interest rate is 6 percent, thisfund would need to be $12,650.

Perpetuity –
example
At 6 percent interest compounded annually, the fundwould amount to ($12,650)(1 + 0.06)
10
= $22,650 after
10 years.
16
Thus,  at the end  of  10  years,  the equipment can  bereplaced  for  $10,000  and  $12,650  will  remain  in  thefund.

Perpetuity –
example
This cycle could now be repeated indefinitely.If
the
equipment
is
to
perpetuate
itself,
the
17
If
the
equipment
is
to
perpetuate
itself,
the
theoretical amount of total capital necessary at thestart  would  be  $12,000  for  the  equipment  plus$12,650 for the replacement fund.

Capitalized Cost
The total capital determined in this manner iscalled the
capitalized cost
.
18
Engineers use capitalized costs principally forcomparing alternative choices.

Capitalized Cost
The
capitalized  cost
(
C
K
)  is  related  with  the
initial investment cost (
C
I
) as:
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
19
K
I
K
S
wherei
= interest rate
n
= service life of the asset in years
C
S
= salvage value of the asset

Capitalized Cost
The amount
(
C
K
– C
I
)
is invested in a bank account at an
interest rate of
i
per year, would generate
C
K
– C
S
at the end
of
n
years.
(
C
K
– C
I
)(1+
i
)
n
= 
C
K
– C
S
By
algebraic
reduction,
the
above
equation
can
be
20
By
algebraic
reduction,
the
above
equation
can
be
re-written as
Note that,
C
I
– C
S
=
C
R
, is the cost of
replacement
.

Salvage and scrap values
Salvage value
is the net amount of money obtainable from the sale of used
property over and above any charges involved in removal and sale.If a property is capable of further service, its
salvage value
may be high.
The term
salvage value
implies that the asset can give some type of further
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
21
service
and
is
worth
more
than
merely
its
scrap
or
junk
value
.
If  the  property  cannot  be  disposed  of  as  a  useful  unit,  it  can  ofte
n  be
dismantled  and  sold  as
junk
to  be  used  again  as  a  manufacturing  raw
material.The profit obtainable from this type of disposal is known as the
scrap
, or
junk
,
value
.

Inflation
The
buying power
of money changes with time.
A
decline
in
buying power
is experienced as a general
increase in the prices and is called
inflation
.
Borrowing
becomes
more
attractive
if
inflation
is
22
Borrowing
becomes
more
attractive
if
inflation
is
expected  since  the  debt  will  be  paid  with  the  lessvaluable cash of the future.Interest rate should be higher than the inflation rate.Only then, there is a real earning for the lender.

Inflation
Inflation
is  the  increase  in  the  amount  of  money
necessary to purchase the same amount of a productor service over time.It  occurs  because  the
value  of  the  currency  has
decreased
,
so
it
takes
more
money
to
obtain
the
same
23
decreased
,
so
it
takes
more
money
to
obtain
the
same
amount of goods or services.Associated with inflation is an increase in the
money
supply
,  i.e.,  the  government  prints  more  currency
(rupees), while the supply of goods does not increase.

Inflation
Future amount = Constant value (1 + 
f
)
n
where,
24
f
= inflation rate (fraction)
n
= number of years

Inflation
The real interest rate
r
, corresponding to
a nominal interest rate of
i
, and inflation
rate of
f
are related as
25
As an approximation, we can consider

References
Compounding and Discounting Factors
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
26
3.
M  Subbu,  S.  Siddarth,  GATEway  to  Chemical  Engineering  (Vo
lume  –  5),  Rishal
Publications, 2018.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
James R. Couper, Process Engineering Economics, Marcel D
ekker, Inc., New York,
2003.  
                ---  
             
        ```
        **Response Received from API:**
        ```
        * **Compounding and Discounting Factors:**  These factors are used to calculate future and present values of money considering interest rates over time.  They are expressed using standard notations like (F/P, i%, n).

* **Future Worth Factor (F/P):** Calculates the future value (F) of a present amount (P) given an interest rate (i) and number of periods (n).

* **Present Worth Factor (P/F):** Calculates the present value (P) of a future amount (F) given an interest rate (i) and number of periods (n).

* **Present Worth Annuity Factor (P/A):**  Calculates the present worth of a series of equal payments (annuity).

* **Capital Recovery Factor (A/P):** Calculates the uniform annual payment required to recover the initial investment (P) over a period (n) at a given interest rate (i).

* **Sinking Fund Factor (A/F):** Calculates the uniform annual payment needed to accumulate a specific future amount (F) over a period (n) at a given interest rate (i).

* **Perpetuity:**  An annuity with payments continuing indefinitely, relevant for calculating the long-term cost of assets that are repeatedly replaced.

* **Capitalized Cost:** The total capital required to perpetually maintain an asset, considering initial investment, replacement costs, and interest.

* **Inflation:** The decrease in the purchasing power of money over time; impacts the real interest rate and should be accounted for in financial calculations.

* **Real Interest Rate:**  The nominal interest rate adjusted for inflation, representing the true return on investment.

        ```
        

    
        ## Agent Interaction on 2025-10-09T06:05:42.323Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Design
5
th
Semester 
BTech
(Chemical 
Engg
.)
Introduction to 
Chemical Process Plant Design
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)

What is Design?
Design is a creative processwhereby
an
innovative
solution
for
a
problem
is
solution
for
a
problem
is
conceived.

What is Design?
A
fashion designer
creates clothes that will
enhance the appeal of an individual.
Image sources:https://www.nift.ac.in/sites/default/files/2025-01/
niftfourty_banner.jpg 
https://jdinstitute.ac.in/wp-content/uploads/2022/0
2/3-How-to-sketch-like-a-fashion-designer.jpg

What is Design?
An interior designer designs the interior parts of a residen
ce
or an office.
Image sources: https://www.designcafe.comhttps://www.avantisystemsusa.com/category/corporate
-offices/

What is Design?
An
automobile  designer
creates  a
car
model
that
will
provide
transportation
and
a certain appeal
to the consumer.The
car’s appeal
may be because of
its
power
,
beauty,
convenience
,
its
power
,
beauty,
convenience
,
economy
,    size,
operability
,    low
maintenance,
uniqueness
,
or
gimmicks.
Image Sources: https://opentextbooks.clemson.edu/st
s1010fidlerfall2021/chapter/the-evolution-of-automo
biles/
https://i.pinimg.com/736x/06/b1/ed/06b1ed781621728c
1f53a05cac25679c.jpg

What is Design?
A  process  engineer  designs  a  plant  to  produce  a  givenchemical.
Sindri fertilizer plant
Image Source: https://images.bhaskarassets.com/thum
b/1200x900/web2images/521/2022/10/07/orig_1_1665098
369.jpg

What is Design?
In each of these instances... 
A new thing is created. A new thing is created. 
OR 
An old thing is created in a 
new way.

Why Design?
Design occurs when a possible answer for apresent or projected
need
or
desire
by people
or industry has been found.
If
a
product
were
not
expected
to
meet
a
need
If
a
product
were
not
expected
to
meet
a
need
or  desire,  there  would  be  no  reason  toproduce it and hence no reason for design.A   company   or   person   is   not   going   tomanufacture something that cannot be sold ata profit.

Needs & Desires for Design
The needs may be basic items like substances withwhich  to  clean  ourselves,  coverings  to  keep  ourbodies warm, dishes upon which to place our food,or cures for our diseases.The
desires
may
be
created
by
the
advertising
firms,
The
desires
may
be
created
by
the
advertising
firms,
as in the case of deodorants and luxury cars.Often  the  need  or  desire  can  be  satisfied  by  asubstance that is presently on the market, but it isprojected that a new product will either do a better
job, cost less, or require less time and effort.

Examples of Needs & Desire
The toothpastes produced before 1960 did a respectable jobof  cleaning  teeth,  but  the  addition  of  fluoride  made  thembetter cavity preventatives, and those toothpastes that ad
ded
fluorides became the best sellers.
Orange
juice
could
be
shipped
in
its
natural
form
to
markets,
Orange
juice
could
be
shipped
in
its
natural
form
to
markets,
but frozen concentrated orange juice occupies one-fourth t
he
volume and costs less to the consumer.
Ready-to-eat breakfast cereals cost more than the same food
s
in their natural state, but they reduce the time spent in thekitchen.
All of these items resulted from research followed 
by design.

Competition among Companies
Most  companies  in  the  consumer  productsindustries  realize  that  their
products  and
processes  must  be  continually  changed  tocompete
with other items that are attempting
to
replace
them
.
to
replace
them
.
Sometimes  almost
a  complete  replacement
occurs within a short time
and a
company may
be forced to close plants
unless an alternate
use of its products is found.

Competition among Companies
In the late 1950s the dairy industry consumed2,20,000 tons per year of petroleum waxes forcoating  paperboard  cartons  and  milk  bottletops
.
This
was
35
%
of
the
total
U
.
S
.
wax
tops
.
This
was
35
%
of
the
total
U
.
S
.
wax
production.
By 1966 this market had dropped
to 14% of its former level (25,000 tons / yr)because
polyethylene and other coatings had
replaced it
!
Research could prevent such a change from 
completely destroying a product’s markets
.

Why Research is required?

To improve the product.

Finding new uses for the product.

Reducing
costs
(Cost
reduction
is
usually

Reducing
costs
(Cost
reduction
is
usually
accomplished  by  improving  the  method  ofproducing the product).
Research  is  also  conducted  to  find  new
substances  to  meet  industry’s  and  people’sneeds and desires.

Types of Research
Basic research
consists of exploratory studies into things for
which an end use cannot be specified.It might include a study to determine the effect of chlorinemolecules on the diffusivity of hydrocarbons or a study of th
e
dissolution  of  single  spheres  in  a  flowing  stream.
The
prospective
dollar
value
of
this
research
cannot
be
estimated
.
prospective
dollar
value
of
this
research
cannot
be
estimated
.
Applied research
has a definite goal.
One  company  might  seek  a  new  agricultural  pesticide  toreplace  DDT.
Another  might  be  testing  a  new  approach  to
manufacturing polystyrene.Most large chemical companies spend around 5% of their totalgross sales on some type of research.

Design Ideas
Research is not the only sourceof new ideas.They may occur to anyone, andmost  companies  encourage  alltheir  employees  to  keep  theireyes open for them.

Design Ideas
A salesman, in talking to a customer, may find thatthis  customer  has  a  given  need  that  he  has  beenunable to satisfy.A  engineer  at  a  convention  may  find  out  thatsomeone
has
difficulty
operating
a
specific
unit
someone
has
difficulty
operating
a
specific
unit
because some needed additive has a deleterious sideeffect.The  engineer  and  salesman  report  the  details  ofthese  findings  in  the  hope  that  some  researcherwithin  their  own  company  may  have  discovered  aproduct that can meet these needs.

Design Ideas
Reading   literature   could   give   some   ideas   forinnovation.Another  source  of  design  ideas  is  the  productionplant (operations).There
the
operators
and
engineers
must
overcome
There
the
operators
and
engineers
must
overcome
the  problems  that  arise  daily  in  producing  anadequate supply of a quality product.Sometimes  accidentally
,
sometimes  by  hard  work
,
new processing conditions are found
that eliminate
the need for some purification steps or that greatlyincrease the plant capacity.

Successful Chemical Engineer
1)  Must have the knowledge and full understanding
of fundamental science and engineering concepts(MEB, TD, CRE, TP, PDC and computer technology)

Successful Chemical Engineer
2) Ought to have the ability to
apply this
knowledge  to  practical  situations
in
order  to
develop  new  or  improved
processes/products
that
will
be
beneficial
to
the
society
.
beneficial
to
the
society
.
3) Should
realize
the
economic
,
environmental
and
ethical
implications
that are involved in such developmentsand proceed accordingly.

Chemical Engineering 
(ChE)
Design
1)  ChE  design  of  new  processes  &  revision  of
existing processes require the use of engineeringprinciples   and   theories   combined   with   apractical realization of the limits imposed by theenvironmental, safety, and health concerns.
2)
Development
of
a
new
process
or
plant
from
2)
Development
of
a
new
process
or
plant
from
concept evaluation to profitable reality is a verycomplex operation.
3)  Design  problems  are  open–ended  and  hence
may  have  many  solutions  that  are
profitable
even when not entirely optimal
, yet meet the
design constraints noted above.

Plant Design
The  term
plant design
includes  all  engineering  aspects
involved in the development of a new, modified, or expandedcommercial process in a chemical or biochemical plant.
The chemical engineer will be:•
Making
economic
evaluations
of
new
processes
•
Making
economic
evaluations
of
new
processes
•
Designing individual pieces of equipment for the proposednew venture
or
•
Developing a plant layout for coordination of the overalloperation
Because of these many design duties, 
often  the chemical engineer is  referred to as a 
design engineer.

Plant Design
A  chemical  engineer  specializing  in  the  economicaspects of the design is often referred to as a
cost
engineer
.
In
many
instances,
the
term
process
engineering
is
In
many
instances,
the
term
process
engineering
is
used  in  connection  with  economic  evaluation  andgeneral economic analyses of industrial processes.The term
process design
refers to the actual design
of the equipment and facilities necessary for carryingout the process.

Plant Design project stages
A
plant-design
project moves to completion through a series
of stages
:
1. Inception2.
Preliminary evaluation of economics and market
3
.
Development
of
data
necessary
for
final
design
3
.
Development
of
data
necessary
for
final
design
4.
Final economic evaluation
5. Detailed engineering design6.
Procurement
7. Erection8.
Startup and trial runs
9. Production

Plant Design project stages
This  brief  outline  suggests  that  the  plant-designproject involves a wide variety of skills.
Among these
are  research,  market  analysis,  design  of  individualpieces
of
equipment,
cost
estimation,
computer
pieces
of
equipment,
cost
estimation,
computer
programming, and plant-location surveys.In  fact,  the  services  of  a  chemical  engineer  areneeded in each step of the outline, either in a centralcreative role, or as a key advisor.

Typical Design Steps for Chemical Process
(1) Recognize a societal or engineering need.
(a) Make a market analysis if a new product will result.
(2) Create one or more potential solutions to meet this need.
(a) Make a literature survey and patent search(b)
Identify
the
preliminary
data
required
.
(b)
Identify
the
preliminary
data
required
.
(3) Undertake preliminary process synthesis of these solut
ions
(a)   Determine   reactions,   separations,   and   possibleoperating conditions(b) Recognize environmental, safety, and health concerns.
(4) Assess profitability of preliminary process or process
es.
If negative, reject process and create new alternatives.

Typical Design Steps for Chemical Process (contd.)
(5) Refine required design data.
(a) Establish property data with appropriate software.(b) Verify experimentally, if necessary, key unknowns inthe process.
(6) Prepare detailed engineering design.
(a)
Develop
base
case
(if
economic
comparison
is
required)
(a)
Develop
base
case
(if
economic
comparison
is
required)
(b) Prepare process flow sheet(c) Integrate and optimize process(d) Check process controllability(e) Size equipment(f) Estimate capital cost
(7) Reassess the economic viability of process.
If  negative,  either  modify  process  or  investigate  otherprocess alternatives.

Typical Design Steps for Chemical Process (contd.)
(8) Review the process again for safety, environmental and
health effects.
(9) Provide a written process design report.(10) Complete the final engineering design.
(a)
Determine
the
equipment
layout
and
specifications
.
(a)
Determine
the
equipment
layout
and
specifications
.
(b) Develop piping and instrumentation diagrams.(c) Prepare bids for the equipment or the process plant.
(11) Procure equipment.(12) Provide assistance in the construction phase.(13) Assist with start–up runs.(14) Initiate production.

Plant Design project - major aspects
1)  Process design development2)  General design considerations3)  Flowsheet synthesis and development4)
Computer
aided
design
4)
Computer
aided
design
5)  Cost estimation6)  Factors affecting profitability of investments7)  Optimum design8)  Practical considerations in design

1. Development of Design Database2. Process Creation3. Process Design
Process Design Development
4. Process Flow Diagrams5. Piping & Instrumentation Diagrams6. Vessel and Piping Layout Isometrics7. Equipment Design and Specifications

1. Health and Safety Hazards2. Loss Prevention3. Environmental Protection
General Design Considerations
4. Plant Location5. Plant Layout6. Plant Operation and Control7. Patent Considerations

1. General Procedure2. Process Information3. Input/Output Structure
Flowsheet Synthesis and Development
4. Functions Diagram5. Operations Diagram6. Process Flowsheet7. Use of Software

References
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
Solen, K. A., J. N. Harb, Introduction to Chemical Enginee
ring – Tools for Today and
Tomorrow, 5
th
Edition, Wiley India Private Limited, New Delhi, 2014.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        Here is a complete study guide based on the provided notes for CHC303 Process Design and Economics.

---

### CHC303 Process Design and Economics: Study Guide

**Course:** CHC303 Process Design and Economics
**Module:** Process Design
**Semester:** 5th Semester BTech (Chemical Engg.)
**Instructor:** Dr. D. Krishna Sandilya

---

### 1. Concise Bullet-Point Summary

*   **Design** is a **creative process** that conceives an **innovative solution** for a problem.
*   Design involves creating a new thing or creating an old thing in a **new way**.
*   **Why Design?** It occurs when a solution is found for a present or projected **need** or **desire** by people or industry, with the expectation of **profit**.
*   **Competition** drives continuous product and process changes; companies must adapt or risk replacement (e.g., petroleum waxes replaced by polyethylene).
*   **Research** is crucial: **Basic research** is exploratory with no specified end use; **Applied research** has a **definite goal** (e.g., new pesticide, manufacturing approach).
*   **Design ideas** can originate from various sources: research, sales interactions, industry conventions, literature, and improvements found in existing **production plants** (operations).
*   A **successful Chemical Engineer** must apply fundamental knowledge to develop new/improved processes/products, considering **economic, environmental, and ethical implications**.
*   **Chemical Engineering Design** requires combining engineering principles with practical limits imposed by environmental, safety, and health concerns; solutions are often **open-ended**.
*   **Plant Design** includes all engineering aspects of developing a new, modified, or expanded commercial process in a chemical or biochemical plant.
*   The **design engineer** typically performs economic evaluations, designs equipment, and develops plant layouts; a **cost engineer** specializes in economic aspects.
*   **Plant-design projects** proceed through a series of stages: inception, preliminary evaluation, data development, final economic evaluation, detailed engineering, procurement, erection, startup, and production.
*   **Typical Chemical Process Design Steps** involve recognizing needs, creating solutions, preliminary process synthesis/profitability assessment, refining data, detailed engineering design, economic reassessment, safety/environmental review, and final engineering design through to production.

---

### 2. Prioritized 3-Hour Study Plan

This plan prioritizes foundational understanding before moving to detailed processes and application.

**Hour 1: Core Concepts and Motivation (60 minutes)**

*   **(15 min) What is Design & Why Design:**
    *   Understand the definition of **Design** as a creative, problem-solving process.
    *   Distinguish between creating new things vs. new ways for old things.
    *   Grasp the core motivation for design: meeting **needs** and **desires** profitably.
    *   Review examples (fashion, interior, automobile, chemical plant).
*   **(20 min) Competition, Needs, and Research:**
    *   Understand how **competition** drives design and innovation (e.g., fluoride toothpaste, frozen orange juice, polyethylene replacing waxes).
    *   Differentiate between **Basic research** (exploratory, no specified end-use) and **Applied research** (definite goal).
    *   Understand why research (product improvement, new uses, cost reduction) is essential.
*   **(15 min) Sources of Design Ideas & Engineer's Role:**
    *   Identify diverse sources of design ideas beyond research (sales, conventions, literature, plant operations).
    *   Understand the key attributes of a **successful Chemical Engineer** (fundamental knowledge, application, economic/environmental/ethical awareness).
*   **(10 min) Quick Review & Self-Assessment:**
    *   Briefly recall definitions of Design, Basic vs. Applied Research.
    *   Mentally list reasons **Why Design?**

**Hour 2: Process and Plant Design Fundamentals (60 minutes)**

*   **(20 min) Chemical Engineering Design Principles:**
    *   Understand that **Chemical Engineering Design** combines engineering principles with practical limits (environmental, safety, health).
    *   Note that design problems are **open-ended** with multiple profitable solutions.
    *   Define **Plant Design**, **design engineer**, **cost engineer**, and **process design**.
*   **(25 min) Plant Design Project Stages (Overview):**
    *   Memorize the 9 stages of a **plant-design project** from inception to production. Focus on the sequence and what each stage generally entails (e.g., inception, preliminary evaluation, detailed engineering, startup).
    *   Understand the broad skills required at various stages.
*   **(15 min) Major Aspects of Plant Design Project:**
    *   Identify the 8 major aspects of a plant design project (Process design development, General design considerations, Flowsheet synthesis, CAD, Cost estimation, Profitability, Optimum design, Practical considerations).
    *   Briefly review the sub-components of Process Design Development, General Design Considerations, and Flowsheet Synthesis.
    *   **Bold** key terms.

**Hour 3: Detailed Design Process and Practice (60 minutes)**

*   **(30 min) Typical Design Steps for Chemical Process:**
    *   Thoroughly review and understand the 14 **Typical Design Steps for Chemical Process**.
    *   Pay attention to the logical flow: Recognize need -> Create solutions -> Assess profitability -> Refine data -> Detailed design -> Reassess economics -> Review safety -> Report -> Final engineering -> Procurement -> Construction -> Startup -> Production.
    *   Understand what happens at each step (e.g., market analysis, literature survey, process synthesis, flow sheets, equipment sizing, cost estimation, P&IDs).
*   **(15 min) Key Takeaways & Interconnections:**
    *   Review all **bolded terms** throughout the notes and ensure understanding.
    *   Consider how different sections connect (e.g., research feeds into design ideas, which feed into the design steps, leading to a plant design project).
*   **(15 min) Multiple-Choice Questions & Self-Test:**
    *   Answer the provided multiple-choice questions to test your comprehension.
    *   Create your own short questions based on the notes for a quick self-quiz.

---

### 3. At Least 5 Multiple-Choice Questions with Answers

**1. What is the primary characteristic of "design" as defined in the notes?**
    a) Replicating existing solutions without modification.
    b) A creative process for conceiving an innovative solution for a problem.
    c) Solely focused on aesthetic appeal in products.
    d) A linear process with only one possible solution.

    **Answer: b) A creative process for conceiving an innovative solution for a problem.**

**2. Which of the following best describes the primary reason for "Why Design?" according to the notes?**
    a) To satisfy academic curiosity regardless of market demand.
    b) To produce goods that are unique, even if they cannot be sold profitably.
    c) When a possible answer for a present or projected need or desire by people or industry has been found, with the expectation of profitability.
    d) To continuously replace existing products with new ones, irrespective of performance improvement.

    **Answer: c) When a possible answer for a present or projected need or desire by people or industry has been found, with the expectation of profitability.**

**3. A company is testing a new approach to manufacturing polystyrene with a specific commercial objective. This activity falls under which type of research?**
    a) Basic research
    b) Exploratory research
    c) Fundamental research
    d) Applied research

    **Answer: d) Applied research**

**4. In the stages of a plant-design project, which step immediately follows the "Detailed engineering design" stage?**
    a) Inception
    b) Preliminary evaluation of economics and market
    c) Procurement
    d) Startup and trial runs

    **Answer: c) Procurement**

**5. According to the "Typical Design Steps for Chemical Process," what is a crucial activity undertaken after recognizing a societal or engineering need but before undertaking preliminary process synthesis?**
    a) Providing a written process design report.
    b) Making a literature survey and patent search.
    c) Procuring equipment and materials.
    d) Assisting with start-up runs.

    **Answer: b) Making a literature survey and patent search.**

---
        ```
        

    
        ## Agent Interaction on 2025-10-09T06:06:51.917Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Summarize the following lecture notes into a maximum of 10 bullet points.  
                - Focus only on the most important concepts.  
                - Each point must be on a new line.  
                - Make formatting clear, structured, and easy to read in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Design
5
th
Semester 
BTech
(Chemical 
Engg
.)
Introduction to 
Chemical Process Plant Design
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)

What is Design?
Design is a creative processwhereby
an
innovative
solution
for
a
problem
is
solution
for
a
problem
is
conceived.

What is Design?
A
fashion designer
creates clothes that will
enhance the appeal of an individual.
Image sources:https://www.nift.ac.in/sites/default/files/2025-01/
niftfourty_banner.jpg 
https://jdinstitute.ac.in/wp-content/uploads/2022/0
2/3-How-to-sketch-like-a-fashion-designer.jpg

What is Design?
An interior designer designs the interior parts of a residen
ce
or an office.
Image sources: https://www.designcafe.comhttps://www.avantisystemsusa.com/category/corporate
-offices/

What is Design?
An
automobile  designer
creates  a
car
model
that
will
provide
transportation
and
a certain appeal
to the consumer.The
car’s appeal
may be because of
its
power
,
beauty,
convenience
,
its
power
,
beauty,
convenience
,
economy
,    size,
operability
,    low
maintenance,
uniqueness
,
or
gimmicks.
Image Sources: https://opentextbooks.clemson.edu/st
s1010fidlerfall2021/chapter/the-evolution-of-automo
biles/
https://i.pinimg.com/736x/06/b1/ed/06b1ed781621728c
1f53a05cac25679c.jpg

What is Design?
A  process  engineer  designs  a  plant  to  produce  a  givenchemical.
Sindri fertilizer plant
Image Source: https://images.bhaskarassets.com/thum
b/1200x900/web2images/521/2022/10/07/orig_1_1665098
369.jpg

What is Design?
In each of these instances... 
A new thing is created. A new thing is created. 
OR 
An old thing is created in a 
new way.

Why Design?
Design occurs when a possible answer for apresent or projected
need
or
desire
by people
or industry has been found.
If
a
product
were
not
expected
to
meet
a
need
If
a
product
were
not
expected
to
meet
a
need
or  desire,  there  would  be  no  reason  toproduce it and hence no reason for design.A   company   or   person   is   not   going   tomanufacture something that cannot be sold ata profit.

Needs & Desires for Design
The needs may be basic items like substances withwhich  to  clean  ourselves,  coverings  to  keep  ourbodies warm, dishes upon which to place our food,or cures for our diseases.The
desires
may
be
created
by
the
advertising
firms,
The
desires
may
be
created
by
the
advertising
firms,
as in the case of deodorants and luxury cars.Often  the  need  or  desire  can  be  satisfied  by  asubstance that is presently on the market, but it isprojected that a new product will either do a better
job, cost less, or require less time and effort.

Examples of Needs & Desire
The toothpastes produced before 1960 did a respectable jobof  cleaning  teeth,  but  the  addition  of  fluoride  made  thembetter cavity preventatives, and those toothpastes that ad
ded
fluorides became the best sellers.
Orange
juice
could
be
shipped
in
its
natural
form
to
markets,
Orange
juice
could
be
shipped
in
its
natural
form
to
markets,
but frozen concentrated orange juice occupies one-fourth t
he
volume and costs less to the consumer.
Ready-to-eat breakfast cereals cost more than the same food
s
in their natural state, but they reduce the time spent in thekitchen.
All of these items resulted from research followed 
by design.

Competition among Companies
Most  companies  in  the  consumer  productsindustries  realize  that  their
products  and
processes  must  be  continually  changed  tocompete
with other items that are attempting
to
replace
them
.
to
replace
them
.
Sometimes  almost
a  complete  replacement
occurs within a short time
and a
company may
be forced to close plants
unless an alternate
use of its products is found.

Competition among Companies
In the late 1950s the dairy industry consumed2,20,000 tons per year of petroleum waxes forcoating  paperboard  cartons  and  milk  bottletops
.
This
was
35
%
of
the
total
U
.
S
.
wax
tops
.
This
was
35
%
of
the
total
U
.
S
.
wax
production.
By 1966 this market had dropped
to 14% of its former level (25,000 tons / yr)because
polyethylene and other coatings had
replaced it
!
Research could prevent such a change from 
completely destroying a product’s markets
.

Why Research is required?

To improve the product.

Finding new uses for the product.

Reducing
costs
(Cost
reduction
is
usually

Reducing
costs
(Cost
reduction
is
usually
accomplished  by  improving  the  method  ofproducing the product).
Research  is  also  conducted  to  find  new
substances  to  meet  industry’s  and  people’sneeds and desires.

Types of Research
Basic research
consists of exploratory studies into things for
which an end use cannot be specified.It might include a study to determine the effect of chlorinemolecules on the diffusivity of hydrocarbons or a study of th
e
dissolution  of  single  spheres  in  a  flowing  stream.
The
prospective
dollar
value
of
this
research
cannot
be
estimated
.
prospective
dollar
value
of
this
research
cannot
be
estimated
.
Applied research
has a definite goal.
One  company  might  seek  a  new  agricultural  pesticide  toreplace  DDT.
Another  might  be  testing  a  new  approach  to
manufacturing polystyrene.Most large chemical companies spend around 5% of their totalgross sales on some type of research.

Design Ideas
Research is not the only sourceof new ideas.They may occur to anyone, andmost  companies  encourage  alltheir  employees  to  keep  theireyes open for them.

Design Ideas
A salesman, in talking to a customer, may find thatthis  customer  has  a  given  need  that  he  has  beenunable to satisfy.A  engineer  at  a  convention  may  find  out  thatsomeone
has
difficulty
operating
a
specific
unit
someone
has
difficulty
operating
a
specific
unit
because some needed additive has a deleterious sideeffect.The  engineer  and  salesman  report  the  details  ofthese  findings  in  the  hope  that  some  researcherwithin  their  own  company  may  have  discovered  aproduct that can meet these needs.

Design Ideas
Reading   literature   could   give   some   ideas   forinnovation.Another  source  of  design  ideas  is  the  productionplant (operations).There
the
operators
and
engineers
must
overcome
There
the
operators
and
engineers
must
overcome
the  problems  that  arise  daily  in  producing  anadequate supply of a quality product.Sometimes  accidentally
,
sometimes  by  hard  work
,
new processing conditions are found
that eliminate
the need for some purification steps or that greatlyincrease the plant capacity.

Successful Chemical Engineer
1)  Must have the knowledge and full understanding
of fundamental science and engineering concepts(MEB, TD, CRE, TP, PDC and computer technology)

Successful Chemical Engineer
2) Ought to have the ability to
apply this
knowledge  to  practical  situations
in
order  to
develop  new  or  improved
processes/products
that
will
be
beneficial
to
the
society
.
beneficial
to
the
society
.
3) Should
realize
the
economic
,
environmental
and
ethical
implications
that are involved in such developmentsand proceed accordingly.

Chemical Engineering 
(ChE)
Design
1)  ChE  design  of  new  processes  &  revision  of
existing processes require the use of engineeringprinciples   and   theories   combined   with   apractical realization of the limits imposed by theenvironmental, safety, and health concerns.
2)
Development
of
a
new
process
or
plant
from
2)
Development
of
a
new
process
or
plant
from
concept evaluation to profitable reality is a verycomplex operation.
3)  Design  problems  are  open–ended  and  hence
may  have  many  solutions  that  are
profitable
even when not entirely optimal
, yet meet the
design constraints noted above.

Plant Design
The  term
plant design
includes  all  engineering  aspects
involved in the development of a new, modified, or expandedcommercial process in a chemical or biochemical plant.
The chemical engineer will be:•
Making
economic
evaluations
of
new
processes
•
Making
economic
evaluations
of
new
processes
•
Designing individual pieces of equipment for the proposednew venture
or
•
Developing a plant layout for coordination of the overalloperation
Because of these many design duties, 
often  the chemical engineer is  referred to as a 
design engineer.

Plant Design
A  chemical  engineer  specializing  in  the  economicaspects of the design is often referred to as a
cost
engineer
.
In
many
instances,
the
term
process
engineering
is
In
many
instances,
the
term
process
engineering
is
used  in  connection  with  economic  evaluation  andgeneral economic analyses of industrial processes.The term
process design
refers to the actual design
of the equipment and facilities necessary for carryingout the process.

Plant Design project stages
A
plant-design
project moves to completion through a series
of stages
:
1. Inception2.
Preliminary evaluation of economics and market
3
.
Development
of
data
necessary
for
final
design
3
.
Development
of
data
necessary
for
final
design
4.
Final economic evaluation
5. Detailed engineering design6.
Procurement
7. Erection8.
Startup and trial runs
9. Production

Plant Design project stages
This  brief  outline  suggests  that  the  plant-designproject involves a wide variety of skills.
Among these
are  research,  market  analysis,  design  of  individualpieces
of
equipment,
cost
estimation,
computer
pieces
of
equipment,
cost
estimation,
computer
programming, and plant-location surveys.In  fact,  the  services  of  a  chemical  engineer  areneeded in each step of the outline, either in a centralcreative role, or as a key advisor.

Typical Design Steps for Chemical Process
(1) Recognize a societal or engineering need.
(a) Make a market analysis if a new product will result.
(2) Create one or more potential solutions to meet this need.
(a) Make a literature survey and patent search(b)
Identify
the
preliminary
data
required
.
(b)
Identify
the
preliminary
data
required
.
(3) Undertake preliminary process synthesis of these solut
ions
(a)   Determine   reactions,   separations,   and   possibleoperating conditions(b) Recognize environmental, safety, and health concerns.
(4) Assess profitability of preliminary process or process
es.
If negative, reject process and create new alternatives.

Typical Design Steps for Chemical Process (contd.)
(5) Refine required design data.
(a) Establish property data with appropriate software.(b) Verify experimentally, if necessary, key unknowns inthe process.
(6) Prepare detailed engineering design.
(a)
Develop
base
case
(if
economic
comparison
is
required)
(a)
Develop
base
case
(if
economic
comparison
is
required)
(b) Prepare process flow sheet(c) Integrate and optimize process(d) Check process controllability(e) Size equipment(f) Estimate capital cost
(7) Reassess the economic viability of process.
If  negative,  either  modify  process  or  investigate  otherprocess alternatives.

Typical Design Steps for Chemical Process (contd.)
(8) Review the process again for safety, environmental and
health effects.
(9) Provide a written process design report.(10) Complete the final engineering design.
(a)
Determine
the
equipment
layout
and
specifications
.
(a)
Determine
the
equipment
layout
and
specifications
.
(b) Develop piping and instrumentation diagrams.(c) Prepare bids for the equipment or the process plant.
(11) Procure equipment.(12) Provide assistance in the construction phase.(13) Assist with start–up runs.(14) Initiate production.

Plant Design project - major aspects
1)  Process design development2)  General design considerations3)  Flowsheet synthesis and development4)
Computer
aided
design
4)
Computer
aided
design
5)  Cost estimation6)  Factors affecting profitability of investments7)  Optimum design8)  Practical considerations in design

1. Development of Design Database2. Process Creation3. Process Design
Process Design Development
4. Process Flow Diagrams5. Piping & Instrumentation Diagrams6. Vessel and Piping Layout Isometrics7. Equipment Design and Specifications

1. Health and Safety Hazards2. Loss Prevention3. Environmental Protection
General Design Considerations
4. Plant Location5. Plant Layout6. Plant Operation and Control7. Patent Considerations

1. General Procedure2. Process Information3. Input/Output Structure
Flowsheet Synthesis and Development
4. Functions Diagram5. Operations Diagram6. Process Flowsheet7. Use of Software

References
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
Solen, K. A., J. N. Harb, Introduction to Chemical Enginee
ring – Tools for Today and
Tomorrow, 5
th
Edition, Wiley India Private Limited, New Delhi, 2014.  
                ---  
             
        ```
        **Response Received from API:**
        ```
        Here's a summary of the lecture notes in 10 bullet points:

*   **Design** is a creative process aimed at conceiving innovative solutions for problems, leading to new creations or improvements upon existing ones.
*   **Chemical Process Design** specifically involves developing or enhancing plants to produce chemicals, always considering profitability and market needs.
*   The primary **Motivation for Design** is to meet present or projected societal needs and desires, ensure products are economically viable, and maintain competitiveness within the industry.
*   **Design Ideas** can originate from various sources, including basic and applied research, market analysis, literature reviews, and practical observations from sales and plant operations.
*   A **Successful Chemical Engineer** must possess strong fundamental engineering knowledge, apply this to practical situations for beneficial product/process development, and understand economic, environmental, and ethical implications.
*   **Chemical Engineering Design** problems are inherently open-ended, necessitating the application of engineering principles within practical limits imposed by environmental, safety, and health concerns, often with multiple profitable solutions.
*   **Plant Design** encompasses all engineering facets involved in developing a new, modified, or expanded commercial process, including economic evaluations, equipment design, and overall plant layout.
*   A **Plant Design Project** progresses through distinct stages: inception, preliminary evaluation, data development, detailed engineering design, procurement, erection, startup, and final production.
*   **Typical Design Steps** involve recognizing a need, generating solutions, conducting preliminary process synthesis, assessing profitability, refining data, executing detailed engineering design, and thoroughly reviewing for safety, environmental impact, and economic viability.
*   **Major Aspects of Plant Design** include process design development, general considerations (like health, safety, environmental protection, plant location), flowsheet synthesis, computer-aided design, and comprehensive cost and profitability analysis.
        ```
        

    
        ## Agent Interaction on 2025-10-09T06:07:42.733Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                Summarize the following lecture notes into a maximum of 10 bullet points.  
                - Focus only on the most important concepts.  
                - Each point must be on a new line.  
                - Make formatting clear, structured, and easy to read in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Design
5
th
Semester 
BTech
(Chemical 
Engg
.)
Introduction to 
Chemical Process Plant Design
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)

What is Design?
Design is a creative processwhereby
an
innovative
solution
for
a
problem
is
solution
for
a
problem
is
conceived.

What is Design?
A
fashion designer
creates clothes that will
enhance the appeal of an individual.
Image sources:https://www.nift.ac.in/sites/default/files/2025-01/
niftfourty_banner.jpg 
https://jdinstitute.ac.in/wp-content/uploads/2022/0
2/3-How-to-sketch-like-a-fashion-designer.jpg

What is Design?
An interior designer designs the interior parts of a residen
ce
or an office.
Image sources: https://www.designcafe.comhttps://www.avantisystemsusa.com/category/corporate
-offices/

What is Design?
An
automobile  designer
creates  a
car
model
that
will
provide
transportation
and
a certain appeal
to the consumer.The
car’s appeal
may be because of
its
power
,
beauty,
convenience
,
its
power
,
beauty,
convenience
,
economy
,    size,
operability
,    low
maintenance,
uniqueness
,
or
gimmicks.
Image Sources: https://opentextbooks.clemson.edu/st
s1010fidlerfall2021/chapter/the-evolution-of-automo
biles/
https://i.pinimg.com/736x/06/b1/ed/06b1ed781621728c
1f53a05cac25679c.jpg

What is Design?
A  process  engineer  designs  a  plant  to  produce  a  givenchemical.
Sindri fertilizer plant
Image Source: https://images.bhaskarassets.com/thum
b/1200x900/web2images/521/2022/10/07/orig_1_1665098
369.jpg

What is Design?
In each of these instances... 
A new thing is created. A new thing is created. 
OR 
An old thing is created in a 
new way.

Why Design?
Design occurs when a possible answer for apresent or projected
need
or
desire
by people
or industry has been found.
If
a
product
were
not
expected
to
meet
a
need
If
a
product
were
not
expected
to
meet
a
need
or  desire,  there  would  be  no  reason  toproduce it and hence no reason for design.A   company   or   person   is   not   going   tomanufacture something that cannot be sold ata profit.

Needs & Desires for Design
The needs may be basic items like substances withwhich  to  clean  ourselves,  coverings  to  keep  ourbodies warm, dishes upon which to place our food,or cures for our diseases.The
desires
may
be
created
by
the
advertising
firms,
The
desires
may
be
created
by
the
advertising
firms,
as in the case of deodorants and luxury cars.Often  the  need  or  desire  can  be  satisfied  by  asubstance that is presently on the market, but it isprojected that a new product will either do a better
job, cost less, or require less time and effort.

Examples of Needs & Desire
The toothpastes produced before 1960 did a respectable jobof  cleaning  teeth,  but  the  addition  of  fluoride  made  thembetter cavity preventatives, and those toothpastes that ad
ded
fluorides became the best sellers.
Orange
juice
could
be
shipped
in
its
natural
form
to
markets,
Orange
juice
could
be
shipped
in
its
natural
form
to
markets,
but frozen concentrated orange juice occupies one-fourth t
he
volume and costs less to the consumer.
Ready-to-eat breakfast cereals cost more than the same food
s
in their natural state, but they reduce the time spent in thekitchen.
All of these items resulted from research followed 
by design.

Competition among Companies
Most  companies  in  the  consumer  productsindustries  realize  that  their
products  and
processes  must  be  continually  changed  tocompete
with other items that are attempting
to
replace
them
.
to
replace
them
.
Sometimes  almost
a  complete  replacement
occurs within a short time
and a
company may
be forced to close plants
unless an alternate
use of its products is found.

Competition among Companies
In the late 1950s the dairy industry consumed2,20,000 tons per year of petroleum waxes forcoating  paperboard  cartons  and  milk  bottletops
.
This
was
35
%
of
the
total
U
.
S
.
wax
tops
.
This
was
35
%
of
the
total
U
.
S
.
wax
production.
By 1966 this market had dropped
to 14% of its former level (25,000 tons / yr)because
polyethylene and other coatings had
replaced it
!
Research could prevent such a change from 
completely destroying a product’s markets
.

Why Research is required?

To improve the product.

Finding new uses for the product.

Reducing
costs
(Cost
reduction
is
usually

Reducing
costs
(Cost
reduction
is
usually
accomplished  by  improving  the  method  ofproducing the product).
Research  is  also  conducted  to  find  new
substances  to  meet  industry’s  and  people’sneeds and desires.

Types of Research
Basic research
consists of exploratory studies into things for
which an end use cannot be specified.It might include a study to determine the effect of chlorinemolecules on the diffusivity of hydrocarbons or a study of th
e
dissolution  of  single  spheres  in  a  flowing  stream.
The
prospective
dollar
value
of
this
research
cannot
be
estimated
.
prospective
dollar
value
of
this
research
cannot
be
estimated
.
Applied research
has a definite goal.
One  company  might  seek  a  new  agricultural  pesticide  toreplace  DDT.
Another  might  be  testing  a  new  approach  to
manufacturing polystyrene.Most large chemical companies spend around 5% of their totalgross sales on some type of research.

Design Ideas
Research is not the only sourceof new ideas.They may occur to anyone, andmost  companies  encourage  alltheir  employees  to  keep  theireyes open for them.

Design Ideas
A salesman, in talking to a customer, may find thatthis  customer  has  a  given  need  that  he  has  beenunable to satisfy.A  engineer  at  a  convention  may  find  out  thatsomeone
has
difficulty
operating
a
specific
unit
someone
has
difficulty
operating
a
specific
unit
because some needed additive has a deleterious sideeffect.The  engineer  and  salesman  report  the  details  ofthese  findings  in  the  hope  that  some  researcherwithin  their  own  company  may  have  discovered  aproduct that can meet these needs.

Design Ideas
Reading   literature   could   give   some   ideas   forinnovation.Another  source  of  design  ideas  is  the  productionplant (operations).There
the
operators
and
engineers
must
overcome
There
the
operators
and
engineers
must
overcome
the  problems  that  arise  daily  in  producing  anadequate supply of a quality product.Sometimes  accidentally
,
sometimes  by  hard  work
,
new processing conditions are found
that eliminate
the need for some purification steps or that greatlyincrease the plant capacity.

Successful Chemical Engineer
1)  Must have the knowledge and full understanding
of fundamental science and engineering concepts(MEB, TD, CRE, TP, PDC and computer technology)

Successful Chemical Engineer
2) Ought to have the ability to
apply this
knowledge  to  practical  situations
in
order  to
develop  new  or  improved
processes/products
that
will
be
beneficial
to
the
society
.
beneficial
to
the
society
.
3) Should
realize
the
economic
,
environmental
and
ethical
implications
that are involved in such developmentsand proceed accordingly.

Chemical Engineering 
(ChE)
Design
1)  ChE  design  of  new  processes  &  revision  of
existing processes require the use of engineeringprinciples   and   theories   combined   with   apractical realization of the limits imposed by theenvironmental, safety, and health concerns.
2)
Development
of
a
new
process
or
plant
from
2)
Development
of
a
new
process
or
plant
from
concept evaluation to profitable reality is a verycomplex operation.
3)  Design  problems  are  open–ended  and  hence
may  have  many  solutions  that  are
profitable
even when not entirely optimal
, yet meet the
design constraints noted above.

Plant Design
The  term
plant design
includes  all  engineering  aspects
involved in the development of a new, modified, or expandedcommercial process in a chemical or biochemical plant.
The chemical engineer will be:•
Making
economic
evaluations
of
new
processes
•
Making
economic
evaluations
of
new
processes
•
Designing individual pieces of equipment for the proposednew venture
or
•
Developing a plant layout for coordination of the overalloperation
Because of these many design duties, 
often  the chemical engineer is  referred to as a 
design engineer.

Plant Design
A  chemical  engineer  specializing  in  the  economicaspects of the design is often referred to as a
cost
engineer
.
In
many
instances,
the
term
process
engineering
is
In
many
instances,
the
term
process
engineering
is
used  in  connection  with  economic  evaluation  andgeneral economic analyses of industrial processes.The term
process design
refers to the actual design
of the equipment and facilities necessary for carryingout the process.

Plant Design project stages
A
plant-design
project moves to completion through a series
of stages
:
1. Inception2.
Preliminary evaluation of economics and market
3
.
Development
of
data
necessary
for
final
design
3
.
Development
of
data
necessary
for
final
design
4.
Final economic evaluation
5. Detailed engineering design6.
Procurement
7. Erection8.
Startup and trial runs
9. Production

Plant Design project stages
This  brief  outline  suggests  that  the  plant-designproject involves a wide variety of skills.
Among these
are  research,  market  analysis,  design  of  individualpieces
of
equipment,
cost
estimation,
computer
pieces
of
equipment,
cost
estimation,
computer
programming, and plant-location surveys.In  fact,  the  services  of  a  chemical  engineer  areneeded in each step of the outline, either in a centralcreative role, or as a key advisor.

Typical Design Steps for Chemical Process
(1) Recognize a societal or engineering need.
(a) Make a market analysis if a new product will result.
(2) Create one or more potential solutions to meet this need.
(a) Make a literature survey and patent search(b)
Identify
the
preliminary
data
required
.
(b)
Identify
the
preliminary
data
required
.
(3) Undertake preliminary process synthesis of these solut
ions
(a)   Determine   reactions,   separations,   and   possibleoperating conditions(b) Recognize environmental, safety, and health concerns.
(4) Assess profitability of preliminary process or process
es.
If negative, reject process and create new alternatives.

Typical Design Steps for Chemical Process (contd.)
(5) Refine required design data.
(a) Establish property data with appropriate software.(b) Verify experimentally, if necessary, key unknowns inthe process.
(6) Prepare detailed engineering design.
(a)
Develop
base
case
(if
economic
comparison
is
required)
(a)
Develop
base
case
(if
economic
comparison
is
required)
(b) Prepare process flow sheet(c) Integrate and optimize process(d) Check process controllability(e) Size equipment(f) Estimate capital cost
(7) Reassess the economic viability of process.
If  negative,  either  modify  process  or  investigate  otherprocess alternatives.

Typical Design Steps for Chemical Process (contd.)
(8) Review the process again for safety, environmental and
health effects.
(9) Provide a written process design report.(10) Complete the final engineering design.
(a)
Determine
the
equipment
layout
and
specifications
.
(a)
Determine
the
equipment
layout
and
specifications
.
(b) Develop piping and instrumentation diagrams.(c) Prepare bids for the equipment or the process plant.
(11) Procure equipment.(12) Provide assistance in the construction phase.(13) Assist with start–up runs.(14) Initiate production.

Plant Design project - major aspects
1)  Process design development2)  General design considerations3)  Flowsheet synthesis and development4)
Computer
aided
design
4)
Computer
aided
design
5)  Cost estimation6)  Factors affecting profitability of investments7)  Optimum design8)  Practical considerations in design

1. Development of Design Database2. Process Creation3. Process Design
Process Design Development
4. Process Flow Diagrams5. Piping & Instrumentation Diagrams6. Vessel and Piping Layout Isometrics7. Equipment Design and Specifications

1. Health and Safety Hazards2. Loss Prevention3. Environmental Protection
General Design Considerations
4. Plant Location5. Plant Layout6. Plant Operation and Control7. Patent Considerations

1. General Procedure2. Process Information3. Input/Output Structure
Flowsheet Synthesis and Development
4. Functions Diagram5. Operations Diagram6. Process Flowsheet7. Use of Software

References
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
Solen, K. A., J. N. Harb, Introduction to Chemical Enginee
ring – Tools for Today and
Tomorrow, 5
th
Edition, Wiley India Private Limited, New Delhi, 2014.  
                ---  
             
        ```
        **Response Received from API:**
        ```
        Here is a summary of the lecture notes in 10 bullet points:

*   **Core Purpose of Design:** Design is a creative process that develops an innovative solution to a problem, driven by market needs and the goal of profitability.
*   **Role of Competition and Research:** Companies must continually innovate through research to improve products, find new uses, and reduce costs in order to remain competitive.
*   **Sources of Design Ideas:** New ideas are not limited to formal research; they also originate from customer feedback, plant operations, sales teams, and literature reviews.
*   **Chemical Engineering Design:** This field applies fundamental engineering principles to develop or revise a process, acknowledging that design problems are open-ended and must satisfy safety, environmental, and economic constraints.
*   **Plant Design vs. Process Design:** "Plant Design" refers to the entire project of building or modifying a facility, while "Process Design" is the specific technical task of designing the equipment and systems within the plant.
*   **Project Lifecycle Stages:** A plant design project follows a structured progression from an initial concept and market evaluation to detailed engineering, procurement, construction, and finally, plant startup.
*   **The Iterative Design Process:** The core design workflow involves synthesizing a process, performing preliminary economic analysis, refining data, creating detailed flowsheets, sizing equipment, and then re-evaluating the process for profitability and safety.
*   **Economic Evaluation is Key:** Cost estimation and profitability analysis are critical components that are performed at both the preliminary and final stages of a design project to ensure its economic viability.
*   **Critical Design Considerations:** Beyond the core process, designers must address essential factors including health and safety hazards, environmental protection, plant location, and operability.
*   **Essential Engineering Documents:** The design is formalized through key documents, primarily Process Flow Diagrams (PFDs) and Piping & Instrumentation Diagrams (P&IDs), which serve as the blueprints for the plant.
        ```
        

    
        ## Agent Interaction on 2025-10-09T06:13:20.863Z
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** 
        **Full Prompt Sent to API:**
        ```
        
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                

Course: CHC303 Process Design and Economics
Module: Process Design
5
th
Semester 
BTech
(Chemical 
Engg
.)
Introduction to 
Chemical Process Plant Design
Instructor: Dr. D. Krishna Sandilya
5
th
Semester 
BTech
(Chemical 
Engg
.)
IIT (ISM), Dhanbad
Monsoon Semester (2025 – 2026)

What is Design?
Design is a creative processwhereby
an
innovative
solution
for
a
problem
is
solution
for
a
problem
is
conceived.

What is Design?
A
fashion designer
creates clothes that will
enhance the appeal of an individual.
Image sources:https://www.nift.ac.in/sites/default/files/2025-01/
niftfourty_banner.jpg 
https://jdinstitute.ac.in/wp-content/uploads/2022/0
2/3-How-to-sketch-like-a-fashion-designer.jpg

What is Design?
An interior designer designs the interior parts of a residen
ce
or an office.
Image sources: https://www.designcafe.comhttps://www.avantisystemsusa.com/category/corporate
-offices/

What is Design?
An
automobile  designer
creates  a
car
model
that
will
provide
transportation
and
a certain appeal
to the consumer.The
car’s appeal
may be because of
its
power
,
beauty,
convenience
,
its
power
,
beauty,
convenience
,
economy
,    size,
operability
,    low
maintenance,
uniqueness
,
or
gimmicks.
Image Sources: https://opentextbooks.clemson.edu/st
s1010fidlerfall2021/chapter/the-evolution-of-automo
biles/
https://i.pinimg.com/736x/06/b1/ed/06b1ed781621728c
1f53a05cac25679c.jpg

What is Design?
A  process  engineer  designs  a  plant  to  produce  a  givenchemical.
Sindri fertilizer plant
Image Source: https://images.bhaskarassets.com/thum
b/1200x900/web2images/521/2022/10/07/orig_1_1665098
369.jpg

What is Design?
In each of these instances... 
A new thing is created. A new thing is created. 
OR 
An old thing is created in a 
new way.

Why Design?
Design occurs when a possible answer for apresent or projected
need
or
desire
by people
or industry has been found.
If
a
product
were
not
expected
to
meet
a
need
If
a
product
were
not
expected
to
meet
a
need
or  desire,  there  would  be  no  reason  toproduce it and hence no reason for design.A   company   or   person   is   not   going   tomanufacture something that cannot be sold ata profit.

Needs & Desires for Design
The needs may be basic items like substances withwhich  to  clean  ourselves,  coverings  to  keep  ourbodies warm, dishes upon which to place our food,or cures for our diseases.The
desires
may
be
created
by
the
advertising
firms,
The
desires
may
be
created
by
the
advertising
firms,
as in the case of deodorants and luxury cars.Often  the  need  or  desire  can  be  satisfied  by  asubstance that is presently on the market, but it isprojected that a new product will either do a better
job, cost less, or require less time and effort.

Examples of Needs & Desire
The toothpastes produced before 1960 did a respectable jobof  cleaning  teeth,  but  the  addition  of  fluoride  made  thembetter cavity preventatives, and those toothpastes that ad
ded
fluorides became the best sellers.
Orange
juice
could
be
shipped
in
its
natural
form
to
markets,
Orange
juice
could
be
shipped
in
its
natural
form
to
markets,
but frozen concentrated orange juice occupies one-fourth t
he
volume and costs less to the consumer.
Ready-to-eat breakfast cereals cost more than the same food
s
in their natural state, but they reduce the time spent in thekitchen.
All of these items resulted from research followed 
by design.

Competition among Companies
Most  companies  in  the  consumer  productsindustries  realize  that  their
products  and
processes  must  be  continually  changed  tocompete
with other items that are attempting
to
replace
them
.
to
replace
them
.
Sometimes  almost
a  complete  replacement
occurs within a short time
and a
company may
be forced to close plants
unless an alternate
use of its products is found.

Competition among Companies
In the late 1950s the dairy industry consumed2,20,000 tons per year of petroleum waxes forcoating  paperboard  cartons  and  milk  bottletops
.
This
was
35
%
of
the
total
U
.
S
.
wax
tops
.
This
was
35
%
of
the
total
U
.
S
.
wax
production.
By 1966 this market had dropped
to 14% of its former level (25,000 tons / yr)because
polyethylene and other coatings had
replaced it
!
Research could prevent such a change from 
completely destroying a product’s markets
.

Why Research is required?

To improve the product.

Finding new uses for the product.

Reducing
costs
(Cost
reduction
is
usually

Reducing
costs
(Cost
reduction
is
usually
accomplished  by  improving  the  method  ofproducing the product).
Research  is  also  conducted  to  find  new
substances  to  meet  industry’s  and  people’sneeds and desires.

Types of Research
Basic research
consists of exploratory studies into things for
which an end use cannot be specified.It might include a study to determine the effect of chlorinemolecules on the diffusivity of hydrocarbons or a study of th
e
dissolution  of  single  spheres  in  a  flowing  stream.
The
prospective
dollar
value
of
this
research
cannot
be
estimated
.
prospective
dollar
value
of
this
research
cannot
be
estimated
.
Applied research
has a definite goal.
One  company  might  seek  a  new  agricultural  pesticide  toreplace  DDT.
Another  might  be  testing  a  new  approach  to
manufacturing polystyrene.Most large chemical companies spend around 5% of their totalgross sales on some type of research.

Design Ideas
Research is not the only sourceof new ideas.They may occur to anyone, andmost  companies  encourage  alltheir  employees  to  keep  theireyes open for them.

Design Ideas
A salesman, in talking to a customer, may find thatthis  customer  has  a  given  need  that  he  has  beenunable to satisfy.A  engineer  at  a  convention  may  find  out  thatsomeone
has
difficulty
operating
a
specific
unit
someone
has
difficulty
operating
a
specific
unit
because some needed additive has a deleterious sideeffect.The  engineer  and  salesman  report  the  details  ofthese  findings  in  the  hope  that  some  researcherwithin  their  own  company  may  have  discovered  aproduct that can meet these needs.

Design Ideas
Reading   literature   could   give   some   ideas   forinnovation.Another  source  of  design  ideas  is  the  productionplant (operations).There
the
operators
and
engineers
must
overcome
There
the
operators
and
engineers
must
overcome
the  problems  that  arise  daily  in  producing  anadequate supply of a quality product.Sometimes  accidentally
,
sometimes  by  hard  work
,
new processing conditions are found
that eliminate
the need for some purification steps or that greatlyincrease the plant capacity.

Successful Chemical Engineer
1)  Must have the knowledge and full understanding
of fundamental science and engineering concepts(MEB, TD, CRE, TP, PDC and computer technology)

Successful Chemical Engineer
2) Ought to have the ability to
apply this
knowledge  to  practical  situations
in
order  to
develop  new  or  improved
processes/products
that
will
be
beneficial
to
the
society
.
beneficial
to
the
society
.
3) Should
realize
the
economic
,
environmental
and
ethical
implications
that are involved in such developmentsand proceed accordingly.

Chemical Engineering 
(ChE)
Design
1)  ChE  design  of  new  processes  &  revision  of
existing processes require the use of engineeringprinciples   and   theories   combined   with   apractical realization of the limits imposed by theenvironmental, safety, and health concerns.
2)
Development
of
a
new
process
or
plant
from
2)
Development
of
a
new
process
or
plant
from
concept evaluation to profitable reality is a verycomplex operation.
3)  Design  problems  are  open–ended  and  hence
may  have  many  solutions  that  are
profitable
even when not entirely optimal
, yet meet the
design constraints noted above.

Plant Design
The  term
plant design
includes  all  engineering  aspects
involved in the development of a new, modified, or expandedcommercial process in a chemical or biochemical plant.
The chemical engineer will be:•
Making
economic
evaluations
of
new
processes
•
Making
economic
evaluations
of
new
processes
•
Designing individual pieces of equipment for the proposednew venture
or
•
Developing a plant layout for coordination of the overalloperation
Because of these many design duties, 
often  the chemical engineer is  referred to as a 
design engineer.

Plant Design
A  chemical  engineer  specializing  in  the  economicaspects of the design is often referred to as a
cost
engineer
.
In
many
instances,
the
term
process
engineering
is
In
many
instances,
the
term
process
engineering
is
used  in  connection  with  economic  evaluation  andgeneral economic analyses of industrial processes.The term
process design
refers to the actual design
of the equipment and facilities necessary for carryingout the process.

Plant Design project stages
A
plant-design
project moves to completion through a series
of stages
:
1. Inception2.
Preliminary evaluation of economics and market
3
.
Development
of
data
necessary
for
final
design
3
.
Development
of
data
necessary
for
final
design
4.
Final economic evaluation
5. Detailed engineering design6.
Procurement
7. Erection8.
Startup and trial runs
9. Production

Plant Design project stages
This  brief  outline  suggests  that  the  plant-designproject involves a wide variety of skills.
Among these
are  research,  market  analysis,  design  of  individualpieces
of
equipment,
cost
estimation,
computer
pieces
of
equipment,
cost
estimation,
computer
programming, and plant-location surveys.In  fact,  the  services  of  a  chemical  engineer  areneeded in each step of the outline, either in a centralcreative role, or as a key advisor.

Typical Design Steps for Chemical Process
(1) Recognize a societal or engineering need.
(a) Make a market analysis if a new product will result.
(2) Create one or more potential solutions to meet this need.
(a) Make a literature survey and patent search(b)
Identify
the
preliminary
data
required
.
(b)
Identify
the
preliminary
data
required
.
(3) Undertake preliminary process synthesis of these solut
ions
(a)   Determine   reactions,   separations,   and   possibleoperating conditions(b) Recognize environmental, safety, and health concerns.
(4) Assess profitability of preliminary process or process
es.
If negative, reject process and create new alternatives.

Typical Design Steps for Chemical Process (contd.)
(5) Refine required design data.
(a) Establish property data with appropriate software.(b) Verify experimentally, if necessary, key unknowns inthe process.
(6) Prepare detailed engineering design.
(a)
Develop
base
case
(if
economic
comparison
is
required)
(a)
Develop
base
case
(if
economic
comparison
is
required)
(b) Prepare process flow sheet(c) Integrate and optimize process(d) Check process controllability(e) Size equipment(f) Estimate capital cost
(7) Reassess the economic viability of process.
If  negative,  either  modify  process  or  investigate  otherprocess alternatives.

Typical Design Steps for Chemical Process (contd.)
(8) Review the process again for safety, environmental and
health effects.
(9) Provide a written process design report.(10) Complete the final engineering design.
(a)
Determine
the
equipment
layout
and
specifications
.
(a)
Determine
the
equipment
layout
and
specifications
.
(b) Develop piping and instrumentation diagrams.(c) Prepare bids for the equipment or the process plant.
(11) Procure equipment.(12) Provide assistance in the construction phase.(13) Assist with start–up runs.(14) Initiate production.

Plant Design project - major aspects
1)  Process design development2)  General design considerations3)  Flowsheet synthesis and development4)
Computer
aided
design
4)
Computer
aided
design
5)  Cost estimation6)  Factors affecting profitability of investments7)  Optimum design8)  Practical considerations in design

1. Development of Design Database2. Process Creation3. Process Design
Process Design Development
4. Process Flow Diagrams5. Piping & Instrumentation Diagrams6. Vessel and Piping Layout Isometrics7. Equipment Design and Specifications

1. Health and Safety Hazards2. Loss Prevention3. Environmental Protection
General Design Considerations
4. Plant Location5. Plant Layout6. Plant Operation and Control7. Patent Considerations

1. General Procedure2. Process Information3. Input/Output Structure
Flowsheet Synthesis and Development
4. Functions Diagram5. Operations Diagram6. Process Flowsheet7. Use of Software

References
1.
Peters, M. S., K. D. Timmerhaus, R. E. West, Plant Design an
d Economics for Chemical
Engineers, 5
th
Edition, McGraw-Hill Education (India) Provate Limited, N
ew Delhi,
2011.
2.
Towler, G., R. Sinnott, Chemical Engineering Design – Pri
nciples, Practice, Economics
of Plant and Process Design, Butterworth-Heinemann, Burli
ngton, 2008.
3.
Silla, H., Chemical Process Engineering Design and Econo
mics, Marcel Dekker, Inc.,
New York, 2003.
4.
Simpson , R., S. K. Sastry, Chemical and Bioprocess Engine
ering, Springer, New York,
2013.
5.
Solen, K. A., J. N. Harb, Introduction to Chemical Enginee
ring – Tools for Today and
Tomorrow, 5
th
Edition, Wiley India Private Limited, New Delhi, 2014.  
                ---  
            
        ```
        **Response Received from API:**
        ```
        Here is a complete study guide created from your notes.

### **Concise Summary**

*   **Design** is a creative process to conceive an innovative solution to a problem, either by creating something new or improving something old.
*   The primary driver for **design** is to meet a present or projected **need or desire** of people or industry, with the ultimate goal of generating **profit**.
*   Continuous innovation is crucial due to **competition**, which forces companies to improve products, find new uses, or reduce production costs.
*   **Research** is a key source of innovation and is categorized as **Basic Research** (exploratory, no immediate goal) and **Applied Research** (has a definite, practical goal).
*   Design ideas also originate from other sources like customer feedback (via **sales**), industry conventions, literature, and hands-on experience from the **production plant**.
*   A successful **Chemical Engineer** must combine fundamental knowledge with the ability to apply it practically, while considering **economic, environmental, and ethical** implications.
*   Chemical Engineering design problems are **open-ended**, meaning they can have many profitable solutions that meet design constraints without being perfectly optimal.
*   **Plant Design** encompasses all engineering aspects of a project, whereas **Process Design** specifically refers to the design of the equipment and facilities for the process.
*   A **plant-design project** progresses through distinct stages, starting from **inception** and economic evaluation through to **procurement, erection, and startup**.
*   The design process is an iterative set of steps including process synthesis, profitability analysis, detailed engineering, and critical reviews for safety and environmental impact.
*   Key **General Design Considerations** that must be addressed include health and safety, environmental protection, plant location, and plant layout.
*   Crucial design documents developed during the process include **Process Flow Diagrams (PFDs)** and **Piping & Instrumentation Diagrams (P&IDs)**.

### **3-Hour Study Plan**

**Total Time: 3 Hours (180 Minutes)**

---

**Block 1: Core Concepts & Definitions (45 mins)**

*   (20 mins) Review the fundamental concepts:
    *   What is **Design**? (General vs. Chemical Engineering).
    *   Why is design necessary? (Needs, desires, **profit**, competition).
*   (15 mins) Differentiate between key terms:
    *   **Plant Design** vs. **Process Design**.
    *   **Basic Research** vs. **Applied Research**.
*   (10 mins) List the different sources of design ideas (research, sales, operations, etc.).

---

**Block 2: The Design Process & Stages (60 mins)**

*   (25 mins) Focus on the 9 **Plant Design Project Stages**:
    *   Memorize the sequence from **inception** to **production**.
    *   Understand the purpose of each stage (e.g., preliminary vs. final economic evaluation).
*   (35 mins) Study the detailed 14 **Typical Design Steps for a Chemical Process**:
    *   Trace the flow from recognizing a need to final production.
    *   Pay close attention to the iterative nature of the process (e.g., "Reassess the economic viability").

---

**Break (15 mins)**

---

**Block 3: Practical Considerations & Documentation (40 mins)**

*   (20 mins) Review the **General Design Considerations**:
    *   Health and Safety.
    *   Environmental Protection.
    *   Plant Location and Layout.
*   (20 mins) Understand the main categories of design development and their outputs:
    *   **Process Design Development**.
    *   The role of **Process Flow Diagrams (PFDs)** and **Piping & Instrumentation Diagrams (P&IDs)**.

---

**Block 4: Review and Self-Testing (20 mins)**

*   (10 mins) Quickly read through the **Concise Summary** to reinforce key points.
*   (10 mins) Answer the **Practice Questions** below without looking at the answers to test your understanding.

### **Practice Questions**

**1. According to the notes, what is the fundamental difference between Plant Design and Process Design?**
    A. They are interchangeable terms for the same activities.
    B. **Plant Design** is a broad term covering all engineering aspects, while **Process Design** focuses specifically on the equipment and facilities.
    C. **Plant Design** deals with economics, while **Process Design** deals with safety.
    D. **Process Design** is done first, and **Plant Design** is the final review.

    **Answer: B**

---

**2. Which of the following best describes Applied Research?**
    A. An exploratory study on the diffusivity of hydrocarbons with no specified end use.
    B. Research that occurs accidentally in a production plant.
    C. Research conducted with a definite goal, such as creating a new pesticide to replace DDT.
    D. The initial "inception" stage of a project.

    **Answer: C**

---

**3. In the 9 stages of a plant-design project, what stage immediately follows the "Final economic evaluation"?**
    A. Procurement.
    B. Startup and trial runs.
    C. Development of data necessary for final design.
    D. Detailed engineering design.

    **Answer: D**

---

**4. A successful chemical engineer must realize the implications of their work in which three key areas?**
    A. Marketing, Sales, and Logistics.
    B. **Economic, Environmental, and Ethical.**
    C. Power, Beauty, and Convenience.
    D. Research, Development, and Production.

    **Answer: B**

---

**5. Which of the following is NOT listed in the notes as a primary source of design ideas?**
    A. Feedback from a salesman talking to a customer.
    B. A government mandate requiring a new process.
    C. Problems overcome by operators in the production plant.
    D. Reading scientific and engineering literature.

    **Answer: B**
        ```
        

    