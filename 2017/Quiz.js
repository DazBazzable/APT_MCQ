// JavaScript source code
//This source code has been taken and modified from https://www.sitepoint.com/simple-javascript-quiz/
//This code is being used for testing purposes
function quizFunction() {
    const myQuestions = [
        /*{
            question: "Q.1 A patient who is said to have a poor capacity to verbally describe their own subjective emotional experiences is said to have:",
            answers: {
                a: "Abulia", b: "Affective blunting", c: "Alexithymia", d: "Apathy", e: "Avolition", f: "Melancholia", g: "Parathymia", h: "Witzelsucht"
            },
            correctAnswer: "c"
        },
        {
            question: "Q.2 An eight year old who hits peer repeatedly, and urinates in the corner of the classroom when angry?",
            answers: {
                a: "Autistic Spectrum Disorder", b: "Conduct Disorder", c: "Enuresis", d: "Gender Identity Disorder", e: "Intellectual Disability", f: "Major Depressive Disorder", g: "Oppositional Defiant Disorder", h: "Reactive Attachment Disorder", i: "Rett's Disorder"
            },
            correctAnswer: "b"
        },
        {
            question: "Q.3 A 54 year old woman, diagnosed recently with metastatic breast cancer, is brought to hospital by ambulance after her husband finds her unconscious at home. Upon arrival, she is unreponsive, her breathing is slow and shallow, and her pupils are constricted.",
            answers: {
                a: "Alcohol poisoning", b: "Alcohol poisoning", c: "Alcohol withdrawal", d: "Benzodiazepine overdose", e: "Cannabis abuse", f: "Grand mal seizure", g: "Opioid overdose", h: "Raised intracranial pressure", i: "Stroke", j: "Subarachnoid haemorrhage", k: "Temporal lobe epilepsy"

            },
            correctAnswer: "g"
        },
        {
            question: "Q.4 Wernicke�s dysphasia is an example of the following type of Dysphasia?.",
            answers: {
                a: "Conduction Dysphasia", b:"Developmental Dysphasia",c:"Nominal Dysphasia", d:"Primary Motor Dysphasia", e: "Primary Sensory Dysphasia", f: "Subcortical Auditory Dysphasia", g: "Subcortical Dysphasia", h: "Subcortical Motor Dysphasia", i:"Subcortical Sensory Dysphasia"
            },
            correctAnswer: "e"
      }
	  */
		{question: "For the following question, please select the MOST ACCURATE answer.<br/><br/>Q.1   A patient who is said to have a poor capacity to verbally describe their own subjective emotional experiences is said to have:",
		answers: { a: "Abulia", b: "Affective blunting", c: "Alexithymia", d: "Apathy", e: "Avolition", f: "Melancholia", g: "Parathymia", h: "Witzelsucht" },
		correctAnswer: "c"},
		{question: "For the following patient, please select the MOST LIKELY diagnosis.<br/><br/>Q.2   An  eight year old who hits peers repeatedly, and urinates in the corner of the classroom when angry.",
		answers: { a: "Autistic Spectrum Disorder", b: "Conduct Disorder", c: "Enuresis", d: "Gender Identity Disorder", e: "Intellectual Disability", f: "Major Depressive Disorder", g: "Oppositional Defiant Disorder", h: "Reactive Attachment Disorder", i: "Rett's Disorder" },
		correctAnswer: "g"},
		{question: "For the following patient, please select the MOST LIKELY diagnosis.<br/><br/>Q.3   A 54 year old woman, diagnosed recently with metastatic breast cancer, is brought to hospital by ambulance after her husband finds her unconscious at home. Upon arrival, she is unresponsive, her breathing is slow and shallow, and her pupils are constricted.",
		answers: { a: "Alcohol poisoning", b: "Alcohol withdrawal", c: "Benzodiazepine overdose", d: "Cannabis abuse", e: "Grand mal seizure", f: "Opioid overdose", g: "Raised intracranial pressure", h: "Stroke", i: "Subarachnoid haemorrhage", j: "Temporal lobe epilepsy" },
		correctAnswer: "f"},
		{question: "For the following question, please select the MOST ACCURATE option.<br/><br/>Q.4   Wernicke's dysphasia is an example of the following type of Dysphasia?",
		answers: { a: "Conduction Dysphasia", b: "Developmental Dysphasia", c: "Nominal Dysphasia", d: "Primary Motor Dysphasia", e: "Primary Sensory Dysphasia", f: "Subcortical Auditory Dysphasia", g: "Subcortical Dysphasia", h: "Subcortical Motor Dysphasia", i: "Subcortical Sensory Dysphasia" },
		correctAnswer: "e"},
		{question: "For the following question, please select the MOST ACCURATE answer.<br/><br/>Q.5   Which  of the following figures in psychiatry introduced the term Schizophrenia in 1908?",
		answers: { a: "Donald Winnicott", b: "Emil Kraeplin", c: "Erving Goffman ", d: "Eugene Bleuler", e: "Karl Menninger", f: "Karl Popper", g: "Paul Janssen", h: "Phillipe Pinel", i: "Thomas Szaz ", j: "Ugo Cerletti" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the MOST APPROPRIATE intervention.<br/><br/>Q.6   A 14-year-old high school student Sandy is brought for assessment by her parents, who describe conflict at home between Sandy and the rest of the family. Her parents are divided on how to approach the situation. Sandy has a 6 month history of restricting eating, resulting in weight loss. Currently her BMI is on the third percentile for age. Which psychological treatment would you recommend?",
		answers: { a: "Adolescent Mentalization-Based Integrative Treatment (AMBIT)", b: "Cognitive Behavioral Therapy (CBT)", c: "Cognitive behavioral therapy enhanced version for eating disorders (CBT-E) ", d: "Family Based Therapy ", e: "Family Connections ", f: "Interpersonal Therapy (IPT)", g: "Parent Child Interaction Therapy (PCIT)", h: "Parent Management Training ", i: "Strategic Family Therapy", j: "Systemic Family Therapy ", k: "Tough Love" },
		correctAnswer: "d"},
		{question: "For the following question, please select the MOST ACCURATE answer.<br/><br/>Q.7  In DSM-5, the diagnosis of a Persistent Depressive Disorder (previously known as dysthymia) requires the presence of depressive symptoms on most days for a period of at least:",
		answers: { a: "6 months", b: "12 months", c: "18 months", d: "24 months", e: "30 months", f: "36 months", g: "48 months", h: "60 months" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the MOST LIKELY diagnosis.<br/><br/>Q.8   What is the most likely diagnosis for a 82 year old man on no medication presenting with a ten year history of emerging but fluctuating cognitive decline which is accompanied by both extrapyramidal features including parkinsonism, and psychosis including visual hallucinations of a large bull coming through his room.",
		answers: { a: "Alzheimer's Dementia", b: "Huntington's disease", c: "Lewy body Dementia", d: "Motor neurone disease", e: "Multi-infarct Dementia", f: "Parkinson's disease", g: "Pick's Disease", h: "Progressive supranuclear palsy", i: "Wernicke's encephalopathy", j: "Wilson's disease" },
		correctAnswer: "c"},
		{question: "For the following patient, please select the MOST LIKELY disorder.<br/><br/>Q.9   Which condition is characterised by the triad of ophthalmoplegia, ataxia, and confusion?",
		answers: { a: "Delirium tremens", b: "Guillain-Barré syndrome", c: "Hepatic encephalopathy", d: "Huntington's disease", e: "Marchiafava-Bignami disease", f: "Motor neurone disease", g: "Parkinson's disease", h: "Progressive supranuclear palsy", i: "Wernicke's encephalopathy", j: "Wilson's disease" },
		correctAnswer: "i"},
		{question: "For the following patient, please select the MOST APPROPRIATE intervention.<br/><br/>Q.10   Steven is a 10 year old who was born a female called Sarah, and who has insisted on being called Steven and presented as male from preschool.  There are no comorbid disorders. The family have been seen previously and are comfortable with his gender identification but are concerned about his likely distress regarding the onset of puberty.",
		answers: { a: "Aripiprazole", b: "Dialectic Behavioural Therapy", c: "Escitalopram", d: "Maudsley Family Therapy", e: "No follow up from MHS", f: "Referral to endocrinologist for GNRH agonist", g: "Referral to endocrinologist for GNRH agonist and secondary sex hormones", h: "Structural Family Therapy", i: "Supportive Psychotherapy" },
		correctAnswer: "f"},
		{question: "For the following patient, please select the MOST APPROPRIATE intervention to improve the parents’ wellbeing.<br/><br/>Q.11   A 22 year old woman has a three year history of alcohol abuse, a series of turbulent sexual relationships, and recurrent self harm with three serious recent overdoses requiring admission to the high dependency unit. Her parents are feeling stressed and burnt-out.",
		answers: { a: "Cognitive behavioral therapy (CBT)", b: "Family based therapy ", c: "Family connections ", d: "Interpersonal therapy (IPT)", e: "Marital therapy", f: "Mentalization-based treatment (MBT)", g: "Parent child interaction therapy (PCIT)", h: "Reflective Family therapy", i: "Strategic Family therapy", j: "Systemic family therapy ", k: "Tough love" },
		correctAnswer: "c"},
		{question: "For the following adverse effect, please choose the MOST APPROPRIATE rating scale.<br/><br/>Q.12    Assessment of tardive dyskinesia in a patient on antipsychotic medication.",
		answers: { a: "AIMS", b: "BPRS", c: "GAF", d: "HAMD", e: "MADRS", f: "PANSS", g: "SANS", h: "SAPS", i: "SCID" },
		correctAnswer: "a"},
		{question: "From the following options, please choose the MOST APPROPRIATE answer.<br/><br/>Q.13    Which of the following is NOT a common clinical feature of rapid SSRI discontinuation.",
		answers: { a: "Anxiety", b: "Crying spells", c: "Electric shock-like sensations", d: "Hypersomnolence", e: "Lethargy", f: "Nausea", g: "Paraesthesiae", h: "Tremor" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the MOST LIKELY diagnosis.<br/><br/>Q.14   A 19 year old male presents with social withdrawal, loss of employment and difficulty maintaining his hygiene over the last 6 months.  This is accompanied by unusual spiritual beliefs.",
		answers: { a: "Delusional Disorder", b: "Drug-induced psychosis", c: "Major Depressive Disorder with Psychosis", d: "Manic episode with Psychosis", e: "Pre-psychotic stage", f: "Psychosis secondary to a General Medical Condition", g: "Schizoaffective Disorder", h: "Schizophrenia", i: "Schizophreniform Disorder" },
		correctAnswer: "e"},
		{question: "For the following patient, please select the MOST LIKELY diagnosis.<br/><br/>Q.15    A 76 year old woman presents with cognitive impairment that has progressed after initially seeking medical attention for a presumed Transient Ischaemic Episode. Parkinsonian features are evident although they seem to have appeared abruptly and do not seem progressive at this stage. Her regular medication includes enalapril and simvastatin.",
		answers: { a: "Alzheimer's Dementia", b: "Binswanger's disease", c: "Huntington's disease", d: "Lewy body Dementia", e: "Motor neurone disease", f: "Multi-infarct Dementia", g: "Parkinson's disease", h: "Pick's Disease", i: "Progressive supranuclear palsy", j: "Wernicke's encephalopathy" },
		correctAnswer: "f"},
		{question: "For the following question, please choose the MOST APPROPRIATE answer.<br/><br/>Q.16    Which psychological therapy for substance use disorders most focuses on 'expressing empathy, developing discrepancy, avoiding argument, supporting self-efficacy and rolling with resistance.'",
		answers: { a: "Alcoholics Anonymous 12 Step Recovery Programme ", b: "Cognitive Analytic Therapy", c: "Cognitive Behaviour Therapy", d: "Contingency Management", e: "Dialectical Behaviour Therapy", f: "Eye Movement Desensitisation and Reprocessing (EMDR)", g: "Interpersonal Therapy ", h: "Motivational Interviewing", i: "Person-Centred Therapy", j: "Psychodynamic Psychotherapy" },
		correctAnswer: "h"},
		{question: "For the following scenario, please select the MOST APPROPRIATE intervention.<br/><br/>Q.17    Adrian is a 3 year old boy referred by his kindergarten due to concerns about his negative interactions with other children, who he frequently calls 'dumb' and 'useless'.  In the assessment his mother repeatedly comments negatively on his play.",
		answers: { a: "Atomoxetine", b: "Dyadic therapy such as 'Watch Wait Wonder'", c: "Lithium", d: "Maudsley Family Therapy", e: "Methylphenidate SR", f: "Parent Training e.g. Triple P", g: "Play Therapy with child", h: "Psychodynamic Psychotherapy for the mother", i: "Systemic Family Therapy" },
		correctAnswer: "b"},
		{question: "For the following question, please choose the MOST ACCURATE  answer.<br/><br/>Q.18    Which EEG feature is seen in the EEG of a normal awake adult who is not moving?",
		answers: { a: "Alpha rhythm", b: "Beta activity", c: "Delta activity", d: "High voltage complex elements", e: "K complexes", f: "Lambda waves", g: "Spike discharges", h: "Wave and spike pattern" },
		correctAnswer: "a"},
		{question: "For the following patient, please choose the MOST APPROPRIATE adjustment to his pharmacological treatment.<br/><br/>Q.19    A 14-year-old with attention deficit hyperactivity disorder (ADHD), has responded well to stimulant medication for the last 5 years. At the most recent review his complaint is that despite taking the last stimulant dose at midday, he has difficulty falling asleep and difficulty waking in the morning, so that he is often late for school and feels tired during the day.",
		answers: { a: "Add an additional stimulant dose later in the day", b: "Low dose amitriptyline (in addition to existing stimulant dose)", c: "Low dose quetiapine (in addition to existing stimulant dose)", d: "Melatonin (in addition to existing stimulant dose)", e: "Sertraline (in addition to existing stimulant dose)", f: "Stop stimulant and switch to atomoxetine ", g: "Stop stimulant and switch to extended-release clonidine", h: "Temazepam (in addition to existing stimulant dose)", i: "Venlafaxine (in addition to existing stimulant dose)", j: "Zopiclone (in addition to the existing stimulant dose)" },
		correctAnswer: "d"},
		{question: "For the following question, please select the MOST ACCURATE answer.<br/><br/>Q.20    Who was the neurologist who first used ECT to treat Schizophrenia?",
		answers: { a: "Donald Winnicott", b: "Emil Kraeplin", c: "Erving Goffman ", d: "Eugene Bleuler", e: "Karl Menninger", f: "Karl Popper", g: "Paul Janssen", h: "Phillipe Pinel", i: "Thomas Szaz ", j: "Ugo Cerletti" },
		correctAnswer: "j"},
		{question: "For the following question, please select the MOST ACCURATE answer.<br/><br/>Q.21    Which of the following medications is least likely to lead to lithium toxicity in a patient on established lithium therapy?",
		answers: { a: "Captopril", b: "Cilazapril", c: "Diclofenac ", d: "Enalopril", e: "Furosemide", f: "Ibuprofen", g: "Quinapril" },
		correctAnswer: "e"},
		{question: "For the following patient, please select the MOST APPROPRIATE  medication.<br/><br/>Q.22   A 44 year old man with a long history of alcohol dependence wishes to discuss medication to help manage cravings. He is drinking alcohol heavily at present and does not want to stop. Instead, he would like to be able to reduce his consumption of alcohol. There is a past history of delirium tremens and of alcohol withdrawal seizures.",
		answers: { a: "Buprenorphine", b: "Bupropion", c: "Chlordiazepoxide", d: "Chlormethiazole", e: "Diazepam", f: "Disulfiram", g: "Fluoxetine", h: "Haloperidol", i: "Methadone", j: "Naltrexone", k: "Nicotine Patches", l: "Quetiapine" },
		correctAnswer: "j"},
		{question: "For the following patient, please select the MOST LIKELY diagnosis.<br/><br/>Q.23    A 12 year old boy presents to the Emergency Department (ED) describing a 'goblin attack' and creatures coming out of the wall.  The mental health nurse in the ED reports that his mother is well known to local alcohol and drug services. His mother says he was fine yesterday.",
		answers: { a: "Alcohol dependence", b: "Autistic Spectrum Disorder", c: "Bipolar Disorder Prodrome", d: "Conduct Disorder", e: "Fetishism", f: "Major Depressive Episode", g: "Munchausen's by proxy", h: "No diagnosis", i: "Parasomnia", j: "Psychotic disorder NOS", k: "Synthetic cannabinoid misuse" },
		correctAnswer: "k"},
		{question: "For the following situation, please choose the MOST APPROPRIATE rating scale.<br/><br/>Q.24    A clinician wants to monitor overall symptoms in a patient with schizophrenia.",
		answers: { a: "AIMS", b: "BPRS", c: "GAF", d: "HAMD", e: "MADRS", f: "PANSS", g: "SANS", h: "SAPS", i: "SCID" },
		correctAnswer: "b"},
		{question: "For the following situation, please select the MOST SPECIFIC bedside test.<br/><br/>Q.25    Measuring attention in a delirious patient.",
		answers: { a: "Draw a clockface", b: "Name of the Prime Minister", c: "Naming 4 legged animals", d: "Naming objects", e: "Orientation to person, place and time", f: "Recite the months of the year backwards", g: "Remembering 3 words", h: "Serial 7s", i: "Similarities", j: "Spell 'WORLD' backwards" },
		correctAnswer: "f"},
		{question: "For the following question, please select the MOST ACCURATE answer.<br/><br/>Q.26    STAR*D was one of the most influential studies of pharmacotherapy for depression. In Stage 1 of this study, what percentage of depressed patients achieved remission after 14 weeks of treatment with citalopram (mean dose 41.8mg/d).",
		answers: { a: "7%", b: "14%", c: "21%", d: "28%", e: "35%", f: "42%", g: "49%", h: "56%", i: "63%", j: "70%" },
		correctAnswer: "d"},
		{question: "For the following patient, which rating scale would be MOST HELPFUL to assist with diagnostic clarification?<br/><br/>Q.27    You are asked to assess 12 year old John, who has restricted food group intake; he eats only rice, potatoes, chips and tomato sauce. When presented with other foods, he reports having tummy pains, breathing fast, worries that he won't manage, and typically he vomits. The problem first began at age 4, after his father left to live overseas. His mother doesn't like to see her son upset but is worried that he isn't eating properly.",
		answers: { a: "Beck Anxiety Inventory (BAI)", b: "Beck Youth Inventory (BYI- 2)", c: "Depression Anxiety Stress Scale (DASS)", d: "Eating Disorder Attitudes Test ( EAT- 26)", e: "Eating Disorder Examination Questionnaire (EDE-Q)", f: "Multidimensional Anxiety Scale for Children (MASC 2) ", g: "Revised Conners' Teacher and Parent Rating Scale (CPRS-R) ", h: "The Strengths and Difficulties Questionnaire (SDQ)", i: "The Brief Psychiatric Rating Scale for Children (BPRS-C)", j: "The Child Behavior Checklist (CBCL)" },
		correctAnswer: "f"},
		{question: "Which stage of change is BEST CHARACTERISED by the patient saying the following:<br/><br/>Q.28    'I want to know how to give up.'",
		answers: { a: "Action Stage", b: "Contemplative Stage", c: "Denial", d: "Maintenance Stage", e: "Pre-contemplative Stage", f: "Preparation Stage", g: "Relapse Prevention Stage" },
		correctAnswer: "a"},
		{question: "For the following patient, please select the MOST APPROPRIATE  intervention.<br/><br/>Q.29    David is a 17 year old boy with a two year history of cutting more than once a week to deal with his emptiness.  He has had trials of sertraline and fluoxetine with little effect.  He has made three attempts to overdose in the context of losses of friendships.  He now wonders if he would be more comfortable as a female.",
		answers: { a: "Aripiprazole", b: "Dialectic Behavioural Therapy", c: "Escitalopram", d: "Maudsley Family Therapy", e: "No follow up from MHS", f: "Referral to endocrinologist for GNRH agonist", g: "Referral to endocrinologist for GNRH agonist and secondary sex hormones", h: "Structural Family Therapy", i: "Supportive Psychotherapy" },
		correctAnswer: "b"},
		{question: "For the following patient, please select the MOST APPROPRIATE diagnosis.<br/><br/>Q.30    A 38 year old woman presents with a 3 month history of low mood, increased anxiety, poor sleep and weight loss, accompanied by the belief that she caused a recent natural disaster.",
		answers: { a: "Delusional Disorder", b: "Drug-induced psychosis", c: "Major Depressive Disorder with atypical features", d: "Major Depressive Disorder with mood congruent psychotic features", e: "Major Depressive Disorder with mood incongruent psychotic features", f: "Mixed episode with Psychosis", g: "Psychosis secondary to a General Medical Condition", h: "Schizoaffective Disorder", i: "Schizophrenia", j: "Schizophreniform Disorder" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the MOST APPROPRIATE  diagnosis.<br/><br/>Q.31    The patient talks in a slow, sparse style that is hesitant, with disturbed rhythm and inflection.",
		answers: { a: "Conduction Dysphasia", b: "Developmental Dysphasia", c: "Nominal Dysphasia", d: "Primary Motor Dysphasia", e: "Primary Sensory Dysphasia", f: "Subcortical Auditory Dysphasia", g: "Subcortical Dysphasia", h: "Subcortical Motor Dysphasia", i: "Subcortical Sensory Dysphasia" },
		correctAnswer: "d"},
		{question: "For the following question, please select the MOST ACCURATE answer.<br/><br/>Q.32    In switching a patient from tranylcypromine to fluoxetine, the correct advice would be:",
		answers: { a: "Cautiously cross taper with fluoxetine 10mg/day", b: "Cautiously cross taper with fluoxetine 20mg/day", c: "Taper and stop, then start fluoxetine at 10mg/day", d: "Taper and stop, then start fluoxetine at 20mg/day", e: "Taper and stop, then wait 2 weeks before starting fluoxetine", f: "Taper and stop, then wait 5-6 weeks before starting fluoxetine" },
		correctAnswer: "e"},
		{question: "For the following patient, please select the MOST APPROPRIATE  psychological treatment.<br/><br/>Q.33    Sarah, a 28 year old woman, presents with mildly depressed mood with anxiety, in the context of ongoing conflict with her husband who works long hours and has said he can't attend a joint appointment. Eight months ago Sarah had a third trimester stillbirth. She says her husband would like them to try again for a baby at some stage, but she doesn't feel she could face another pregnancy.",
		answers: { a: "Acceptance and commitment therapy (ACT)", b: "Cognitive analytic therapy (CAT)", c: "Cognitive behavioral therapy (CBT)", d: "Interpersonal therapy (IPT)", e: "Marital therapy ", f: "Mentalization-based treatment (MBT)", g: "Mindfulness training ", h: "Psychodynamic psychotherapy ", i: "Rapid eye movement desensitisation (EMDR)", j: "Rational emotive behavior therapy (REBT)", k: "Relaxation training" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.34    A 21 year old man admitted to the acute psychiatric unit with a psychotic relapse develops lethargy and fatigue, sleeping for much of the day. He has increased appetite and complains of unpleasant dreams.",
		answers: { a: "Alcohol poisoning", b: "Alcohol Withdrawal", c: "Benzodiazepine overdose", d: "Cannabis abuse", e: "Grand mal seizures", f: "Opioid withdrawal", g: "Raised intracranial pressure", h: "Stimulant withdrawal", i: "Temporal lobe epilepsy" },
		correctAnswer: "h"},
		{question: "For the following clinical scenario, please select the MOST APPROPRIATE  intervention.<br/><br/>Q.35    Mary is a 9 year old girl who refuses to go to bed before 10pm, and often attends school with body odour as she will not shower at home.  When told to do so by her teacher, she will shower on the school premises.",
		answers: { a: "Atomoxetine", b: "Dyadic therapy such as 'Watch Wait Wonder'", c: "Lithium", d: "Maudsley Family Therapy", e: "Methylphenidate SR", f: "Parent Training e.g. Triple P", g: "Play Therapy with child", h: "Psychodynamic Psychotherapy for the mother", i: "Systemic Family Therapy" },
		correctAnswer: "f"},
		{question: "For the following description, please select the MOST APPROPRIATE  phenomenological term.<br/><br/>Q.36    A 54 year old man reports seeing his hand move in front of him without his own effort.",
		answers: { a: "Auditory Hallucinations", b: "Clanging", c: "Command Hallucinations", d: "Delusions of Control", e: "Delusions of Persecution", f: "Delusions of Reference", g: "Derailment", h: "Neologisms", i: "Somatic Hallucinations", j: "Tactile Hallucinations", k: "Tangentiality", l: "Thought Blocking", m: "Thought Disorder" },
		correctAnswer: "d"},
		{question: "For the following question, please select the MOST ACCURATE answer.<br/><br/>Q.37    Which of the following is a focussed test of frontal lobe function?",
		answers: { a: "Boston Naming Test", b: "Clifton Assessment Schedule", c: "Draw a Person test", d: "Mini-Mental State Examination", e: "National Adult Reading Test ", f: "Raven's Progressive Matrices", g: "Rorschach Test", h: "Trail Making Test", i: "Wechsler Adult Intelligence Scale", j: "Wechsler Memory Scale" },
		correctAnswer: "h"},
		{question: "For the following question, please select the MOST ACCURATE answer.<br/><br/>Q.38    Which complementary therapy has NOT been shown to be helpful in the treatment of depression, either alone or as an adjunct to antidepressant medication?",
		answers: { a: "Eicosapentaenoic acid", b: "L-Methylfolate", c: "Multivitamins", d: "N-acetyl-cysteine", e: "S-adenosyl-methionine", f: "St John's Wort", g: "Zinc" },
		correctAnswer: "c"},
		{question: "For the following patient, please select the MOST APPROPRIATE  psychosocial intervention.<br/><br/>Q.39    Following a traumatic birth, a mother of a healthy 9 month old baby is anxious that she is ‘doing everything wrong' and that she is ‘not a good mother'. She reports not enjoying the baby or having loving feelings as she'd expected she would.",
		answers: { a: "Circle of Security", b: "Cognitive behavioral therapy (CBT)", c: "Family based therapy ", d: "Family connections ", e: "Interpersonal therapy (IPT)", f: "Mentalization-based treatment (MBT)", g: "Parent behavioral management training ", h: "Parent child interaction therapy (PCIT)", i: "Strategic family therapy", j: "Systemic family therapy ", k: "Watch Wait and Wonder" },
		correctAnswer: "a"},
		{question: "For the following clinical situation, please select the MOST APPROPRIATE  rating scale.<br/><br/>Q.40    Assessment of lifetime symptoms of Alcohol Dependence with a focus on late-stage symptoms.",
		answers: { a: "Addiction Research Foundation Clinical Institute Withdrawal Assessment – Alcohol (CIWS-Ar)", b: "Alcohol Dependence Scale", c: "Alcohol Use Disorders Identification Test (Audit)", d: "CAGE questionnaire", e: "Hamilton Depression Rating Scale (HAMD-17)", f: "Michigan Alcoholism Screening Test (MAST)", g: "Paddington Alcohol Test", h: "Severity of Alcohol Dependence Questionnaire (SADQ-C)", i: "Severity of Dependence Scale (SDS)", j: "Severity of Opiate Dependence Questionnaire (SADQ)" },
		correctAnswer: "f"},
		{question: "For the following patient, please select the MOST LIKELY  answer.<br/><br/>Q.41   A 15 year old boy uses his iPad in his room during the evening at home and won't come out to the family area. He attends school, where he's getting good grades and has a circle of friends, and he says his mood is good.",
		answers: { a: "Attention Deficit Disorder", b: "Autistic Spectrum Disorder", c: "Bipolar Disorder Prodrome", d: "Conduct Disorder", e: "Major Depressive Episode", f: "No diagnosis", g: "Obsessive Compulsive Disorder", h: "Oppositional Defiant Disorder", i: "Parasomnia", j: "Psychotic Disorder NOS", k: "Synthetic Cannabinoid Misuse" },
		correctAnswer: "f"},
		{question: "For the following description, please select the MOST APPROPRIATE  type of movement disorder.<br/><br/>Q.42    Sustained involuntary spasm of the skeletal muscles.",
		answers: { a: "Acute Dystonia", b: "Akathisia", c: "Chronic Dystonia", d: "Medication Induced Tremor", e: "Neuroleptic Malignant Syndrome", f: "Oculogyric Crises", g: "Pseudo-parkinsonism", h: "Restless Leg Syndrome", i: "Tardive Dyskinesia", j: "Torticollis" },
		correctAnswer: "c"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.43    The main issue relevant to the outcome of mental disorders which is assessed by the Camberwell Family Interview (Vaughn and Leff, 1976).",
		answers: { a: "Expressed emotion", b: "Global functioning", c: "Medication adherence", d: "Mental Health literacy", e: "Problem solving skills", f: "Psychological mindedness", g: "Relapse prevention techniques" },
		correctAnswer: "a"},
		{question: "For the following situation in a therapy session, please select the therapist response which would be MOST LIKELY to facilitate mentalizing.<br/><br/>Q.44    The client becomes visibly anxious after a comment by the therapist.",
		answers: { a: "'Did you notice how this is a good example of what we were talking about last session?'", b: "'Do you think maybe you're feeling anxious to avoid deep-seated guilty feelings?'", c: "'How do you usually cope when you're feeling distressed – What works for you?'", d: "'I'm wondering what you are feeling right now?'", e: "'I think you may have misunderstood what I was trying to say.'", f: "'I'm sorry that you're upset.'", g: "'It's not surprising that you'd feel anxious and upset.'", h: "'Can you remember a time in your childhood when you felt in a similar way?'" },
		correctAnswer: "d"},
		{question: "For the following description, please select the MOST APPROPRIATE  diagnosis.<br/><br/>Q.45    A condition characterised by formication and visual hallucinations.",
		answers: { a: "Delirium tremens", b: "Guillain-Barré syndrome", c: "Hepatic encephalopathy", d: "Huntington's disease", e: "Marchiafava-Bignami disease", f: "Motor neurone disease", g: "Parkinson's disease", h: "Progressive supranuclear palsy", i: "Wernicke's encephalopathy", j: "Wilson's disease" },
		correctAnswer: "a"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.46    A 16 year old youth with a limited vocabulary is arrested for setting a fire alarm off in a department store, allowing a group of teens to shoplift during the evacuation.  He reports his 'new friends' asked him to do it to join their gang, and appears unaware that they planned the theft.",
		answers: { a: "Autistic Spectrum Disorder", b: "Conduct Disorder", c: "Enuresis", d: "Gender Identity Disorder", e: "Intellectual Disability", f: "Major Depressive Disorder", g: "Oppositional Defiant Disorder", h: "Reactive Attachment Disorder", i: "Rett's Disorder" },
		correctAnswer: "e"},
		{question: "For the following patient, please select the MOST APPROPRIATE  treatment.<br/><br/>Q.47    Mrs Davidson, who has a known diagnosis of bipolar disorder,  believes her brain has rotted and is refusing to eat or drink.",
		answers: { a: "Clozapine", b: "Electroconvulsive therapy", c: "Fluoxetine", d: "Imipramine", e: "Intramuscular Haloperidol", f: "Intramuscular Lorazepam", g: "Lithium Carbonate", h: "Olanzapine wafers", i: "Quetiapine", j: "Risperidone oral solution", k: "Sodium Valproate" },
		correctAnswer: "b"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.48    70 year old woman is admitted after a fall, in a confused state. She was commenced on an SSRI two months earlier, for depression. Investigations show her to have low serum sodium and normal urine osmolality.",
		answers: { a: "Benign hydrocephalus", b: "Cerebrovascular malformation", c: "Cryptococcal meningitis", d: "Hyperparathyroidism", e: "Hypothyroidism", f: "Inappropriate ADH syndrome", g: "Neuroleptic malignant syndrome", h: "Neuropsychiatric systemic lupus erythematosus (SLE) ", i: "Neurosyphilis", j: "Normal pressure hydrocephalus", k: "Water intoxication", l: "Wernicke's encephalopathy" },
		correctAnswer: "f"},
		{question: "For the following patient group, which of the listed psychotropics should be MOST AVOIDED.<br/><br/>Q.49    Women of childbearing age.",
		answers: { a: "Carbamazepine", b: "Lamotrigine", c: "Lithium", d: "Lorazepam", e: "Quetiapine", f: "Sodium valproate", g: "Venlafaxine" },
		correctAnswer: "f"},
		{question: "For the following description, please select the MOST APPROPRIATE  phenomenological term.<br/><br/>Q.50    While being interviewed, a 22 year old woman stops for several seconds mid-sentence.",
		answers: { a: "Auditory Hallucinations", b: "Clanging", c: "Command Hallucinations", d: "Delusions of Control", e: "Delusions of Persecution", f: "Delusions of Reference", g: "Derailment", h: "Neologisms", i: "Somatic Hallucinations", j: "Tactile Hallucinations", k: "Tangentiality", l: "Thought Blocking", m: "Thought Disorder" },
		correctAnswer: "l"},
		{question: "For the following statement please select the LEAST ACCURATE  answer listed.<br/><br/>Q.51    Regarding the classification of personality and personality disorders:",
		answers: { a: "A categorical approach allows binary decision making, which is useful to guide treatment ", b: "A categorical system does not allow for the weighing of criteria that differ in their diagnostic importance ", c: "A dimensional system encourages representation of individuality because of its comprehensive nature", d: "A dimensional system is a better way of measuring more subtle aspects of personality ", e: "A dimensional system permits detailed description of specific components of psychopathology that facilitate treatment planning", f: "A dimensional system permits graded description of psychopathology", g: "In a categorical system  the categories and criteria are not empirically based and are often inconsistent with findings from cluster and factor analyses", h: "In a categorical system  there is  excessive comorbidity with Axis I and Axis II diagnoses" },
		correctAnswer: "a"},
		{question: "For the following patient, please select the state of addiction that BEST FITS the clinical situation described.<br/><br/>Q.52   A 45 year woman spends her afternoons and evenings at home drinking. She sleeps late nursing her hangover and after an eye-opener in the morning she spends the morning begging or scrounging for money to buy alcohol.",
		answers: { a: "Abstinence", b: "Abstinence in a controlled setting", c: "Abstinence in sustained remission", d: "Abuse", e: "Lapse", f: "Mild Substance Use Disorder", g: "Relapse", h: "Salience", i: "Severe Substance Use Disorder", j: "Tolerance" },
		correctAnswer: "h"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.53    A 7 year old who has been in several foster homes tries to sit on the interviewer's knee and cuddle him at the first assessment.",
		answers: { a: "Autistic Spectrum Disorder", b: "Conduct Disorder", c: "Enuresis", d: "Gender Identity Disorder", e: "Intellectual Disability", f: "Major Depressive Disorder", g: "Oppositional Defiant Disorder", h: "Reactive Attachment Disorder", i: "Rett's Disorder" },
		correctAnswer: "h"},
		{question: "For the following question, please select the MOST ACCURATE option.<br/><br/>Q.54    Atypical antipsychotics with demonstrated efficacy when used as the only medication (monotherapy) for bipolar depression.",
		answers: { a: "Olanzapine,  Quetiapine", b: "Olanzapine,  Ziprasidone", c: "Quetiapine,  Risperidone", d: "Quetiapine,  Ziprasidone", e: "Risperidone, Olanzapine", f: "Risperidone,  Ziprasidone" },
		correctAnswer: "a"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.55    Which of the following figures in psychiatry first synthesized haloperidol?",
		answers: { a: "Donald Winnicott", b: "Emil Kraeplin", c: "Erving Goffman ", d: "Eugene Bleuler", e: "Karl Menninger", f: "Paul Charpentier", g: "Paul Janssen", h: "Phillipe Pinel ", i: "Pierre Deniker", j: "Ugo Cerletti" },
		correctAnswer: "g"},
		{question: "For the following diagnosis, please select the LEAST ACCURATE  answer.<br/><br/>Q.56    Symptoms of Paranoid Personality Disorder as described by the DSM V:",
		answers: { a: "Suspicions that others are using, lying to, or harming them, without enough evidence for this", b: "Doubts about the loyalty and trustworthiness of others", c: "Emotionally cold and distant, tending to remain isolated from others", d: "Holding grudges", e: "Interpretation of  benign remarks as derogatory or threatening", f: "Jealousy and suspiciousness, without due cause, that intimate partners are being unfaithful", g: "Retaliation in belief that their reputation or character are being assailed by others", h: "Secretiveness because of concerns that their confidence will be betrayed" },
		correctAnswer: "c"},
		{question: "For the following patient, please select the MOST LIKELY  cause of memory disturbance.<br/><br/>Q.57    The car accident happened at 5 pm, but although Bill recalls waking up in hospital the next morning, the day of the accident is still a complete blank.",
		answers: { a: "Anterograde amnesia", b: "Dissociation", c: "Dissociative identity disorder ", d: "Factitious amnesia", e: "Fugue state", f: "Psychogenic amnesia ", g: "Retrograde amnesia", h: "Transient global amnesia", i: "Transient ischaemic attack" },
		correctAnswer: "g"},
		{question: "For the following description, please select the MOST APPROPRIATE  phenomenological term.<br/><br/>Q.58    The family of a 21 year old man contact mental health services, saying that they can't make sense of what he's saying.",
		answers: { a: "Auditory Hallucinations", b: "Clanging", c: "Command Hallucinations", d: "Delusions of Control", e: "Delusions of Persecution", f: "Delusions of Reference", g: "Loss of Goal", h: "Neologisms", i: "Somatic Hallucinations", j: "Tactile Hallucinations", k: "Tangentiality", l: "Thought Blocking", m: "Thought Disorder" },
		correctAnswer: "m"},
		{question: "For the following patient, please select the MOST APPROPRIATE  intervention.<br/><br/>Q.59     Andrea is a 14 year girl who started profound food restriction 2 months after her first menstrual period.  She has lost 10 kg over the last five months and has not had a period in the last five months.  She is underweight but not currently physically compromised.  She says that she doesn't want to have any more periods or breast development.",
		answers: { a: "Aripiprazole", b: "Dialectic Behavioural Therapy", c: "Escitalopram", d: "Maudsley Family Therapy", e: "No follow up from MHS", f: "Referral to endocrinologist for GNRH agonist", g: "Referral to endocrinologist for GNRH agonist and secondary sex hormones", h: "Structural Family Therapy", i: "Supportive Psychotherapy" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the MOST APPROPRIATE   psychological intervention.<br/><br/>Q.60    A 20-year-old university student is afraid that he may embarrass himself in public by losing control of his bladder. This began 3 months ago when he noticed a urine spot on his jeans after going to the toilet. He has been increasingly avoiding other people and spending much of his time alone playing computer games in his room.",
		answers: { a: "Acceptance and commitment therapy (ACT)", b: "Cognitive analytic therapy (CAT)", c: "Cognitive behavior therapy (CBT)", d: "Cognitive behavior therapy with exposure response prevention (CBT & ERP)", e: "Exposure response prevention (ERP) ", f: "Interpersonal therapy (IPT)", g: "Life style modification & relaxation training ", h: "Mentalization-based treatment (MBT)", i: "Mindfulness based stress reduction ", j: "Psychodynamic psychotherapy ", k: "Rapid eye movement desensitisation (EMDR)", l: "Rational emotive behavior therapy (REBT)" },
		correctAnswer: "c"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.61    A previously healthy 78 year old man, recovering in hospital after undergoing a total hip replacement a day earlier, becomes confused and agitated at night. He believes he has been wrongfully imprisoned and complains of seeing spiders on the walls and on the floor.",
		answers: { a: "Alcohol poisoning", b: "Alcohol withdrawal", c: "Benzodiazepine overdose", d: "Cannabis abuse", e: "Grand mal seizure", f: "Opioid overdose", g: "Raised intracranial pressure", h: "Stimulant withdrawal", i: "Stroke", j: "Subarachnoid haemorrhage", k: "Temporal lobe epilepsy" },
		correctAnswer: "b"},
		{question: "From the following list, please choose the MOST APPROPRIATE rating scale.<br/><br/>Q.62      Measuring positive and negative symptoms of schizophrenia in a research setting.",
		answers: { a: "AIMS", b: "BPRS", c: "GAF", d: "HAMD", e: "MADRS", f: "PANSS", g: "SANS", h: "SAPS", i: "SCID" },
		correctAnswer: "f"},
		{question: "For the following question, please select the MOST ACCURATE  answer from the list below.<br/><br/>Q.63    Who is generally credited with the development of Interpersonal Therapy (IPT) as a psychotherapy for depression?",
		answers: { a: "Aaron Beck", b: "Albert Ellis", c: "Ellen Frank", d: "Gerald Klerman", e: "Habib Davanloo", f: "John Gunderson", g: "Otto Kernberg", h: "Peter Sifneos" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.64   Zara is a 60 year old Eastern European immigrant who was brought here by her extended family a year ago. They regard her as 'backward' and she has been kept secluded from other people. She presents after developing delusions of being poisoned, and on assessment is noted to have a puffy face, long latency in replies and cognitive deficits.",
		answers: { a: "Cushings disease", b: "Graves disease", c: "Hyperparathyroidism", d: "Hypothyroidism", e: "Liver failure", f: "Organophosphate toxicity", g: "Phaeochromocytoma", h: "Porphyria", i: "Psychogenic polydipsia", j: "Renal failure", k: "SIADH", l: "Wilson's disease" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the MOST APPROPRIATE  intervention.<br/><br/>Q.65    A 35 year old smoker seeks help to manage the cravings of nicotine withdrawal. He has a history of epilepsy.",
		answers: { a: "Buprenorphine", b: "Bupropion", c: "Chlordiazepoxide", d: "Chlormethiazole", e: "Diazepam", f: "Disulfiram", g: "Fluoxetine", h: "Haloperidol", i: "Methadone", j: "Naltrexone", k: "Nicotine patches", l: "Quetiapine" },
		correctAnswer: "k"},
		{question: "For the following patient, please select the individual(s) MOST ASSOCIATED  with the development of the psychological treatment of choice.<br/><br/>Q.66    A 42-year-old builder complains of irritability, anxiety and sleep difficulties in the context of chronic lower back pain following an injury.",
		answers: { a: "Aaron Beck", b: "Albert Ellis ", c: "Bateman and Fonagy ", d: "Gerald Klerman and Myrna Weissman", e: "Heinz Kohut ", f: "Jon Kabat-Zinn", g: "Louise Hay", h: "Philip Barnard and John Teasdale", i: "Sigmund Freud", j: "Steven C. Hayes and Robert Zettle ", k: "Zindel Segal and Mark Williams" },
		correctAnswer: "f"},
		{question: "For the following patient, please select the MOST APPROPRIATE  intervention.<br/><br/>Q.67    Matthew is a 7 year old boy referred by his foster family with whom he has been living for six months. Despite the family committing to his long term care and appearing a warm match, they report that he is still withdrawn and appears sad.",
		answers: { a: "Atomoxetine", b: "Dyadic therapy such as 'Watch Wait Wonder'", c: "Lithium", d: "Maudsley Family Therapy", e: "Methylphenidate SR", f: "Parent Training e.g. Triple P", g: "Play Therapy with child", h: "Psychodynamic Psychotherapy for the mother", i: "Systemic Family Therapy" },
		correctAnswer: "g"},
		{question: "Which stage of change is BEST CHARACTERISED by the patient saying the following:<br/><br/>Q.68     'I don't like spending money on drugs but I really enjoy the highs I get'",
		answers: { a: "Action Stage", b: "Contemplative Stage", c: "Denial", d: "Maintenance Stage", e: "Pre-contemplative Stage", f: "Preparation Stage", g: "Relapse Prevention Stage" },
		correctAnswer: "b"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.69    A 52 year old man presents with a 6 month history of believing his wife is having an affair.",
		answers: { a: "Delusional Disorder", b: "Drug-induced psychosis", c: "Major Depressive Disorder with Psychosis", d: "Manic episode with Psychosis", e: "Pre-psychotic Stage", f: "Psychosis secondary to a General Medical Condition", g: "Schizoaffective Disorder", h: "Schizophrenia", i: "Schizophreniform Disorder" },
		correctAnswer: "a"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.70    The majority of acetylcholinergic neurons in the brain arise from which anatomical structure?",
		answers: { a: "Basal nucleus (of Meynert)", b: "Nucleus accumbens", c: "Pedunculopontine tegmental nucleus", d: "Substantia nigra pars compacta", e: "Substantia nigra pars reticulata", f: "Subthalamic nucleus", g: "Ventral tegmental nucleus" },
		correctAnswer: "a"},
		{question: "For the following drug, please select the MOST ACCURATE  mode of action when it is used in the treatment of substance abuse disorders.<br/><br/>Q.71    Naloxone.",
		answers: { a: "Agonist-Antagonist", b: "Full Agonist", c: "Inverse Agonist", d: "Neutral Antagonist", e: "Norepinephrine-dopamine reuptake inhibitor", f: "Partial Agonist", g: "Partial Antagonist", h: "Selective Serotonin re-uptake inhibitor" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the MOST APPROPRIATE  psychological assessment instrument to inform her treatment.<br/><br/>Q.72    Melanie, a 20 year old woman, recently lost rights to unsupervised access to her 2 year old when she became abusive and threatening to her ex-partner while they were in court to determine custody arrangements. She reported feeling increasingly wound up by his descriptions of her self-cutting and claimed that she ‘finally lost it' when he made mocking gestures behind the judge's back to indicate that she was crazy.",
		answers: { a: "Beck Anxiety Inventory (BAI)", b: "Beck Depression Inventory (BDI-2)", c: "Big Five Personality Questionnaire ", d: "Depression, Anxiety, Stress Scale (DASS)", e: "HCR-20 Version 3 risk assessment tool", f: "Minnesota Multiphasic Personality Inventory (MMPI) ", g: "Psychopathy Checklist (PCL-R) ", h: "Repeated Episodes of Self-Harm scale", i: "Symptom Checklist-90-Revised (SCL-90-R)", j: "The Brief Psychiatric Rating Scale (BPRS)", k: "The Structured Clinical Interview for the DSM 4 (SCID-II)", l: "Violence Risk Scale (VRS)" },
		correctAnswer: "f"},
		{question: "For the following statement, please select the LEAST ACCURATE  answer from the list below.<br/><br/>Q.73    The following are recommendations from the RANZCP Guidelines regarding the use of ECT to treat schizophrenia.",
		answers: { a: "The prescription of an index course of ECT for the treatment of schizophrenia may be considered in combination with antipsychotic medication when a rapid clinical response is an urgent priority.", b: "The addition of ECT may be considered in people with treatment-resistant schizophrenia who have an inadequate response to clozapine.", c: "Prolonged courses of ECT without measured improvement are not recommended for people with schizophrenia because most research suggests that response occurs within 12 treatments. ", d: "For a minority of individuals, longer courses may be required if progressive improvement occurs with each treatment.", e: "Right unilateral electrode placements are not recommended in the treatment of schizophrenia, having been shown to be ineffective.", f: "An objective rating scale should be used to assess baseline symptom severity, response during the ECT course and outcome at completion of a course of ECT." },
		correctAnswer: "e"},
		{question: "For the following diagnosis, please select the MOST LIKELY  inherited risk factor.<br/><br/>Q.74    Huntingdon's disease.",
		answers: { a: "5HTT gene 'L' genotype", b: "5HTT gene 'S' genotype", c: "Alleles on chromosomes 11q, 3q, 18q, and 6p ", d: "X-linked recessive genetic transmission", e: "CAG trinucleotide repeats ", f: "CTG trinucleotide repeats", g: "Expression of the neuregulin-1 gene", h: "'Extensive' metaboliser genotype of 2D6", i: "Genetic transmission via the sex chromosomes", j: "'Intermediate' metaboliser genotype of 2D6 ", k: "'met' variant of the COMT (catecho-o-methytransferase) gene", l: "'Ultra-rapid' metaboliser genotype of 2D6", m: "'val' variant of the COMT (catecho-o-methytransferase) gene" },
		correctAnswer: "e"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.75    A 14 year old girl has become extremely irritable over the last six months and refuses to speak to her mother or do any chores.  She attends school intermittently and was stood down for swearing at a teacher last week. Her mother reports she seems to be having trouble sleeping and has lost five kilos.",
		answers: { a: "Autistic Spectrum Disorder", b: "Conduct Disorder", c: "Enuresis", d: "Gender Identity Disorder", e: "Intellectual Disability", f: "Major Depressive Disorder", g: "Oppositional defiant disorder", h: "Reactive attachment Disorder", i: "Rett's Disorder" },
		correctAnswer: "f"},
		{question: "For the following question, please select the MOST ACCURATE answer.<br/><br/>Q.76    The principal mechanism of action of bupropion is thought to be that it:",
		answers: { a: "Inhibits dopamine reuptake", b: "Inhibits GABA reuptake", c: "Inhibits noradrenalin reuptake", d: "Inhibits reuptake of noradrenalin and dopamine", e: "Inhibits reuptake of noradrenalin and GABA", f: "Inhibits reuptake of serotonin and dopamine", g: "Inhibits reuptake of serotonin and GABA", h: "Inhibits reuptake of serotonin and noradrenalin", i: "Inhibits serotonin reuptake" },
		correctAnswer: "d"},
		{question: "For the following set of symptoms, please select the MOST LIKELY  movement disorder they indicate.<br/><br/>Q.77    Grimacing and the bon-bon sign.",
		answers: { a: "Acute Dystonia", b: "Akathisia", c: "Chronic Dystonia", d: "Medication Induced Tremor", e: "Neuroleptic Malignant Syndrome", f: "Oculogyric Crises", g: "Pseudo-parkinsonism", h: "Tardive Dyskinesia", i: "Torticollis" },
		correctAnswer: "h"},
		{question: "For the following patient, please select the MOST APPROPRIATE  and evidenced-based pharmacological next step.<br/><br/>Q.78    A 25 year old woman with borderline personality disorder describes no improvement in her symptoms across 6 months of treatment with fluoxetine 40 mg/day. Her symptoms include interpersonal sensitivity, anxiety, and anger outbursts.",
		answers: { a: "Augment fluoxetine with aripiprazole 15–30 mg/ day as tolerated", b: "Augment fluoxetine with lamotrigine increasing to 100–200 mg as tolerated", c: "Augment fluoxetine with lithium to a therapeutic level", d: "Augment fluoxetine with mirtazapine 15–45 mg as tolerated", e: "Increase fluoxetine to 60 mg/day", f: "Switch to lamotrigine increasing to 100–200 mg as tolerated", g: "Switch to quetiapine at mood stabilising doses of between 350 mg to 600 mg/day ", h: "Switch to sodium valproate to achieve therapeutic levels", i: "Switch to venlafaxine increasing to 300 mg/day" },
		correctAnswer: "f"},
		{question: "For the following description of a rating scale, please select the MOST APPROPRIATE  choice as to its developer and namesake<br/><br/>Q.79    This rating scale for depression is clinician rated and usually features 17 items, but may have up to 24 items, each rated 0 – 4 or 0 – 2.",
		answers: { a: "Andreasen", b: "Beck ", c: "Hamilton ", d: "Montgomery-Åsberg", e: "Raskin", f: "Wing", g: "Zung" },
		correctAnswer: "c"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.80    Which psychotropic has been used to increase the white cell count in patients who have developed neutropenia while taking clozapine?",
		answers: { a: "Carbamazepine", b: "Gabapentin", c: "Lamotrigine", d: "Lithium", e: "Phenytoin", f: "Topiramate", g: "Valproate" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the MOST APPROPRIATE  next treatment adjustment.<br/><br/>Q.81    A 36 year old woman with fibromyalgia, generalised anxiety disorder (GAD) and depression is currently taking several psychotropic medications, including  alprazolam, duloxetine, pregabalin, and hydrocodone/acetaminophen. She has residual pain, anxiety and mood symptoms. Your purpose is to simplify her medication regime to medications with the best evidence for efficacy for her disorders.",
		answers: { a: "Discontinue all medication as she remains symptomatic despite polypharmacy ", b: "Discontinue duloxetine as it can cause abdominal pain", c: "Discontinue duloxetine as it has the least evidence of efficacy and is apparently ineffective in treating symptoms", d: "Discontinue either duloxetine or pregabalin as their interaction can increase anxiety ", e: "Discontinue Hydrocodone/acetaminophen as it has the least evidence of efficacy", f: "Discontinue hydrocodone/acetaminophen as it may worsen depressive symptoms ", g: "Discontinue pregabalin as it is not approved for use in GAD and is more specifically targeted at neuropathic pain", h: "Gradually discontinue alprazolam as it is best suited for short term use and has the potential for dependency ", i: "Leave medications unchanged as she would probably be worse without them", j: "Switch from duloxetine to venlafaxine" },
		correctAnswer: "e"},
		{question: "For the following sample of a patient's speech, please select the MOST APPROPRIATE  phenomenological term.<br/><br/>Q.82    'He was vorpling in and out. They do that, so as to throw you off the scent. They vorple.'",
		answers: { a: "Clanging", b: "Delusions of Control", c: "Delusions of Persecution", d: "Delusions of Reference", e: "Derailment", f: "Knight's move thinking", g: "Neologism", h: "Tangentiality", i: "Thought Insertion", j: "Verbigeration" },
		correctAnswer: "g"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.83    A 17 year old boy is seen for forensic evaluation having been charged with selling synthetic cannabinoids at school.  He shows no concern for the adolescents that became unwell using them.  He has previously been accused of rape and assault of peers, but not charged.",
		answers: { a: "Alcohol dependence", b: "Autistic Spectrum Disorder", c: "Bipolar Disorder Prodrome", d: "Conduct Disorder", e: "Fetishism", f: "Major Depressive Episode", g: "Munchausen's by proxy", h: "No diagnosis", i: "Parasomnias", j: "Psychotic disorder NOS", k: "Synthetic cannabinoid misuse" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.84    A 78 year old retired GP develops progressive difficulty in walking, with a slow, broad-based gait and some falls. After ten years of this he also develops incontinence and mild cognitive impairment.",
		answers: { a: "Benign hydrocephalus", b: "Cerebrovascular malformation", c: "Cryptococcal meningitis", d: "Hyperparathyroidism", e: "Hypothyroidism", f: "Inappropriate ADH syndrome", g: "Neuroleptic malignant syndrome", h: "Neuropsychiatric systemic lupus erythematosus (SLE) ", i: "Neurosyphilis", j: "Normal pressure hydrocephalus", k: "Water intoxication", l: "Wernicke's encephalopathy" },
		correctAnswer: "j"},
		{question: "For the following patient, please select the answer listed below which is MOST LIKELY  to be responsible for his medical deterioration.<br/><br/>Q.85    A 23 year old male with a known history of borderline personality disorder is brought to the Emergency Department with lacerations to his wrists. While having these sutured, he develops a cardiac arrhythmia, becomes drowsy and suffers a seizure.",
		answers: { a: "Acute blood loss", b: "Diazepam overdose", c: "Dothiepin overdose  ", d: "Epilepsy ", e: "Hypokalaemia", f: "Hyponatraemia ", g: "Paracetamol overdose ", h: "Pseudo-seizures ", i: "Quetiapine overdose ", j: "Venlafaxine overdose" },
		correctAnswer: "c"},
		{question: "For the following description, please select the MOST APPROPRIATE  phenomenological term.<br/><br/>Q.86    A 23 year old woman presents with a five day history of not eating due to believing that she is being poisoned.",
		answers: { a: "Bizarre delusions", b: "Cotard delusions", c: "Delusions of Control", d: "Delusions of Persecution", e: "Hypochondriacal delusions", f: "Induced delusions", g: "Magical thinking", h: "Nihilistic delusions", i: "Obsessional thinking", j: "Pseudologia fantastica", k: "Somatic delusions", l: "Systematised delusions" },
		correctAnswer: "d"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.87    Which combination of ECT parameters listed below have been shown NOT to be effective in the treatment of depression?",
		answers: { a: "Bifrontal standard pulse width", b: "Bifrontal ultra brief pulse width", c: "Bitemporal standard pulse width", d: "Bitemporal ultra brief pulse width", e: "RUL standard pulse width", f: "RUL ultra brief pulse width" },
		correctAnswer: "d"},
		{question: "For the following description, please select the MOST APPROPRIATE  treatment.<br/><br/>Q.88    Treatment to switch to when a patient with psychosis has developed tardive dyskinesia.",
		answers: { a: "Amisulpride", b: "Aripiprazole", c: "Benztropine", d: "Clonazepam", e: "Clozapine", f: "Electroconvulsive therapy", g: "Haloperidol", h: "Olanzapine", i: "Quetiapine", j: "Risperidone", k: "Ziprasidone" },
		correctAnswer: "e"},
		{question: "For the following clinical situation, please select the MOST APPROPRIATE  rating scale.<br/><br/>Q.89    Alcohol related symptoms experienced within the previous year.",
		answers: { a: "Addiction Research Foundation Clinical Institute Withdrawal ", b: "Assessment – Alcohol (CIWS-Ar)", c: "Alcohol Dependence Scale", d: "Alcohol Use Disorders Identification Test (Audit)", e: "CAGE questionnaire", f: "Hamilton Depression Rating Scale (HAMD-17)", g: "Michigan Alcoholism Screening Test (MAST)", h: "Paddington Alcohol Test", i: "Severity of Alcohol Dependence Questionnaire (SADQ-C)", j: "Severity of Dependence Scale (SDS)", k: "Severity of Opiate Dependence Questionnaire (SADQ)" },
		correctAnswer: "d"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.90    Which of the following is a simple test for estimating pre-morbid IQ?",
		answers: { a: "Boston Naming Test", b: "Clifton Assessment Schedule", c: "Cognitive Estimates Test", d: "Mini-Mental State Examination", e: "National Adult Reading Test ", f: "Raven's Progressive Matrices", g: "Trail Making Test", h: "Wechsler Adult Intelligence Scale", i: "Wechsler Memory Scale", j: "Wisconsin Sorting Card Test" },
		correctAnswer: "e"},
		{question: "For the following patient, please select the MOST LIKELY  cause of memory disturbance.<br/><br/>Q.91    Malcolm, aged 77, knows he had a course of electroconvulsive therapy a month ago but can't recall where he had the actual treatments.",
		answers: { a: "Alzheimer's dementia", b: "Anterograde amnesia", c: "Dissociation", d: "Factitious amnesia", e: "Fugue state", f: "Psychogenic amnesia ", g: "Retrograde amnesia", h: "Transient global amnesia", i: "Transient ischaemic attack" },
		correctAnswer: "b"},
		{question: "For the following patient, please select the MOST APPROPRIATE  and evidence-based psychological intervention.<br/><br/>Q.92    A 6 year old boy Paul was referred because despite being quite able he is performing badly at school. He doesn't sit still, isn't completing his work and is distracting the rest of the class. He has been getting into fights and has been stood down from school recently after punching another pupil. Paul reports not liking school because the teacher and other students are ‘mean' to him. His parents say he is a handful at home. They feel frustrated and are not sure what to do about his behavior.",
		answers: { a: "Circle of security", b: "Cognitive Behavioral Therapy (CBT)", c: "Family Based Therapy ", d: "Family connections ", e: "Interpersonal Therapy (IPT)", f: "Parent behavioral management training ", g: "Parent (PCIT)", h: "Systemic Family Therapy ", i: "Toolbox parenting ", j: "Tough love", k: "Watch, Wait and Wonder" },
		correctAnswer: "g"},
		{question: "For the following patient, please select the MOST APPROPRIATE  psycho-social intervention.<br/><br/>Q.93    A 48-year-old architect who has suffered five episodes of moderately severe major depression is concerned to prevent further relapse. He continues to take antidepressants and has had three previous courses of CBT.",
		answers: { a: "Acceptance and Commitment Therapy (ACT)", b: "Cognitive Analytic Therapy (CAT)", c: "Cognitive Behavior Therapy (CBT)", d: "Interpersonal Therapy (IPT)", e: "Lifestyle modification ", f: "Mentalization-based treatment (MBT)", g: "Mindfulness-based stress reduction", h: "Mindfulness Based Cognitive Therapy (MBCT)", i: "Psychodynamic psychotherapy ", j: "Rapid Eye Movement Desensitisation (EMDR)", k: "Rational Emotive Behavior Therapy (REBT)" },
		correctAnswer: "h"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.94    Which clinical feature is more likely to be seen in a patient with bipolar depression than in someone with unipolar depression?",
		answers: { a: "Early age of onset", b: "Fewer previous episodes", c: "Gradual onset of depression", d: "Longer duration of depressive episodes", e: "Reduced sleep", f: "Somatic complaints", g: "Weight loss" },
		correctAnswer: "a"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.95    The initial plasma half-life of which of the following psychotropics reduces substantially with chronic dosing?",
		answers: { a: "Aripiprazole", b: "Carbamazepine", c: "Gabapentin", d: "Lamotrigine", e: "Lithium", f: "Olanzapine", g: "Quetiapine", h: "Sodium Valproate" },
		correctAnswer: "b"},
		{question: "For the following set of symptoms, please select the MOST LIKELY  movement disorder they characterise.<br/><br/>Q.96    Fever, diaphoresis, rigidity, confusion and fluctuating consciousness.",
		answers: { a: "Acute Dystonia", b: "Akathisia", c: "Chronic Dystonia", d: "Medication Induced Tremor", e: "Neuroleptic Malignant Syndrome", f: "Oculogyric Crises", g: "Pseudo-parkinsonism", h: "Restless Leg Syndrome", i: "Tardive Dyskinesia", j: "Torticollis" },
		correctAnswer: "e"},
		{question: "Which stage of change is BEST CHARACTERISED by the patient saying the following:<br/><br/>Q.97    'I've been clean for six months now, but I'm worried this class reunion coming up's going to trigger me – old coke buddies, y'know.'",
		answers: { a: "Action Stage", b: "Contemplative Stage", c: "Denial", d: "Maintenance Stage", e: "Pre-contemplative Stage", f: "Preparation Stage", g: "Relapse Prevention Stage" },
		correctAnswer: "g"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.98    Margery, aged 33, suffered a serious head injury 10 years ago in a car accident. Her parents, with whom she lives, are concerned that her ideas are increasingly bizarre and that she has become preoccupied with obscure religious texts over the past year. Margery tells you she believes demons harass her at night and that she battles them in her sleep, as she sometimes wakes to find she's fallen out of bed. She says she often senses 'a spectral presence' hovering at her shoulder, and hears it speak to her. Her mother confirms that she has indeed fallen out of bed during the night on a few occasions.",
		answers: { a: "Cluster A personality disorder", b: "Brief psychotic disorder", c: "Schizophreniform disorder", d: "Depression with psychotic features ", e: "Schizophrenia", f: "Delusional disorder", g: "Psychosis due to general medical condition ", h: "Schizoaffective disorder ", i: "Drug-induced psychosis", j: "Mania with psychotic features" },
		correctAnswer: "g"},
		{question: "For the following patient, please select the MOST APPROPRIATE  answer from the list below.<br/><br/>Q.99    A 15 year old girl is referred with poor school attendance due to concern that others are ‘judging' her after she was teased by her class-mates. She has always been shy and a bit of a loner. She describes being worried about talking to new people or groups in case she says something silly. Which intervention would NOT be an appropriate choice as a component of her treatment?",
		answers: { a: "Citalopram", b: "Cognitive Behavior Therapy ", c: "Family Therapy", d: "Fluoxetine", e: "Group Therapy ", f: "Interpersonal Therapy ", g: "Mentalization-Based Treatment (MBT)", h: "Mindfulness training", i: "Relaxation training", j: "Sertraline", k: "Venlafaxine" },
		correctAnswer: "k"},
		{question: "For the following statement, please select the LEAST ACCURATE  answer listed below.<br/><br/>Q.100    Antisocial personality disorder in adulthood is associated with:",
		answers: { a: "A genotype which confers high levels of neurotransmitter-metabolizing enzyme Monoamine Oxidase-A (MAO-A) ", b: "A sex ratio for lifetime prevalence of 2.4 males to 1 female ", c: "Being subject to abuse or neglect during childhood", d: "Family history of antisocial disorder, personality disorder or substance misuse", e: "Gang participation  ", f: "Homicidal and suicidal behaviors", g: "Low socioeconomic status  ", h: "Premature death ", i: "Substance abuse in adolescence ", j: "Symptoms of attention-deficit hyperactivity disorder (ADHD) persisting into late adolescence", k: "Watching excessive amounts of television during childhood" },
		correctAnswer: "a"},
		{question: "For the following description, please select the MOST APPROPRIATE  treatment.<br/><br/>Q.101    Treating pseudo-parkinsonism side effects in a patient on antipsychotic medication.",
		answers: { a: "Amisulpride", b: "Aripiprazole", c: "Benztropine", d: "Clozapine", e: "Electroconvulsive therapy", f: "Haloperidol", g: "Lorazepam", h: "Olanzapine", i: "Quetiapine", j: "Risperidone", k: "Ziprasidone" },
		correctAnswer: "c"},
		{question: "For the following patient, please select the MOST APPROPRIATE  answer.<br/><br/>Q.102    You are advising a 28 year old woman with an established diagnosis of  Bipolar I disorder. She is on no medication and is planning to get pregnant. Assuming she remains off medication, the risk of a recurrence of her disorder in the first month post-partum  is approximately:",
		answers: { a: "10%", b: "25%", c: "33%", d: "50%", e: "66%", f: "75%", g: "90%" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the state of addiction that BEST FITS the clinical situation described.<br/><br/>Q.103    A 21 year old man uses methamphetamine on regular basis. He presents via the police after being arrested for disorderly behaviour. His drug use has damaged his relationship with his family and he is failing his university course and has stopped playing social sport because he's absent so much. He has attempted to cut down unsuccessfully several times, but noted it was making him depressed and anxious.",
		answers: { a: "Abstinence", b: "Abstinence in a controlled setting", c: "Abstinence in sustained remission", d: "Abuse", e: "Craving", f: "Lapse", g: "Mild Substance Use Disorder", h: "Relapse", i: "Salience", j: "Severe Substance Use Disorder", k: "Tolerance" },
		correctAnswer: "j"},
		{question: "For the following patient, please select the MOST APPROPRIATE  answer from the list below.<br/><br/>Q.104    A 14 year old youth, Jon, living with his parents, is arrested for fondling several girls in school and for breaking into his teacher's home and cutting the crotch out of her panties. Other problems include association with behaviourally disturbed peers, truancy and parental conflict. His father is authoritarian, drinks heavily and often becomes verbally abusive when intoxicated. Jon's strengths include intelligence, relatively strong interpersonal skills and absence of prior problem behaviours. Multisystemic treatment  would include all of the following EXCEPT for:",
		answers: { a: "Attending a residential treatment centre ", b: "Disengagement from behaviourally disturbed peers and engagement with well-socialised peers", c: "Family therapy to improve family relationships ", d: "Jon engaging in individual therapy to reduce denial and cognitive distortion, and to increase empathy for the victims and address his own victimisation", e: "Jon obtaining part-time employment", f: "Marital therapy ", g: "Monitoring and implementing contingencies to encourage Jon's school attendance and performance ", h: "Sex education ", i: "Treatment of the father's substance dependence/abuse." },
		correctAnswer: "a"},
		{question: "For the following clinical situation, please select the MOST LIKELY  inherited genetic variant.<br/><br/>Q.105    A good response to SSRI medication.",
		answers: { a: "5HTT gene 'L' genotype", b: "5HTT gene 'S' genotype", c: "Alleles on chromosomes 11q, 3q, 18q, and 6p ", d: "X-linked recessive genetic transmission", e: "CAG trinucleotide repeats ", f: "CTG trinucleotide repeats", g: "Expression of the neuregulin-1 gene", h: "Extensive' metaboliser genotype of 2D6", i: "Genetic transmission via the sex chromosomes", j: "'Intermediate' metaboliser genotype of 2D6 ", k: "'met' variant of the COMT (catecho-o-methytransferase) gene", l: "Ultra-rapid' metaboliser genotype of 2D6", m: "'val' variant of the COMT (catecho-o-methytransferase) gene" },
		correctAnswer: "a"},
		{question: "For the following psychological therapy, please select the LEAST ACCURATE  statement from the list below.<br/><br/>Q.106    Regarding Dialectical Behavioral Therapy (DBT) for treatment of borderline personality disorder:",
		answers: { a: "DBT uses a hierarchy of treatment targets to help the therapist determine the order in which problems should be addressed. The treatment targets in order of priority are:  life-threatening behaviours, therapy-interfering behaviors, quality of life interfering behaviors, and skills acquisition ", b: "DBT was initially developed by Marsha Linehan for treatment of chronically suicidal women", c: "Post traumatic stress disorder, if present, is treated in the first stage of therapy", d: "The four DBT skills modules include two sets of acceptance-oriented skills (mindfulness and distress tolerance) and two sets of change-oriented skills (emotional regulation and interpersonal effectiveness)", e: "Most publications on DBT relate to stage one of treatment ", f: "The primary dialectic (synthesis of opposites) within DBT is between the strategies of acceptance and change", g: "There are four components of DBT including the skills training group, individual DBT therapy, telephone skills coaching and the DBT therapist consultation team ", h: "There are four stages of treatment with stage one focussing on the patient gaining behavioral control", i: "There is a sound evidence base supporting DBT leading to reduction of deliberate self-harm in people with borderline personality disorder" },
		correctAnswer: "c"},
		{question: "For the following patient, please select the MOST APPROPRIATE  assessment tool.<br/><br/>Q.107    A 6 year old boy Paul was referred because despite being quite able he is performing badly at school. He doesn't sit still, isn't completing his work and is distracting the rest of the class. He has been getting into fights and has been stood down from school recently after punching another pupil. Paul reports not liking school because the teacher and other students are ‘mean' to him. His parents say he is a handful at home. They feel frustrated and are not sure what to do about his behavior.",
		answers: { a: "Beck Anxiety Inventory (BAI) ", b: "Beck Youth Inventory (BYI- 2)", c: "Brown Attention-Deficit Disorder Symptom Assessment Scale (BADDS)", d: "Depression Anxiety Stress Scale (DASS)", e: "Multidimensional Anxiety Scale for Children (MASC 2)", f: "Revised Conners' rating scale (CPRS-R) ", g: "Strengths and Difficulties Questionnaire ", h: "The Brief Psychiatric Rating Scale For Children (BPRS-C)", i: "The Child Behavior Checklist (CBCL)", j: "The Conduct Disorder Scale (CDS)", k: "The Strengths and Difficulties Questionnaire (SDQ)" },
		correctAnswer: "f"},
		{question: "For the following description, please select the MOST APPROPRIATE  psychological therapy for substance use from the list below.<br/><br/>Q.108    Focused and goal-directed exploration of a client's ambivalence, so as to elicit behavioural change.",
		answers: { a: "Alcoholics Anonymous 12 Step Recovery Programme ", b: "Cognitive Analytic Therapy", c: "Cognitive Behaviour Therapy", d: "Contingency Management", e: "Dialectical Behaviour Therapy", f: "Eye Movement Desensitisation and Reprocessing (EMDR)", g: "Interpersonal Therapy ", h: "Motivational Interviewing", i: "Person-Centred Therapy", j: "Psychodynamic Psychotherapy" },
		correctAnswer: "h"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.109    A 39 year old known gang associate who was admitted prior to the weekend with psychosis, presents with a normal mental state on Monday, three days after admission.",
		answers: { a: "Delusional Disorder", b: "Drug-induced psychosis", c: "Major Depressive Disorder with Psychosis", d: "Manic episode with Psychosis", e: "Pre-psychotic Stage", f: "Psychosis secondary to a General Medical Condition", g: "Schizoaffective Disorder", h: "Schizophrenia", i: "Schizophreniform Disorder" },
		correctAnswer: "b"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.110    Which of the following psychotropics would be most likely to exacerbate a patient's psoriasis?",
		answers: { a: "Aripiprazole", b: "Carbamazepine", c: "Gabapentin", d: "Lamotrigine", e: "Lithium", f: "Olanzapine", g: "Quetiapine", h: "Sodium Valproate" },
		correctAnswer: "e"},
		{question: "For the following patient, please select the MOST ACCURATE treatment-related statement from the list below.<br/><br/>Q.111    Joanne, a 21 year old lawyer in her first professional year, has a diagnosis of bulimia nervosa with bingeing and purging most evenings. Assessment also reveals that a year ago she was started on methylphenidate for ADHD.",
		answers: { a: "Methylphenidate is likely to be increasing Joanne's anxiety and she would be better treated with high dose SSRI to reduce anxiety and bingeing", b: "Methylphenidate may assist with the symptoms of ADHD and also reduce severity of bingeing by improving impulse control", c: "Methylphenidate should be continued because it will lessen Joanne's anxiety about her shape and weight ", d: "Methylphenidate should be continued because the appetite suppressant action is likely to increase Joanne's control thus reduce bingeing", e: "Methylphenidate should be stopped because bingeing indicates poor impulse control and abuse of the medication is a concern", f: "Methylphenidate should be stopped because it is unlikely that Joanne suffers from ADHD, given the diagnosis was first made at age 20 and she is a successful professional", g: "Methylphenidate should be stopped because the appetite suppressant effect is likely to worsen food restriction thus contribute to evening bingeing" },
		correctAnswer: "b"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.112     A 45-year-old man from Lagos presents with personality changes, memory loss and poor judgment. He is HIV positive and his pupils fail to accommodate properly.",
		answers: { a: "Benign hydrocephalus", b: "Cerebrovascular malformation", c: "Cryptococcal meningitis", d: "Hyperparathyroidism", e: "Hypothyroidism", f: "Inappropriate ADH syndrome", g: "Neuroleptic malignant syndrome", h: "Neuropsychiatric systemic lupus erythematosus (SLE) ", i: "Neurosyphilis", j: "Normal pressure hydrocephalus", k: "Water intoxication", l: "Wernicke's encephalopathy" },
		correctAnswer: "i"},
		{question: "For the following drug, please select the MOST ACCURATE  mode of action when it is used in the treatment of substance abuse disorders.<br/><br/>Q.113    Bupropion.",
		answers: { a: "Agonist-Antagonist", b: "Full Agonist", c: "Inverse Agonist", d: "Neutral Antagonist", e: "Norepinephrine-dopamine reuptake inhibitor", f: "Partial Agonist", g: "Partial Antagonist", h: "Selective Serotonin re-uptake inhibitor" },
		correctAnswer: "d"},
		{question: "For the following sample of a patient's speech, please select the MOST APPROPRIATE  phenomenological term.<br/><br/>Q.114    'I'm pretty sure my husband's cheating on me – for several months, now. I can't stop thinking about it. I've been considering hiring a private detective.'",
		answers: { a: "Bizarre delusions", b: "Cotard delusions", c: "Delusions of Control", d: "Delusions of Reference", e: "Ideas of Reference", f: "Nihilistic delusions", g: "Obsessional ideas", h: "Persecutory delusions", i: "Thought insertion" },
		correctAnswer: "e"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.115    A 16 year old girl has gradually withdrawn from her family over the last three months and has needed prompting to shower and dress.  Her family referred her today after seeing a disorganised Facebook post saying that she thought people were impregnating her tampons with illicit drugs.",
		answers: { a: "Alcohol dependence", b: "Autistic Spectrum Disorder", c: "Bipolar Disorder Prodrome", d: "Conduct Disorder", e: "Fetishism", f: "Major Depressive Episode", g: "Munchausen's by proxy", h: "No diagnosis", i: "Parasomnias", j: "Psychotic disorder NOS", k: "Synthetic cannabinoid misuse" },
		correctAnswer: "j"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.116    Amyotrophic lateral sclerosis is better known as:",
		answers: { a: "Duchenne's Muscular Dystrophy", b: "Familial periodic paralysis", c: "Friedrich's Ataxia", d: "Motor Neuron Disease", e: "Multiple Sclerosis", f: "Myasthenia Gravis", g: "Neurofibromatosis", h: "Schilder's disease", i: "Tuberous sclerosis" },
		correctAnswer: "d"},
		{question: "For the following patient, please select the property or properties of citalopram MOST LIKELY to be responsible for his sexual side effects and the discontinuation effects.<br/><br/>Q.117    A 35 year old man stops citalopram because of sexual dysfunction. He then develops akathisia and dizziness.",
		answers: { a: "Inhibition of CYP450 3A4 ", b: "Anticholinergic actions ", c: "Inhibition of Nitric Oxide Synthase (NOS)", d: "Anticholinergic actions and inhibition of CYP450 3A4  ", e: "Inhibition of CYP450 3A4 and inhibition of Nitric Oxide Synthase (NOS)", f: "Inhibition of Nitric Oxide Synthase (NOS) and Anticholinergic actions" },
		correctAnswer: "f"},
		{question: "For the following sample of a patient's speech, please select the MOST APPROPRIATE  phenomenological term.<br/><br/>Q.118    'They call me blue-eyes, true-eyes, gotta be new eyes – get it? I'm Mr Big, I'm the man with the plan, Stan.'",
		answers: { a: "Clanging", b: "Delusions of Control", c: "Delusions of Persecution", d: "Derailment", e: "Fluent aphasia", f: "Knight's move thinking", g: "Neologisms", h: "Perseveration", i: "Thought Insertion", j: "Verbigeration" },
		correctAnswer: "a"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.119    Andrew has chronic schizophrenia with some OCD symptoms, and lives in staffed supported accommodation. He develops a number of rituals focussed on beliefs that his body is drying out, showers excessively and carries bottled water around constantly. He is seen by his GP for complaints of nausea, loss of appetite, irritability and malaise. Investigations show a low serum and urinary sodium.",
		answers: { a: "Cushings disease", b: "Graves disease", c: "Hyperparathyroidism", d: "Hypothyroidism", e: "Liver failure", f: "Organophosphate toxicity", g: "Phaeochromocytoma", h: "Porphyria", i: "Psychogenic polydipsia", j: "Renal failure", k: "SIADH", l: "Wilson's disease" },
		correctAnswer: "i"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.120    Researchers such as Akiskal have proposed a bipolar spectrum classification of bipolar disorders as an alternative to the DSM classification. According to this bipolar spectrum classification, a patient who has a switch into mania on antidepressant therapy would be classified as:",
		answers: { a: "Bipolar I", b: "Bipolar II", c: "Bipolar III", d: "Bipolar IV", e: "Bipolar V", f: "Bipolar VI" },
		correctAnswer: "c"},
		{question: "For the following clinical situation, please select the MOST APPROPRIATE  rating scale.<br/><br/>Q.121     Assessing how well a patient is doing in various areas of their life.",
		answers: { a: "AIMS", b: "BPRS", c: "GAF", d: "HAMD", e: "MADRS", f: "PANSS", g: "SANS", h: "SAPS", i: "SCID" },
		correctAnswer: "c"},
		{question: "For the following patient, please select the MOST APPROPRIATE  medication.<br/><br/>Q.122    A 24 year old man with an intravenous habit uses moderate doses of opioids and seeks help stopping his IV use. He has a co-morbid history of depression and of suicide attempts by overdosing.",
		answers: { a: "Buprenorphine", b: "Bupropion", c: "Chlordiazepoxide", d: "Chlormethiazole", e: "Diazepam", f: "Disulfiram", g: "Fluoxetine", h: "Haloperidol", i: "Methadone", j: "Naltrexone", k: "Nicotine Patches", l: "Quetiapine" },
		correctAnswer: "a"},
		{question: "For the following patient, please select the MOST APPROPRIATE  psychological treatment.<br/><br/>Q.123    You are asked to assess a 12 year old John, who has restricted food group intake; he eats only rice, potatoes, chips and tomato sauce. When presented with other foods, he reports having tummy pains, breathing fast, worries that he won't manage, and typically he vomits. The problem first began at age 4, after his father left to live overseas. His mother doesn't like to see her son upset but is worried that he isn't eating properly.",
		answers: { a: "Adolescent Mentalization-Based Integrative Treatment (AMBIT)", b: "Circle of Security", c: "Cognitive Behavioral Therapy (CBT)", d: "Cognitive behavioral therapy enhanced version for eating disorders (CBT-E) ", e: "Family Based Therapy ", f: "Family Connections ", g: "Interpersonal Therapy (IPT)", h: "Parent Child Interaction Therapy (PCIT)", i: "Parent Management Training ", j: "Strategic Family therapy", k: "Systemic family therapy ", l: "Tough love", m: "Watch Wait and Wonder" },
		correctAnswer: "c"},
		{question: "For the following forensic population, please select the MOST ACCURATE  corresponding statement from the list below.<br/><br/>Q.124    Regarding sex offenders in custody:",
		answers: { a: "Conviction histories of sex offenders are an approximate reflection of their offending behavior ", b: "Imprisoned sex offenders tend to also have a number of prior convictions for other types of offending", c: "Rates of re-imprisonment are higher amongst older sex offenders as compared to those less than 25 years of age ", d: "Sex offenders are usually referred to a sex offenders' programme at the beginning of their sentence", e: "Sex offenders with finite sentences are potentially liable for strict supervision conditions up to 10 years or more beyond their final release date", f: "Sex offenders who deny offending are rarely released into the community", g: "The proportion of inmates convicted of sexual offences against adults is roughly equivalent to those convicted of sexual offences against children", h: "Treatment programmes for sex offenders are considered safe places to disclose deviant sexual behavior" },
		correctAnswer: "e"},
		{question: "For the following clinical situation, please select the MOST APPROPRIATE  rating scale.<br/><br/>Q.125    Quick identification of alcohol-related problems amongst those attending Accident and Emergency departments.",
		answers: { a: "Addiction Research Foundation Clinical Institute Withdrawal ", b: "Assessment – Alcohol (CIWS-Ar)", c: "Alcohol Dependence Scale", d: "Alcohol Use Disorders Identification Test (Audit)", e: "CAGE questionnaire", f: "Hamilton Depression Rating Scale (HAMD-17)", g: "Michigan Alcoholism Screening Test (MAST)", h: "Paddington Alcohol Test", i: "Severity of Alcohol Dependence Questionnaire (SADQ-C)", j: "Severity of Dependence Scale (SDS)", k: "Severity of Opiate Dependence Questionnaire (SADQ)" },
		correctAnswer: "h"},
		{question: "For the following patient, please select the MOST LIKELY  cause of memory disturbance.<br/><br/>Q.126    Joseph, aged 41, finds himself wandering around an unfamiliar railway station in another town, two days after his wife tells him she has always felt like a man inside, and intends to have a sex-change.",
		answers: { a: "Anterograde amnesia", b: "Dissociation", c: "Dissociative identity disorder ", d: "Factitious amnesia", e: "Fugue state", f: "Psychogenic amnesia ", g: "Retrograde amnesia", h: "Transient global amnesia", i: "Transsexualism" },
		correctAnswer: "e"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.127    A 42 year old woman describes burning down her father's house to rid it of evil spirits.  On mental state examination, she is poorly kempt and is thought disordered.",
		answers: { a: "Delusional Disorder", b: "Drug-induced psychosis", c: "Major Depressive Disorder with Psychosis", d: "Manic episode with Psychosis", e: "Pre-psychotic Stage", f: "Psychosis secondary to a General Medical Condition", g: "Schizoaffective Disorder", h: "Schizophrenia", i: "Schizophreniform Disorder" },
		correctAnswer: "i"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.128    Which of the following foods should not be consumed by a patient taking tranylcypromine?",
		answers: { a: "Anchovies", b: "Coca-Cola", c: "Cottage cheese", d: "Nutella", e: "Peanut butter", f: "Pickled onions", g: "Soy sauce" },
		correctAnswer: "g"},
		{question: "For the following description, please select the MOST APPROPRIATE  treatment.<br/><br/>Q.129    Antipsychotic treatment with virtually no sexual side effects.",
		answers: { a: "Amisulpride", b: "Aripiprazole", c: "Benztropine", d: "Clozapine", e: "Electroconvulsive therapy", f: "Haloperidol", g: "Lorazepam", h: "Olanzapine", i: "Quetiapine", j: "Risperidone", k: "Ziprasidone" },
		correctAnswer: "b"},
		{question: "For the following symptoms, please select the MOST ACCURATE  answer from the list below.<br/><br/>Q.130    Unwanted, intrusive thoughts and images:",
		answers: { a: "Are a concern, as thinking about something increases the probability of the corresponding behavior or event ", b: "Are abnormal experiences which can be harmful ", c: "Are indistinguishable in content between people with Obsessive Compulsive Disorder and the ‘normal' population", d: "Are rare in the general population", e: "Are significant because they are recurrently present", f: "Are unnecessary for thinking creatively and problem-solving", g: "Can be suppressed in the long term ", h: "Do not differ in the meaning that people with Obsessive Compulsive Disorder attach to their occurrence and content, compared to the ‘normal' population" },
		correctAnswer: "c"},
		{question: "For the following drug, please select the MOST ACCURATE  mode of action when it is used in the treatment of substance abuse disorders.<br/><br/>Q.131    For the following drug, please select the MOST ACCURATE  mode of action when it is used in the treatment of substance abuse disorders. Methadone.",
		answers: { a: "Agonist-Antagonist", b: "Full Agonist", c: "Inverse Agonist", d: "Neutral Antagonist", e: "Norepinephrine-dopamine reuptake inhibitor", f: "Partial Agonist", g: "Partial Antagonist", h: "Selective Serotonin re-uptake inhibitor" },
		correctAnswer: "b"},
		{question: "For the following patient, please select the MOST APPROPRIATE  syndrome describing her condition.<br/><br/>Q.132    A woman has a delusional belief that that she has lost her internal organs and that she is dead.",
		answers: { a: "Capgras syndrome", b: "Cotard syndrome", c: "De Clerambault syndrome", d: "Ekbom syndrome", e: "Fregoli syndrome", f: "Ganser syndrome", g: "Othello syndrome" },
		correctAnswer: "b"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.133    A 42-year-old man with a past history of trips to Bangkok is erratic in taking his antiretroviral therapy. He presents with sudden onset of headache, confusion and prominent hallucinations.",
		answers: { a: "Benign hydrocephalus", b: "Cerebrovascular malformation", c: "Cryptococcal meningitis", d: "Hyperparathyroidism", e: "Hypothyroidism", f: "Inappropriate ADH syndrome", g: "Neuroleptic malignant syndrome", h: "Neuropsychiatric systemic lupus erythematosus (SLE) ", i: "Neurosyphilis", j: "Normal pressure hydrocephalus", k: "Water intoxication", l: "Wernicke's encephalopathy" },
		correctAnswer: "c"},
		{question: "For the following set of symptoms, please select the MOST LIKELY  cause from the list below.<br/><br/>Q.134    A 28 year old man is treated with 10mg risperidone daily. He has several episodes where his gaze becomes fixed upwards during a disturbance on the acute inpatient unit involving other patients. Nursing staff feel he is 'attention-seeking'.",
		answers: { a: "Acute Dystonias", b: "Akathisia", c: "Chronic Dystonia", d: "Dissociative disorder", e: "Malingering ", f: "Munchausen syndrome", g: "Oculogyric Crises", h: "Pseudo-parkinsonism", i: "Tardive Dyskinesia", j: "Torticollis" },
		correctAnswer: "g"},
		{question: "For the following question, please select the MOST ACCURATE  answer.<br/><br/>Q.135    Which of the following clinical features indicates that a patient will be more likely to respond to the augmentation of an antidepressant with lithium.",
		answers: { a: "Absence of comorbid ADHD", b: "Early morning wakening", c: "Initial insomnia", d: "Older age of onset", e: "Somatic complaints", f: "Three or more depressive episodes", g: "Weight loss" },
		correctAnswer: "f"},
		{question: "For the following patient, please select the individual(s) listed below who are  MOST CLOSELY associated with the development of the psychological treatment of choice.<br/><br/>Q.136    Melanie, a 20 year old woman, recently lost rights to unsupervised access to her 2 year old when she became abusive and threatening to her ex-partner, while they were in court to determine custody arrangements. She reported feeling increasingly wound up with his descriptions of her self-cutting.  She claimed that she ‘finally lost it' when he made mocking gestures behind the judge's back to indicate that she was crazy.  Melanie misses her baby desperately and has become increasingly suicidal.",
		answers: { a: "Aaron Beck ", b: "Albert Ellis ", c: "Bateman and Fonagy ", d: "Gerald Klerman and Myrna Weissman ", e: "Heinz Kohut ", f: "Jon Kabat-Zinn", g: "Otto Kernberg ", h: "Philip Barnard and John Teasdale ", i: "Sigmund Freud", j: "Steven Hayes and Robert Zettle ", k: "Zindel Segal and Mark Williams" },
		correctAnswer: "c"},
		{question: "For the following patient, please select the MOST RECOMMENDED  first line pharmacotherapy.<br/><br/>Q.137    A patient presents with symptoms of marked psychomotor slowing, mutism, waxy flexibility and unusual posturing. You are able to exclude a physical cause for the presentation.",
		answers: { a: "Amantadine ", b: "Aripiprazole", c: "Clozapine", d: "Lithium", e: "Lorazepam", f: "Olanzapine", g: "Sodium Valproate", h: "Venlafaxine" },
		correctAnswer: "e"},
		{question: "For the following description, please select the MOST APPROPRIATE  treatment.<br/><br/>Q.138    An augmenting agent to lower prolactin in those with symptomatic antipsychotic-induced hyperprolactinemia.",
		answers: { a: "Amisulpride", b: "Aripiprazole", c: "Benztropine", d: "Clozapine", e: "Electroconvulsive therapy", f: "Haloperidol", g: "Lorazepam", h: "Olanzapine", i: "Quetiapine", j: "Risperidone", k: "Ziprasidone" },
		correctAnswer: "b"},
		{question: "For the following patient, please select the MOST LIKELY  diagnosis.<br/><br/>Q.139    A 50  year old man presents with gradually emerging cognitive impairment. More prominent is the presence of gait disturbance, dysarthria and a pseudobulbar palsy.",
		answers: { a: "Alzheimer's Dementia", b: "Binswanger's disease", c: "Huntington's disease", d: "Lewy body Dementia", e: "Motor neurone disease", f: "Multi-infarct Dementia", g: "Parkinson's disease", h: "Pick's Disease", i: "Progressive supranuclear palsy", j: "Wernicke's encephalopathy" },
		correctAnswer: "b"},
		{question: "For the following patient, please select the state of addiction that BEST FITS the clinical situation described.<br/><br/>Q.140    A 53 year old man with a history of heavy alcohol use is able to return to work after a year and a half of sobriety even though he still desires to drink.",
		answers: { a: "Abstinence", b: "Abstinence in a controlled setting", c: "Abstinence in sustained remission", d: "Abuse", e: "Craving", f: "Lapse", g: "Mild Substance Use Disorder", h: "Relapse", i: "Salience", j: "Severe Substance Use Disorder", k: "Tolerance" },
		correctAnswer: "c"},
		{question: "<img src='CAP1_1_TO_1_3.gif'/><br/><br/>Having regard to the adjoining abstract and your other knowledge, please answer the following question:<br/><br/>Q.1.1  Select the option that best describes this research.  (1 mark)",
		answers: { a: "Case control observational study ", b: "Cohort observational study", c: "Cross sectional observational study", d: "Randomized intervention study", e: "Predictive trial", f: "Retrospective cohort study", g: "Two-arm parallel group pragmatic trial" },
		correctAnswer: "d"},
		{question: "<img src='CAP1_1_TO_1_3.gif'/><br/><br/>Having regard to the adjoining abstract and your other knowledge, please answer the following question:<br/><br/>Q.1.2  Which option below describes the MAIN advantage of this type of study.    (1 mark)",
		answers: { a: "Ability to assess the effect of a treatment intervention.", b: "Quick and easy.", c: "No loss of subjects during follow up.", d: "No risk of poor randomisation." },
		correctAnswer: "a"},
		{question: "<img src='CAP1_1_TO_1_3.gif'/><br/><br/>Having regard to the adjoining abstract and your other knowledge, please answer the following question: <br/><br/>Which option below BEST correlates to this statement:<br/><br/>Q.1.3  The aim of this study was to explore how treatment of depression in older adults:",
		answers: { a: "Might be possible by use of B vitamins alone.", b: "Might be successful with citalopram.", c: "Is more difficult in those with B vitamin deficiencies.", d: "May be augmented by B vitamins in conjunction with citalopram.", e: "Relates to diet." },
		correctAnswer: "d"},
		{question: "<img src='CAP1_4_TO_1_5.gif'/><br/><br/>Having regard to the adjoining Methodology excerpt and your other knowledge, please answer the following question. <br/><br/>Select the option below that BEST correlates to this statement:<br/><br/>Q.1.4  Subjects could be included if they:",
		answers: { a: "Lived alone in any part of Australia and were on the electoral roll ", b: "Lived in any institutional facility in Perth, Australia, and were aged over 50.", c: "Were aged over 50, community dwelling, and willing to travel to Perth to be in the study.", d: "Were of school age, had a major depressive episode and were residing in the greater Perth area. ", e: "Were aged over 50, community dwelling in Perth, Australia, and had a current Major Depressive Episode (MDE)." },
		correctAnswer: "e"},
		{question: "<img src='CAP1_4_TO_1_5.gif'/><br/><br/>Having regard to the adjoining Methodology excerpt and your other knowledge, please answer the following question. <br/><br/>Select the option below that BEST correlates to this statement:<br/><br/>Q.1.5  The change to the lower age of participants after the study started:",
		answers: { a: "Completely destroyed the utility of this study.", b: "Was much like a lottery system.", c: "Was a pragmatic response to difficulty recruiting, to allow power calculations to be met.", d: "Was likely influenced by the company making Citalopram." },
		correctAnswer: "c"},
		{question: "<img src='CAP1_6_TO_1_7.gif'/><br/><br/>Having regard to the adjoining Methodology excerpt and your other knowledge, please answer the following question.<br/><br/>Select the BEST option:<br/><br/>Q.1.6  As regards Power, this study was, in the end:",
		answers: { a: "Correctly powered", b: "Under powered ", c: "Over powered" },
		correctAnswer: "b"},
		{question: "<img src='CAP1_6_TO_1_7.gif'/><br/><br/>Having regard to the adjoining abstract and your other knowledge, please answer the following question:<br/><br/>Q.1.7  Regarding power calculations in general, which statement below is the MOST accurate:",
		answers: { a: "Being over powered is good, as it means your study will be considered more definitive.", b: "It is does not matter if your study is under-powered, only whether you get a statistically significant result.", c: "Larger studies are always best. You should always get as many participants as your funding allows.", d: "Over powered studies have a high probability of finding a statistically significant result, but that result may be of little clinical relevance.", e: "Studies with more treatment arms will need a lower number of participants to be correctly powered." },
		correctAnswer: "d"},
		{question: "<img src='CAP1_8.gif'/><br/><br/>Having regard to the adjoining Fig.1 and your other knowledge, please answer the following question:<br/><br/>Which option below is the MOST ACCURATE for the following statement:<br/><br/>Q.1.8  At randomisation:",
		answers: { a: "76 patients got no possibly active treatment.", b: "76 patients got antidepressant and folate; 77 patients got B12 and antidepressant.", c: "76 patients got placebo; 77 patients got vitamins and citalopram.", d: "76 patients got placebo and citalopram; ", e: "77 patients got B12, B6, folic acid and citalopram.", f: "Insufficient information is provided as to what was given to the various trial arms to determine this." },
		correctAnswer: "d"},
		{question: "<img src='CAP1_9_TO_1_10.gif'/><br/><br/>Having regard to Table 2 above, and your other knowledge, please answer the following question.<br/><br/>Q.1.9  Which option below is the MOST ACCURATE:",
		answers: { a: "Unadjusted analyses show that at the week 52 point, the vitamins treatment group had a statistically significant benefit over those receiving placebo.", b: "Those on placebo were more likely to have a  >50% reduction in their MADRS score at week 12 but that result was not statistically significant.", c: "The numerator for the relapse after week 12 section is lower than for the other sections due to patients lost to follow up.", d: "The vitamins treatment group showed possible benefit within the first twelve weeks of treatment." },
		correctAnswer: "b"},
		{question: "<img src='CAP1_9_TO_1_10.gif'/><br/><br/>Having regard to Table 2 above, and your other knowledge, please answer the following question.<br/><br/>Q.1.10  Which option below is the MOST ACCURATE:",
		answers: { a: "Of those patients who were considered to have a remission of symptoms in the first 12 weeks, those receiving vitamins were statistically significantly less likely to relapse by the 52 point week than those on placebo.", b: "When relapse occurred, it was usually between the 26 and 52 week point, regardless of treatment.", c: "Most improvement in the MADRS occurred between week 8 and week 12 for the group getting vitamins.", d: "There was a mistake in calculating the odds ratios (OR) for relapse after week 12, as clearly if 5/57 on vitamins relapsed, and 10/57 on placebo relapsed, then the rate of relapse on vitamins is 50% that of placebo, so the OR should be 0.5." },
		correctAnswer: "a"},
		{question: "<img src='CAP1_11.gif'/><br/><br/>Having regard to the adjoining Fig.2 and your other knowledge, please answer the following question:<br/><br/>Which option below is the BEST answer:<br/><br/>Q.1.11  Which option below is the BEST answer: This graph shows that in terms of reducing the MADRS score for depression:",
		answers: { a: "Vitamins show a statistically significant advantage over placebo at the 12 week mark.", b: "Vitamins show a statistically significant advantage over placebo at the 26 week mark.", c: "There is no point at which either placebo or vitamins show a statistically significant superiority.", d: "Vitamins show an advantage at the 26 and 52 week point over placebo." },
		correctAnswer: "c"},
		{question: "<img src='CAP1_12.gif'/><br/><br/>Having regard to the adjoining abstract excerpt, other excerpts from this paper already provided, and your other knowledge, please answer the following question:<br/><br/> Which option below is MOST accurate:<br/><br/>Q.1.12  This conclusion is:",
		answers: { a: "A fair summary of the information in the paper and B vitamins should routinely be prescribed to older adults with depression", b: "Untrue as B vitamins have significant risks in elderly patients that they have failed to mention", c: "An overstatement of their findings.  This is a one-off study with fewer participants that their power calculations suggested they needed.  It is too early to state that replication of the findings would mandate vitamins in treatment guidelines.  ", d: "An incomprehensible conclusion.  If B vitamins did not increase the 12 week efficacy of antidepressant treatment, it is hard to understand why you would add them to treatment if another study had the same negative finding." },
		correctAnswer: "c"},
		{question: "Having regard to excerpts from this paper provided, and your other knowledge, please answer the following question:<br/><br/>Which option below is the BEST answer.<br/><br/>Q.1.13  In general, editors of journals should:",
		answers: { a: "Be trusted to have ensured all conclusions in a journal as esteemed as the Lancet or the British Journal of Psychiatry are correct.", b: "Print only positive findings, so that we do not need to waste precious time reading negative studies which add little to the literature.", c: "Aggressively vet the wording of abstracts in particular, as authors are often keen to get their findings established as being of great clinical significance, whether they are or not.", d: "Preferentially publish papers submitted by professors of psychiatry, as they are more likely to have written a high quality paper than those not of professorial standard." },
		correctAnswer: "c"},
		{question: "<img src='CAP2_1_TO_2_4.gif'/><br/><br/>Having regard to the adjoining abstract excerpt and your other knowledge, please answer the following question:<br/><br/> Select the BEST answer from the list below.<br/><br/>Q.2.1 A systematic review is best described as exploring all:",
		answers: { a: "Available literature on a specific topic.", b: "Available research studies on a specific topic.", c: "Current clinical guidelines.", d: "Validation studies." },
		correctAnswer: "b"},
		{question: "<img src='CAP2_1_TO_2_4.gif'/><br/><br/>Having regard to the adjoining abstract excerpt and your other knowledge, please answer the following question:<br/><br/> Select the BEST answer from the list below<br/><br/>Q.2.2  The aim of this study was to explore:",
		answers: { a: "How a service can understand recovery from a personality disorder.", b: "How individuals experience recovery from a personality disorder.", c: "Living with a personality disorder.", d: "Personal recovery from a mental illness.", e: "Recovery from a personality disorder." },
		correctAnswer: "b"},
		{question: "<img src='CAP2_1_TO_2_4.gif'/><br/><br/>Having regard to the adjoining abstract excerpt and your other knowledge, please answer the following question:<br/><br/> Select the BEST answer from the list below<br/><br/>Q.2.3  	A systematic review differs from a literature review in that eligibility criteria are developed based on:",
		answers: { a: "Interventions and comparisons relevant to the question being explored.", b: "Population and outcome of interest, and interventions.", c: "Population and outcomes of interest, interventions and comparisons.", d: "Population, outcomes of interest and comparisons." },
		correctAnswer: "c"},
		{question: "<img src='CAP2_1_TO_2_4.gif'/><br/><br/>Having regard to the adjoining abstract excerpt and your other knowledge, please answer the following question:<br/><br/> Select the BEST answer from the list below<br/><br/>Q.2.4  A systematic review of qualitative studies can be undertaken by a:",
		answers: { a: "Meta-analysis.", b: "Meta-synthesis.", c: "Statistical test for heterogeneity.", d: "Statistical test for homogeneity." },
		correctAnswer: "b"},
		{question: "<img src='CAP2_5.gif'/><br/><br/>Having regard to the adjoining abstract excerpt and your other knowledge, please answer the following question:<br/><br/> Select the BEST answer from the list below<br/><br/>Q.2.5  Qualitative data reports would NOT include:",
		answers: { a: "Analysis by synthesis.", b: "Discourse analysis.", c: "Interpretive phenomenological analysis", d: "(IPA).", e: "Thematic analysis." },
		correctAnswer: "a"},
		{question: "<img src='CAP2_6.gif'/><br/><br/>Having regard to the adjoining excerpt, Figure 1, the abstract and your other knowledge, please answer the following question:<br/><br/>Select the BEST answer from the list below.<br/><br/>Q.2.6  Studies could be included in the above review if the research article:",
		answers: { a: "Was about how a significant other felt about the individual’s recovery.", b: "Was about individuals with personality traits.", c: "Was about recovery from methamphetamine dependence in antisocial personality disorder. ", d: "Explored recovery measured only by a self-report Likert-type scale.", e: "Was able to be accessed on-line." },
		correctAnswer: "e"},
		{question: "<img src='CAP2_7.gif'/><br/><br/>Having regard to the adjoining excerpt, Figure 1, the abstract and your other knowledge, please answer the following question:<br/><br/>Select the BEST answer from the list below.<br/><br/>Q.2.7  Which of the following is true of the review process:",
		answers: { a: "Each full text version should be reviewed according to inclusion criteria. ", b: "Reference lists of identified reports and editorial commentaries would broaden the search strategy.", c: "Review of the methodology section of each article would identify which articles should be included. ", d: "Review of the abstract and methodology section would exclude further papers not fulfilling criteria.", e: "Review of titles and abstracts only would enable the exclusion of all papers of irrelevance." },
		correctAnswer: "b"},
		{question: "<img src='CAP2_8.gif'/><br/><br/>Having regard to the adjoining excerpt, Figure 1, the abstract and your other knowledge, please answer the following question:<br/><br/>Select the BEST answer from the list below.<br/><br/>Q. 2.8   Select the answer from the list below which BEST describes the process set out in the excerpt:",
		answers: { a: "Critical interpretation.", b: "Expressive synthesis.", c: "Meta-study. ", d: "Meta-synthesis.", e: "Synthesis.", f: "Translational synthesis." },
		correctAnswer: "d"},
		{question: "<img src='CAP2_9_TO_2_10.gif'/><br/><br/>Having regard to the adjoining excerpt and your other knowledge, please answer the following question:<br/><br/>Q.2.9   With regard to interpreting statements about Safety and Containment:",
		answers: { a: "This may be delivered through networks, environments or relationships.", b: "This may mean individuals can adapt to moving between environments.", c: "This may only be delivered though social networks or environment.", d: "This may not be essential as a prerequisite for recovery", e: "The use of medication may be a moderating factor." },
		correctAnswer: "a"},
		{question: "<img src='CAP2_9_TO_2_10.gif'/><br/><br/>Having regard to the adjoining Table 3 and your other knowledge, please answer the following question:<br/><br/>Select the BEST answer from the list below.<br/><br/>Q.2.10   With regard to interpreting the first order quotes:",
		answers: { a: "Participants in the study by Katsakou et al wanted to get over their divorce.", b: "Participants in the study by Katsakou et al described difficulty with differences in their priorities.", c: "Stigma in relation to the experience of mental distress is unlikely to be significant. ", d: "Social Network support is unlikely to play a key role in recovery.", e: "Social network support in mental illness tends to be greater than for physical illness." },
		correctAnswer: "b"},
		{question: "Having regard to the abstract, other excerpts and figures provided above and your other knowledge, please answer the following question:<br/><br/>Select the BEST answer from the list below.<br/><br/>Q.2.11   Which of the following is a limitation to this study?",
		answers: { a: "Lack of coherence of the research.", b: "Lack of description of the synthesis process.", c: "Too many identified themes.", d: "The included studies were not rigorously sound. ", e: "Too many articles had to be excluded from the analysis." },
		correctAnswer: "e"},
        {
            question: "THIS IS THE LAST SLIDE OF THE MOCK EXAM. <br/><br/><em>IF YOU ARE FINISHED</em><br/> --Then CLICK the -SUBMIT QUIZ- button ABOVE. <br/>--SCROLL DOWN to the BOTTOM OF THIS WINDOW to see <em>YOUR FINAL RESULT.</em><br/><br/>---AFTERWARDS, you can press the -PREVIOUS QUESTION- & -NEXT QUESTION- buttons to review your answers:<br/>----Questions you answered CORRECTLY are in <font color='green'>GREEN </font><br/>----Questions you answered INCORRECTLY are in <font color='red'>RED </font><br/><br/><font color='gray'><em>You can click the right mouse button at the bottom of this page if you also want to print the results</em></font><br/><br/><br/><em>IF YOU ARE NOT FINISHED</em><br/>--Then DON'T press the -SUBMIT QUIZ- button. <br/> --INSTEAD, press the -PREVIOUS QUESTION- button to review past questions. <br/>--You will need to press the -NEXT SLIDE- button until you return to this page to find the -SUBMIT QUIZ- button.<br/><br/>!GOOD LUCK!",
            answers: {  },
            correctAnswer: ""
        },



  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

	var percentage = (numCorrect/(myQuestions.length-1)) * 100;
	var passingMark = 55;


	// show number of correct answers out of total


    resultsContainer.innerHTML = `The 2017 RANZCP MCQ passing mark was ${passingMark}%. <br/>Your final exam score is: ${percentage}%        (${numCorrect} out of ${myQuestions.length})`;
	resultsContainer.style.color = "red";


  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
};
document.onload = quizfunction();
