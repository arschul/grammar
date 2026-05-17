/**
 * texts-b2.js
 * Shared reading text database — B2 level (CEFR)
 * 20 texts, ~400–500 words each
 * Topics: work, travel, technology, food, habits & routine,
 *         health, sports, nature, movies & series, music, and more.
 *
 * Companion files:
 *   texts-a1.js (100–150 words, A1 level)
 *   texts-a2.js (150–250 words, A2 level)
 *   texts-b1.js (250–350 words, B1 level)
 *
 * USAGE (ES Module):
 *   import { texts } from './texts-b2.js';
 *
 * USAGE (plain <script> tag — no module needed):
 *   <script src="texts-b2.js"></script>
 *   // then access window.B2Texts.texts
 *
 * USAGE (GitHub raw URL / jsDelivr CDN):
 *   import { texts } from 'https://cdn.jsdelivr.net/gh/YOUR_USER/YOUR_REPO@main/texts-b2.js';
 */

const texts = [
  // ── 1. WORK ──────────────────────────────────────────────────────────────
  {
    id: 61,
    title: "The Gig Economy and the Future of Work",
    topic: "work",
    level: "B2",
    wordCount: 452,
    keywords: [
      { word: 'gig economy', definition: 'a labour market based on short-term contracts and freelance work rather than permanent jobs' },
      { word: 'autonomy', definition: 'the freedom to make your own decisions and work independently' },
      { word: 'bilateral', definition: 'involving two parties or sides' },
      { word: 'precariousness', definition: 'the state of being uncertain, unstable, or dependent on chance' },
      { word: 'entitlement', definition: 'a legal right to receive something, such as pay or leave' },
      { word: 'lobbying', definition: 'trying to influence politicians or officials to support your cause' },
      { word: 'salaried', definition: 'receiving a fixed regular payment for work, regardless of hours' },
      { word: 'regulatory', definition: 'relating to official rules and the bodies that enforce them' },
      { word: 'scaling', definition: 'increasing or decreasing the size of something quickly' },
      { word: 'categorize', definition: 'to put something into a group based on its characteristics' },
    ],
    questions: [
      { q: "According to the text, what key legal obligations have many gig platforms been able to avoid by classifying workers as independent contractors?", choices: ["Obligations related to workplace safety and environmental standards", "Obligations such as sick pay, holiday entitlement, pension contributions, and protection from dismissal", "Obligations related to national minimum wage legislation and collective bargaining", "Obligations to provide workers with company equipment and branded uniforms"], answer: 1 },
      { q: "What was the significance of Proposition 22 in California in 2020?", choices: ["It required gig companies to provide all workers with full employment rights", "It effectively exempted app-based companies from a law that would have required them to classify drivers as employees", "It introduced a new category of worker status specifically for platform-based workers", "It banned gig economy companies from operating in California until they reformed their practices"], answer: 1 },
      { q: "What did the UK Supreme Court rule in 2021 regarding Uber drivers?", choices: ["That Uber drivers were fully self-employed with no additional rights", "That Uber was responsible for all accidents caused by its drivers", "That Uber drivers were entitled to worker status, minimum wage, and paid holiday", "That Uber had to convert all drivers to salaried employees within two years"], answer: 2 },
      { q: "The text argues that the classification of gig workers is ultimately what kind of question?", choices: ["A technical legal question requiring specialist expertise to resolve", "A scientific question that economists can resolve with sufficient data", "A political question reflecting deeper disagreements about labor markets and corporate interests", "A judicial question that should be decided exclusively by national courts"], answer: 2 },
      { q: "How do many gig workers themselves experience the flexibility of gig work according to the text?", choices: ["Universally positively — all gig workers strongly prefer it to traditional employment", "As a genuine freedom that improves their quality of life significantly", "In contradictory ways — some value the independence while others experience it as compelled risk-bearing", "Negatively — the vast majority would prefer traditional employment if they had the choice"], answer: 2 },
    ],
    text: `Over the past two decades, a new model of employment has taken root in economies around the world. Loosely grouped under the term "gig economy," it encompasses the growing practice of hiring independent contractors, freelancers, and platform workers for short-term tasks rather than offering them traditional salaried positions with associated benefits and legal protections. Companies such as Uber, Deliveroo, and Upwork have become emblematic of this shift, but the phenomenon extends far beyond recognizable platform brands into virtually every sector of the economy.

Proponents of gig work emphasize its flexibility. For workers who want to set their own hours, pursue multiple income streams simultaneously, or combine paid work with caregiving or study, gig arrangements can offer a degree of autonomy that conventional employment rarely provides. For businesses, the model enables rapid scaling without the fixed costs and legal obligations associated with a permanent workforce. For consumers, competition among gig platforms has frequently driven down prices and improved convenience.

The critics, however, raise concerns that go to the heart of how labor rights have historically been constructed. Traditional employment law was designed around a bilateral relationship between employer and employee — one in which the employer gained the benefit of the worker's labor and, in exchange, accepted responsibility for their welfare: sick pay, holiday entitlement, pension contributions, protection from arbitrary dismissal. By classifying workers as independent contractors rather than employees, many gig platforms have been able to sidestep precisely these obligations while retaining many of the functional characteristics of an employer-employee relationship, including control over prices, schedules, and acceptable conduct.

The legal and regulatory responses to this tension have been uneven. In California, Proposition 22, passed in 2020, effectively exempted app-based transport and delivery companies from a state law that would have required them to classify drivers as employees — a significant victory for the platforms, achieved after a campaign reportedly costing over two hundred million dollars in industry lobbying. In the United Kingdom, the Supreme Court ruled in 2021 that Uber drivers were entitled to worker status, with rights to minimum wage and paid holiday. In Spain, the "Riders' Law" of 2021 established a legal presumption that delivery platform workers are employees.

What these varied responses illustrate is that the question of how to categorize and protect gig workers is ultimately not a technical legal question but a political one, reflecting deeper disagreements about the role of the state in regulating labor markets, the weight to be given to corporate interests relative to worker welfare, and the extent to which flexibility and security can be made genuinely compatible rather than in perpetual tension.

For many gig workers themselves, the experience defies easy categorization. Some genuinely prize the independence it affords them. Others describe a precariousness — the constant uncertainty of income, the absence of sick pay during illness, the lack of any institutional support in times of difficulty — that makes flexibility feel less like a freedom and more like a risk they have been compelled to bear alone.`
  },

  // ── 2. TRAVEL ────────────────────────────────────────────────────────────
  {
    id: 62,
    title: "Slow Travel and the Art of Being Somewhere",
    topic: "travel",
    level: "B2",
    wordCount: 448,
    keywords: [
      { word: 'flâneur', definition: 'a person who wanders through a city in a relaxed, observant way' },
      { word: 'dérive', definition: 'an unplanned drift through a city guided by atmosphere rather than destination' },
      { word: 'sensibility', definition: 'a particular way of experiencing and responding to the world' },
      { word: 'recalibration', definition: 'a small adjustment to restore the right balance' },
      { word: 'incidental', definition: 'happening as a minor part of something else; not planned' },
      { word: 'transactional', definition: 'relating only to a simple exchange, without personal connection' },
      { word: 'lineage', definition: 'a line of development or descent from earlier ideas or people' },
      { word: 'predetermined', definition: 'decided in advance, before events actually happen' },
      { word: 'unscheduled', definition: 'not planned in advance; free from fixed activities' },
      { word: 'recalibrations', definition: 'small adjustments that restore a better balance or perspective' },
    ],
    questions: [
      { q: "The text describes a 'peculiar anxiety' in modern travellers. What does this anxiety arise from?", choices: ["The fear that other travellers are visiting more interesting places than themselves", "A sense that they are not doing enough with their time and are collecting rather than absorbing experiences", "Worries about the safety and reliability of transport in unfamiliar countries", "The stress caused by managing complex itineraries and multiple bookings simultaneously"], answer: 1 },
      { q: "What is the concept of the 'flâneur' as introduced in the text?", choices: ["A French term for a tourist who spends too much money in a city", "A French philosophical concept of the urban wanderer moving through the city as aesthetic and intellectual engagement", "A type of slow traveller who refuses to use any modern technology while abroad", "A nineteenth-century travel writer who popularized the idea of visiting European cities on foot"], answer: 1 },
      { q: "What is the 'dérive' developed by the Situationist International?", choices: ["A French term for a detailed travel itinerary planned months in advance", "A spontaneous, unplanned drift through urban environments guided by atmosphere rather than purpose", "A method of navigating cities by following local people rather than maps", "A radical political movement that opposed all forms of international travel"], answer: 1 },
      { q: "What honest qualification does the text make about slow travel?", choices: ["Slow travel is actually faster than conventional tourism when properly organized", "In its purest form, it is partly a luxury of time, which is unevenly distributed", "Slow travel always produces more authentic experiences than conventional tourism", "Most cities actively discourage slow travel because it generates less tourist revenue"], answer: 1 },
      { q: "What does the text suggest is the deepest argument for slow travel?", choices: ["Slow travel is significantly cheaper than conventional tourism over time", "Slow travel produces better travel writing and more interesting stories", "Places, like people, require time before they will reveal anything that truly matters about themselves", "Slow travel reduces the environmental impact of tourism substantially"], answer: 2 },
    ],
    text: `There is a peculiar anxiety that afflicts many modern travellers — a nagging sense that they are not doing quite enough with their time in a given place. This anxiety has its own cultural infrastructure: the "top ten must-see" list, the Instagram location pin, the bucket list mentality that frames travel as a series of experiences to be collected rather than absorbed. The result is a form of tourism that can leave people feeling curiously unfulfilled, having moved through remarkable places without ever truly arriving in them.

Slow travel is, at one level, simply a reaction against this. The movement — to the extent that it constitutes a coherent movement rather than a loosely shared sensibility — advocates spending longer in fewer places, prioritizing depth of experience over breadth of coverage, and allowing the rhythms and textures of a place to reveal themselves gradually rather than extracting a predetermined set of highlights under time pressure.

The practical implications are significant. A slow traveller in a foreign city might spend a week in a single neighborhood, shopping at the same market stalls every morning, eating at the same restaurant several times until it feels like a local relationship rather than a transaction. They might walk routes without a fixed destination, allow themselves to get lost, and resist the pull of the famous sites in favor of the particular and the incidental — the sounds of a school yard at three in the afternoon, the political posters peeling off a municipal wall, the specific quality of light in a particular street at a particular time of day.

This approach has a philosophical lineage. The French poet Charles Baudelaire's concept of the flâneur — the urban wanderer who moves through the city as a form of aesthetic and intellectual engagement — anticipated many of slow travel's central intuitions. The Situationist International, a radical cultural movement in mid-twentieth-century France, developed the concept of the dérive: a spontaneous, unplanned drift through urban environments guided by atmosphere rather than purpose.

There are, of course, practical constraints on slow travel that privilege is required to navigate. Extended stays require either a flexible income or significant savings. Not everyone can afford to spend two weeks in a single location. Slow travel, in its purest form, is partly a luxury of time, which is unevenly distributed.

But many of its principles can be applied even within the constraints of a conventional holiday. Choosing to stay in one place rather than moving every few days; eating breakfast in the same café twice; allowing an afternoon to be genuinely unscheduled — these are modest recalibrations that can substantially alter the quality of an experience.

The deepest argument for slow travel is perhaps the simplest: that places, like people, require time before they will show you anything that matters about themselves.`
  },

  // ── 3. TECHNOLOGY ────────────────────────────────────────────────────────
  {
    id: 63,
    title: "Algorithmic Bias and the Illusion of Neutrality",
    topic: "technology",
    level: "B2",
    wordCount: 461,
    keywords: [
      { word: 'algorithm', definition: 'a set of rules a computer follows to solve a problem or make a decision' },
      { word: 'bias', definition: 'an unfair preference for or against something that affects judgement' },
      { word: 'recidivism', definition: 'the tendency of a convicted person to commit more crimes' },
      { word: 'misapprehension', definition: 'a wrong or mistaken understanding of something' },
      { word: 'discriminatory', definition: 'treating people unfairly because of their race, gender, or other characteristic' },
      { word: 'impartiality', definition: 'treating all people equally, without favouring any one group' },
      { word: 'demographic', definition: 'a particular group in society defined by age, gender, income, etc.' },
      { word: 'audit', definition: 'an official examination of something to check it is correct or fair' },
      { word: 'transparency', definition: 'the quality of being open and honest about how something works' },
      { word: 'aggregate', definition: 'combined or total, made up of many individual parts' },
    ],
    questions: [
      { q: "The text argues that the assumption of algorithmic objectivity rests on 'a fundamental misapprehension.' What is that misapprehension?", choices: ["The belief that algorithms are designed by neutral, unbiased engineers", "The belief that mathematical calculation is synonymous with impartiality, ignoring how algorithms learn from historical data", "The belief that computer systems are less expensive to run than human decision-makers", "The belief that all algorithms are deliberately programmed to discriminate"], answer: 1 },
      { q: "What does the recidivism prediction algorithm example illustrate about algorithmic bias?", choices: ["That algorithms cannot be trusted to make any predictions about human behavior", "That only criminal justice systems use biased algorithms", "That a system can produce discriminatory outcomes while being described as race-neutral by its developers", "That human judges always make more accurate predictions than algorithmic systems"], answer: 2 },
      { q: "Why are errors in facial recognition systems particularly consequential according to the text?", choices: ["They expose companies to expensive lawsuits in most countries", "They affect the quality of consumer products like phone cameras", "Because the technology is used in law enforcement, security, and fraud detection, where false positives can seriously harm those wrongly implicated", "Because millions of people use facial recognition daily for personal identification"], answer: 2 },
      { q: "What did a CV-screening algorithm penalize that revealed its embedded bias?", choices: ["CVs that mentioned attending less prestigious universities", "CVs that contained the word 'women's', such as 'women's chess club'", "CVs that listed skills not directly related to the advertised position", "CVs that were submitted after the application deadline"], answer: 1 },
      { q: "What does the text identify as the most fundamental requirement for addressing algorithmic bias?", choices: ["Replacing algorithms with human decision-makers in all high-stakes situations", "Requiring all technology companies to publish their algorithms publicly", "Abandoning the belief that mathematical procedure is synonymous with impartiality", "Establishing international standards for algorithm design and testing"], answer: 2 },
    ],
    text: `When a decision is made by an algorithm rather than a human being, it is tempting to assume that the process has thereby been made more objective. Algorithms, after all, do not have moods, personal prejudices, or conscious biases. They apply the same rules to every case. This intuition, while understandable, rests on a fundamental misapprehension of how algorithmic systems actually work — and the consequences of this misapprehension are, in some contexts, genuinely serious.

Machine learning algorithms, which underlie most modern AI systems, do not reason from first principles. They learn patterns from historical data and apply those patterns to new cases. The critical point is this: if the historical data reflects existing social inequalities, the algorithm will reproduce those inequalities, often with considerable precision. Worse, by presenting a discriminatory outcome as the product of mathematical calculation rather than human judgment, the algorithmic format can make that outcome appear more legitimate and therefore harder to challenge.

The examples of this in practice are both numerous and troubling. A widely used algorithm for predicting recidivism — the likelihood that a convicted person will reoffend — was found to systematically assign higher risk scores to Black defendants and lower risk scores to white defendants, independent of other factors. This algorithm was used to inform sentencing and parole decisions in courts across the United States. The developers maintained that the algorithm was race-neutral. The outcomes it produced were not.

Similar patterns have been documented in facial recognition systems, which have significantly higher error rates when applied to women and darker-skinned individuals, reflecting the composition of the predominantly male and predominantly white datasets on which many systems were trained. These errors are not trivial: facial recognition is used in law enforcement, airport security, and financial fraud detection. A false positive identification in these contexts can have serious consequences for the individuals wrongly implicated.

In hiring, algorithms used to screen CVs have been shown to disadvantage candidates whose backgrounds contain signals statistically associated with underperforming groups, even when those signals have no direct relationship to job performance. One such system was found to penalize CVs that included the word "women's" — as in "women's chess club" or "women's university" — because the training data reflected historical male dominance in the roles the system was designed to fill.

Addressing algorithmic bias is technically possible, though not simple. It requires deliberate attention to the composition and representativeness of training data, rigorous auditing of outputs across demographic groups, transparency about how systems work and what they optimize for, and meaningful human oversight of high-stakes decisions. It also requires a willingness to accept that optimization for accuracy in aggregate does not guarantee fairness at the level of the individual.

Most fundamentally, it requires abandoning the comforting fiction that mathematical procedure is synonymous with impartiality — and accepting that the values embedded in a dataset are as consequential as any that a human decision-maker might bring to the same question.`
  },

  // ── 4. FOOD ──────────────────────────────────────────────────────────────
  {
    id: 64,
    title: "Food Security in a Changing Climate",
    topic: "food",
    level: "B2",
    wordCount: 456,
    keywords: [
      { word: 'food security', definition: 'reliable access to enough nutritious food for an active, healthy life' },
      { word: 'crop yield', definition: 'the amount of a crop produced per unit of land' },
      { word: 'staple crop', definition: 'a basic food that forms the main part of a population\'s diet' },
      { word: 'precipitation', definition: 'water falling from the sky as rain, snow, or hail' },
      { word: 'soil erosion', definition: 'the wearing away of topsoil by wind, water, or farming activity' },
      { word: 'deprivation', definition: 'not having enough of the things that are necessary for a healthy life' },
      { word: 'adaptive', definition: 'able to change to suit new conditions' },
      { word: 'resilience', definition: 'the ability to recover from difficulties or adapt to change' },
      { word: 'commodity crop', definition: 'a crop grown in large quantities and sold on world markets, such as wheat or maize' },
      { word: 'irrigation', definition: 'a system for supplying water to land so that crops can grow' },
    ],
    questions: [
      { q: "What does research indicate happens to staple crop yields for every degree Celsius of warming above historical averages?", choices: ["Yields increase slightly in most regions due to longer growing seasons", "Yields decline by roughly six to ten percent, depending on location and variety", "Yields are unaffected below two degrees of warming", "Yields become unpredictable, sometimes increasing and sometimes declining"], answer: 1 },
      { q: "Why are both drought and intense rainfall events problematic for agriculture?", choices: ["Both increase the cost of crop insurance, making farming economically unviable", "Drought reduces yields directly, while intense rainfall causes erosion, waterlogging, and physical destruction", "Both make it impossible to use modern agricultural machinery effectively", "Both lead to the same type of crop disease, which is difficult to treat"], answer: 1 },
      { q: "The text argues that consequences of food system disruption are 'not distributed equally.' What is the main reason for this?", choices: ["High-income countries produce more food and are therefore less vulnerable to shortages", "Low-income countries have chosen to develop their economies in ways that make them more vulnerable", "High-income countries can compensate for shortfalls by importing, while low-income countries have far less capacity to absorb shocks", "Low-income countries have more variable climates that make adaptation more difficult"], answer: 2 },
      { q: "What systemic-level response does the text suggest as particularly important?", choices: ["Greater investment in genetically modified crops that are resistant to all climate conditions", "A reorientation toward greater agricultural diversity rather than overproduction of a small number of commodity crops", "The nationalization of agriculture in all countries to ensure equitable distribution", "The creation of a global food reserve managed by the United Nations"], answer: 1 },
      { q: "How does the text characterize the challenge of food security in a changing climate?", choices: ["Primarily a technical challenge that scientists are close to resolving", "Primarily an economic challenge that increased investment will solve", "As not simply technical, but political, economic, and ultimately ethical", "As primarily a logistical challenge of distribution rather than production"], answer: 2 },
    ],
    text: `The global food system feeds approximately eight billion people, and doing so requires a set of interlocking agricultural, logistical, and economic arrangements of extraordinary complexity. For most people in high-income countries, this complexity is invisible: food appears reliably in shops, its abundance taken for granted, its origins rarely considered. But the system that delivers this abundance is more fragile than it appears, and the stresses being placed upon it by climate change are accelerating in ways that demand serious attention.

Temperature is the most immediate variable. Crop yields for staple foods — wheat, maize, rice, and soybean — are sensitive to heat stress during critical growth phases, particularly during flowering and grain-filling. Studies have consistently found that for every degree Celsius of warming above historical averages, yields of these crops decline by roughly six to ten percent, depending on location and variety. In regions that already experience high ambient temperatures, even modest further warming can push conditions beyond the physiological tolerance of existing crop varieties.

Rainfall patterns are shifting in ways that compound this problem. Many of the world's most productive agricultural regions are experiencing either more variable precipitation — with longer dry spells punctuated by more intense rainfall events — or sustained reductions in annual rainfall driven by the displacement of historical weather systems. Both patterns are problematic: drought reduces yields directly, while intense rainfall events cause soil erosion, waterlogging, and in some cases the physical destruction of crops and infrastructure.

The consequences of food system disruption are not distributed equally. High-income countries have the financial resources to compensate for domestic production shortfalls by importing from elsewhere, to invest in irrigation and other adaptive technologies, and to absorb higher food prices without widespread deprivation. Low-income countries, particularly those in sub-Saharan Africa and South Asia where agriculture employs large proportions of the population and where food insecurity is already significant, have far less capacity to absorb these shocks.

Responses to the challenge operate at multiple scales. Plant scientists are developing crop varieties with greater heat and drought tolerance. Farmers are adapting their practices — changing planting times, introducing crop rotation, experimenting with drought-resistant varieties. Countries are investing in irrigation infrastructure and storage facilities that reduce post-harvest losses, which in some regions account for a startling proportion of total agricultural output.

At the systemic level, there are growing calls for a reorientation of global agricultural policy away from the overproduction of a small number of commodity crops toward greater diversity — both in the crops grown and in the diets consumed. Reduced reliance on a small number of staple crops increases resilience, since different species respond differently to climate stresses. Greater dietary diversity reduces the vulnerability created when a single crop fails.

The challenge is not simply technical. It is political, economic, and ultimately ethical: about who bears the cost of adaptation, and who is left without recourse when the system fails.`
  },

  // ── 5. HABITS & ROUTINE ──────────────────────────────────────────────────
  {
    id: 65,
    title: "The Neuroscience of Habit Formation",
    topic: "habits and routine",
    level: "B2",
    wordCount: 449,
    keywords: [
      { word: 'basal ganglia', definition: 'a group of brain structures that control automatic and routine movements' },
      { word: 'myelination', definition: 'the process of forming a protective sheath around nerve fibres, speeding up signals' },
      { word: 'prefrontal cortex', definition: 'the front part of the brain that controls conscious thought and decision-making' },
      { word: 'automaticity', definition: 'the ability to perform a task without conscious attention' },
      { word: 'habit loop', definition: 'the three-part cycle of cue, routine, and reward that drives habitual behaviour' },
      { word: 'craving', definition: 'a powerful desire for something' },
      { word: 'willpower', definition: 'the ability to control your thoughts and actions using mental effort' },
      { word: 'deliberation', definition: 'careful thought before making a decision' },
      { word: 'neuroscience', definition: 'the scientific study of the brain and nervous system' },
      { word: 'addiction', definition: 'a strong physical or mental dependence on a substance or behaviour' },
    ],
    questions: [
      { q: "What neurological process underlies the formation of habits in the brain?", choices: ["The growth of new neurons in the prefrontal cortex through a process called neurogenesis", "The progressive strengthening of neural pathways through myelination, reducing the need for conscious processing", "The gradual reduction in the brain's overall energy consumption as behaviors become automatic", "The development of new connections between the emotional and rational parts of the brain"], answer: 1 },
      { q: "In the 'habit loop' described by Charles Duhigg, what is the function of the reward?", choices: ["It provides motivation to begin the behavior for the first time", "It reinforces the association between the cue and the routine", "It signals to the brain that the behavior has been completed successfully", "It determines whether the habit will be stored as long-term or short-term memory"], answer: 1 },
      { q: "Why do the most effective habit-change strategies intervene at the level of the routine rather than attempting to eliminate the cue?", choices: ["Because cues are biological responses that cannot be changed through any behavioral intervention", "Because the cue and the reward are the most psychologically powerful parts of the habit loop", "Because eliminating the cue or suppressing the craving is difficult to achieve through willpower alone", "Because rewards are fixed by the brain's neurochemistry and cannot be altered"], answer: 2 },
      { q: "What did Phillippa Lally's research find about the time required to form a new habit?", choices: ["Most habits can be formed in exactly twenty-one days with consistent practice", "The average time for a behavior to reach automaticity was sixty-six days, with considerable individual variation", "Habits are formed most quickly when formed in response to strong emotional events", "The time required to form a habit is fixed at approximately ninety days for all people"], answer: 1 },
      { q: "What is the broader implication of the neuroscience of habit formation for people seeking to change their behavior?", choices: ["Change requires willpower above all else — the brain can be retrained quickly with sufficient motivation", "Genuine habit change requires patient consistency rather than sudden transformation, and the brain changes on its own biological schedule", "People with stronger prefrontal cortex activity will always find habit change easier than others", "Most habits are too deeply embedded to change after early adulthood"], answer: 1 },
    ],
    text: `Human beings are, to a remarkable degree, creatures of habit. Neuroscientists estimate that somewhere between forty and fifty percent of our daily behaviors are habitual — performed automatically, without conscious deliberation, in response to specific contextual cues. We brush our teeth on autopilot, take the same route to work without deciding to, reach for a cup of coffee at the same time each morning without consciously registering either the urge or the decision. This automaticity is not a flaw in our cognitive architecture. It is a feature — a highly efficient mechanism by which the brain conserves limited conscious processing resources for tasks that genuinely require them.

The neurological basis of habit formation centers on the basal ganglia, a cluster of structures deep within the brain that play a central role in procedural learning and routine behavior. When a behavior is repeated consistently in the same context, the neural pathways associated with it are progressively strengthened through a process called myelination — the formation of a fatty sheath around the axons that carry neural signals, which dramatically increases the speed and efficiency of neural transmission. Eventually, the behavior can be triggered and executed with minimal involvement of the prefrontal cortex, which governs conscious, deliberate thought.

This process follows a three-part structure that the habit researcher Charles Duhigg popularized as the "habit loop": a cue that triggers the routine, the routine itself, and a reward that reinforces the association. The cue can be almost anything — a time of day, a location, an emotional state, a preceding behavior. The reward need not be large; even a minor feeling of satisfaction or relief is sufficient to strengthen the association. Over repeated cycles, the brain begins to anticipate the reward when the cue appears, generating a craving that motivates the behavior before any conscious deliberation has taken place.

Understanding this architecture has practical implications for behavior change. The most effective strategies for replacing unwanted habits do not attempt to eliminate the cue or suppress the craving — both of which are difficult to achieve through willpower alone — but instead intervene at the level of the routine. By identifying the cue and the reward that a habit already provides, it becomes possible to design an alternative routine that satisfies the same underlying need while producing a more desirable outcome. This is the basis of approaches used in addiction treatment, weight management, and organizational behavior change.

What the neuroscience also makes clear is that the process takes time. Popular claims that habits can be formed in twenty-one days are not supported by research: a more rigorously conducted study by Phillippa Lally found that the average time for a behavior to reach automaticity was sixty-six days, with considerable individual variation. The implication is both humbling and encouraging. Genuine habit change is achievable, but it requires patient consistency rather than sudden transformation — and an understanding that the brain changes gradually, on its own biological schedule, rather than on ours.`
  },

  // ── 6. HEALTH ────────────────────────────────────────────────────────────
  {
    id: 66,
    title: "The Placebo Effect and What It Tells Us About Healing",
    topic: "health",
    level: "B2",
    wordCount: 458,
    keywords: [
      { word: 'placebo effect', definition: 'an improvement in a patient\'s condition caused by their belief in a treatment, not the treatment itself' },
      { word: 'pharmacological', definition: 'relating to drugs and their effects on the body' },
      { word: 'neuroimaging', definition: 'techniques for producing images of the brain\'s structure and activity' },
      { word: 'endogenous opioid', definition: 'a natural pain-relieving chemical produced by the brain' },
      { word: 'antagonist', definition: 'a substance that blocks the effect of another substance in the body' },
      { word: 'open-label', definition: 'a trial where both the doctor and patient know what treatment is being given' },
      { word: 'inert', definition: 'not active or producing any chemical effect' },
      { word: 'clinical trial', definition: 'a scientific study to test whether a treatment is safe and effective' },
      { word: 'mechanism', definition: 'the way in which something works or happens' },
      { word: 'mechanistic', definition: 'treating a complex thing as if it were a simple machine' },
    ],
    questions: [
      { q: "Why was the placebo originally introduced into clinical trial methodology?", choices: ["To test whether patients could detect the difference between real and fake medicine", "To demonstrate that a drug improves patients more than an inactive substitute, proving its specific effectiveness", "To reduce the costs of pharmaceutical trials by using cheaper substances", "To study the psychological characteristics of patients who responded to treatment"], answer: 1 },
      { q: "What do neuroimaging studies show happens when patients receive a placebo for pain?", choices: ["Brain activity decreases in areas associated with pain processing, suggesting real pain reduction", "The brain shows no measurable changes, confirming that improvement is purely psychological and reported", "Measurable changes occur in brain activity in regions associated with pain, reward, and emotional regulation", "The brain produces fewer pain-signaling chemicals while simultaneously generating stronger pain signals"], answer: 2 },
      { q: "What is significant about the finding that open-label placebos can be effective?", choices: ["It proves that the therapeutic relationship between doctor and patient is entirely responsible for all healing", "It challenges the assumption that conscious belief in a treatment is a prerequisite for the placebo effect", "It demonstrates that all medicines work entirely through placebo mechanisms rather than pharmacology", "It shows that doctors should always tell patients they are receiving placebos rather than real medicine"], answer: 1 },
      { q: "The text mentions that 'context' influences the strength of the placebo effect. Which of these is given as an example of contextual factors?", choices: ["The patient's age, sex, and genetic background", "The specific inactive substance chosen for the placebo preparation", "The warmth of the practitioner, the medical setting, and the color and size of a pill", "The time of day at which the treatment is administered"], answer: 2 },
      { q: "What broader conclusion about medicine and healing does the text draw from the placebo effect?", choices: ["That most conventional medicines are no more effective than placebos and should be replaced", "That illness and healing are exclusively psychological phenomena and biology is secondary", "That a purely mechanistic model of the body is inadequate — healing is never purely chemical", "That doctors should routinely prescribe placebos as the first line of treatment for all conditions"], answer: 2 },
    ],
    text: `Few phenomena in medicine are as simultaneously well-documented and poorly understood as the placebo effect. The basic observation — that patients frequently experience genuine, measurable improvements in their condition after receiving a treatment that contains no active pharmacological ingredient — has been replicated across thousands of clinical trials. Yet the mechanism by which an inert substance can produce real physiological change remains a subject of active scientific debate, and the ethical implications of the phenomenon for clinical practice remain unresolved.

The earliest systematic use of the placebo was as a control condition in clinical trials. To demonstrate that a drug is effective, researchers need to show not merely that patients improve after taking it, but that they improve more than patients who receive an identical-looking but pharmacologically inactive substitute. This requirement exposed a persistent and sometimes dramatic problem: the control group, receiving what was ostensibly nothing, frequently improved as well — sometimes almost as much as the treatment group.

Contemporary research has established that the placebo effect is not simply the result of patients reporting improvement they do not genuinely experience in order to please the experimenter, though this "demand characteristic" does play some role. Neuroimaging studies have shown that placebo administration produces measurable changes in brain activity in regions associated with pain processing, reward, and emotional regulation. Patients given placebo pain relief show elevated levels of endogenous opioids — the brain's own pain-suppressing chemicals — in ways that can be partially blocked by administering opioid antagonists, demonstrating that real neurochemical changes are occurring.

The magnitude of the placebo effect varies significantly with context. The manner in which a treatment is delivered — the warmth and authority of the practitioner, the apparent seriousness and sophistication of the medical setting, the color and size of a pill — all influence the strength of the response. In one much-cited study, open-label placebos — pills that patients were explicitly told contained no active ingredient — were found to produce significant improvements in irritable bowel syndrome symptoms, challenging the assumption that conscious belief in the treatment is a prerequisite for the effect to occur.

This last finding raises particularly intriguing questions for clinical practice. If the placebo effect can operate even when the patient knows they are receiving a placebo, this significantly complicates the ethical objection to its use — namely, that deploying it requires deceiving the patient. Some researchers are beginning to explore whether open-label placebos could be used deliberately as complementary treatments alongside conventional medicine, harnessing the body's own regulatory mechanisms without the ethical problems of deception.

What the placebo effect ultimately illustrates is the inadequacy of a purely mechanistic model of the body — one that treats illness and healing as exclusively biological phenomena, independent of the psychological and relational contexts in which they occur. Healing, the evidence suggests, is never purely chemical.`
  },

  // ── 7. SPORTS ────────────────────────────────────────────────────────────
  {
    id: 67,
    title: "Doping, Fairness, and the Ethics of Enhancement",
    topic: "sports",
    level: "B2",
    wordCount: 453,
    keywords: [
      { word: 'performance-enhancing', definition: 'designed to make an athlete faster, stronger, or more able' },
      { word: 'doping', definition: 'the use of banned drugs or methods to improve sports performance' },
      { word: 'lactate threshold', definition: 'the exercise intensity at which lactic acid builds up faster than the body can remove it' },
      { word: 'genetic mutation', definition: 'a change in a person\'s DNA that may affect how their body works' },
      { word: 'enhancement', definition: 'an improvement to something beyond its natural state' },
      { word: 'prohibition', definition: 'an official ban on something' },
      { word: 'integrity', definition: 'the quality of being honest and having strong moral principles' },
      { word: 'pharmacological', definition: 'relating to drugs and their effects on the body' },
      { word: 'pharmacological', definition: 'relating to the use of drugs and their effects on the body' },
      { word: 'coercive', definition: 'using pressure or threats to force someone to do something' },
    ],
    questions: [
      { q: "What does the example of Eero Mäntyranta illustrate about the concept of 'naturalness' in sport?", choices: ["That genetic testing should be mandatory for all elite athletes", "That athletes from certain countries have inherent physiological advantages", "That the distinction between genetic and pharmacological enhancement is difficult to justify on purely moral grounds", "That blood doping is more effective than any genetic advantage an athlete could possess"], answer: 2 },
      { q: "What is the text's argument about the line between permitted technological enhancement and prohibited pharmacological enhancement?", choices: ["It is a clear and consistent line based on well-established scientific principles", "It is maintained by institutional authority rather than any clear underlying principle of naturalness", "It is determined by the medical community and updated every four years", "It reflects a genuine philosophical distinction between what is natural and what is artificial"], answer: 1 },
      { q: "What is the philosophical case for reforming doping prohibition, as presented in the text?", choices: ["It would make sport more exciting and attract more spectators and commercial sponsors", "The current system is both inconsistent — arbitrarily prohibiting some enhancements while permitting others — and ineffective", "Most athletes already use performance-enhancing substances, so prohibition creates unfair disadvantages for those who follow the rules", "Scientific advances have made it impossible to distinguish between natural and enhanced performance"], answer: 1 },
      { q: "What is a key argument against reforming doping prohibition mentioned in the text?", choices: ["It would make sports competitions far too expensive to organize and regulate", "A permissive regime would place coercive pressure on athletes who do not wish to use pharmacological enhancement", "Permitting doping would reduce the global audience for sport significantly", "Most athletes strongly oppose reform because they value the current rules"], answer: 1 },
      { q: "According to the text, what unresolved question lies at the heart of the doping debate?", choices: ["How the anti-doping testing system can be made sufficiently accurate to detect all banned substances", "Who should bear the costs of anti-doping enforcement — athletes, governing bodies, or governments", "What sport is fundamentally for — a celebration of biological extremes, a test of character, or something else", "How to ensure that athletes in all countries have access to equal training conditions"], answer: 2 },
    ],
    text: `The prohibition of performance-enhancing substances in competitive sport rests on a set of intuitions that most people find immediately compelling: that sport should reward natural talent and disciplined training, that competitors should face each other on a level field, and that the integrity of athletic achievement depends on its being genuinely human — the product of bodies operating within their natural limits. These intuitions are real and widely shared. They are also, on closer examination, considerably more complicated than they first appear.

The category of "natural" in sport is already deeply unstable. Elite athletes do not simply train harder than recreational athletes; they are selected, in part, for genetic characteristics — cardiovascular efficiency, muscle fiber composition, lactate threshold — that they have done nothing to earn and that are distributed with radical inequality across the human population. Eero Mäntyranta, the Finnish cross-country skier who dominated his sport in the 1960s, was later found to have a genetic mutation that caused his blood to carry approximately fifty percent more oxygen than average. He was never accused of doping. His advantage was biological rather than pharmacological, and this distinction was considered morally decisive — but its justification is not obvious.

Technology is permitted to enhance performance in ways that would have seemed extraordinary to earlier generations of athletes. Carbon-fiber running blades, altitude tents that simulate high-altitude training conditions, customized nutrition protocols, advanced compression garments, and precisely engineered racing swimsuits have all altered what is physiologically possible. The line between permitted technological enhancement and prohibited pharmacological enhancement is maintained by institutional authority rather than by any clear underlying principle of naturalness.

The case for reforming or abandoning doping prohibition is made most forcefully by philosophers of sport who argue that the current system is both inconsistent and ineffective. Inconsistent, because it arbitrarily prohibits some forms of enhancement while permitting others with equally significant effects on performance. Ineffective, because the history of anti-doping enforcement is largely a history of sophisticated athletes staying one step ahead of testing regimes — using substances that are not yet banned, or not yet detectable, or cycling their use to fall below detection thresholds.

The case against reform is not without substance, however. There are genuine concerns about the coercive pressure that a permissive regime would place on athletes who did not wish to use pharmacological enhancement but felt compelled to do so in order to remain competitive. There are also significant health risks associated with many performance-enhancing substances when used without medical supervision at the doses required for competitive enhancement.

The debate ultimately cannot be resolved without clarity about what sport is fundamentally for — whether it is a celebration of the extremes of human biological possibility, a test of character and will, or something else entirely. And that, it turns out, is a question that sport itself has never definitively answered.`
  },

  // ── 8. NATURE ────────────────────────────────────────────────────────────
  {
    id: 68,
    title: "The Hidden Life of Forests",
    topic: "nature",
    level: "B2",
    wordCount: 455,
    keywords: [
      { word: 'mycorrhizal', definition: 'relating to a symbiotic relationship between fungi and plant roots' },
      { word: 'fungi', definition: 'organisms such as mushrooms that absorb nutrients from other matter' },
      { word: 'nutrients', definition: 'substances in food or soil that living things need to grow and survive' },
      { word: 'symbiotic', definition: 'describing a relationship between two organisms that benefit each other' },
      { word: 'photosynthesis', definition: 'the process by which plants use sunlight to convert carbon dioxide and water into energy' },
      { word: 'seedlings', definition: 'young plants that have recently grown from seeds' },
      { word: 'conduits', definition: 'channels through which something passes or is communicated' },
      { word: 'anthropomorphizing', definition: 'describing non-human things as if they have human feelings or intentions' },
      { word: 'superorganism', definition: 'a system of individual organisms that functions as a single living entity' },
      { word: 'permeable', definition: 'allowing things to pass through; not having fixed or solid boundaries' },
    ],
    questions: [
      { q: "In a mycorrhizal relationship, what does the tree provide to the fungi in exchange for enhanced nutrient absorption?", choices: ["Water and minerals drawn from deep layers of soil", "Protection from disease and environmental stress", "Sugars produced through photosynthesis", "Chemical signals that regulate the fungi's growth"], answer: 2 },
      { q: "What does research by Suzanne Simard demonstrate about the behavior of 'mother trees'?", choices: ["They actively suppress the growth of seedlings of competing species", "They channel additional nutrients through mycorrhizal networks to younger seedlings, particularly of the same species", "They produce chemical signals that warn other trees of predators but do not share resources", "They grow most vigorously when isolated from the mycorrhizal network by forest management"], answer: 1 },
      { q: "Why does the text caution against using the language of 'communication' and 'community' to describe tree behavior?", choices: ["Because these terms are legally restricted to human activities in many scientific publications", "Because it risks anthropomorphizing what are essentially biochemical processes operating through evolutionary selection", "Because trees are incapable of any form of coordination or resource sharing", "Because these terms are scientifically inaccurate and have been rejected by all leading ecologists"], answer: 1 },
      { q: "What model of forest ecology do these findings challenge?", choices: ["The model that forests are stable, unchanging ecosystems that require no human management", "The model of individual trees as competing autonomous organisms — the evidence suggests interdependence rather than pure competition", "The model that only old-growth forests have significant ecological value", "The model that tree species are fundamentally incompatible and cannot form mixed communities"], answer: 1 },
      { q: "What does the text suggest about a forest understood through the lens of these findings?", choices: ["A forest is better understood as a collection of competing individuals in a Darwinian contest", "A forest is better understood as a superorganism in which boundaries between individuals are permeable and resources flow in patterns of interdependence", "A forest is best understood as a collection of species whose interactions are random and unpredictable", "A forest is primarily defined by the species of trees it contains rather than the relationships between them"], answer: 1 },
    ],
    text: `For most of human history, forests were understood primarily in terms of what was visible: the trees themselves, the animals that moved through them, the timber and food they provided. The underground dimension of forest ecosystems — the vast, intricate networks of fungi and root systems through which trees exchange resources and, evidence increasingly suggests, information — was entirely beyond our awareness and largely beyond our imagining. The scientific investigation of these networks over the past three decades has transformed our understanding of what a forest actually is.

At the center of this transformation is the discovery of mycorrhizal networks — symbiotic relationships between trees and certain species of fungi in which the fungi attach to tree roots and dramatically extend their capacity to absorb water and nutrients from the soil. In exchange, the trees provide the fungi with sugars produced through photosynthesis. This relationship is ancient, having evolved approximately four hundred and fifty million years ago, and is present in the vast majority of the world's plant species.

What was less anticipated is the degree to which these fungal networks function as conduits for communication and resource sharing between trees. Research by forest ecologist Suzanne Simard and others has demonstrated that older, larger trees — sometimes called "mother trees" — actively channel additional nutrients through mycorrhizal networks to younger seedlings growing in their shade, particularly to seedlings of the same species. When a tree is stressed by drought, insect attack, or physical injury, it releases chemical signals through the network that appear to trigger defensive responses in neighboring trees, which may upregulate the production of enzymes associated with pest resistance before they are themselves directly attacked.

The language of "communication" and "community" applied to trees by popular science writers has been criticized by some ecologists as anthropomorphizing what are essentially biochemical processes operating through evolutionary selection rather than anything resembling purposeful behavior or social solidarity. This is a legitimate caution. The trees are not talking to each other in any sense that implies cognition or intent. But the objection does not diminish the functional significance of what is occurring, nor does it make the behavior less remarkable — it simply relocates the wonder from the realm of the mentalistic to the realm of the biological.

What these findings do unambiguously challenge is the older model of individual trees as the fundamental units of forest ecology, competing with one another for light, water, and nutrients in a Darwinian contest of independent organisms. The evidence suggests instead that a forest is better understood as a superorganism of sorts — a system in which the boundaries between individuals are permeable, in which resources flow in patterns that reflect something closer to interdependence than competition, and in which the health of the whole is connected to the health of its parts in ways that our mechanistic frameworks are still struggling to fully capture.`
  },

  // ── 9. MOVIES & SERIES ───────────────────────────────────────────────────
  {
    id: 69,
    title: "Auteur Theory and the Question of Artistic Vision",
    topic: "movies and series",
    level: "B2",
    wordCount: 447,
    keywords: [
      { word: 'auteur', definition: 'a director whose personal vision is considered the dominant creative force in their films' },
      { word: 'collaborative', definition: 'involving two or more people working together to create something' },
      { word: 'cinematographers', definition: 'the people responsible for composing and filming every image in a film' },
      { word: 'oeuvre', definition: 'the complete body of work produced by an artist or filmmaker' },
      { word: 'authorship', definition: 'the origin or ownership of a creative work; who is responsible for creating it' },
      { word: 'marginalized', definition: 'treated as unimportant or pushed to the edges of society or a field' },
      { word: 'institutional', definition: 'relating to established organisations and the rules and structures that govern them' },
      { word: 'screenwriter', definition: 'the person who writes the script, dialogue, and story for a film' },
      { word: 'canon', definition: 'the set of works generally accepted as the most important in a field' },
      { word: 'aesthetic', definition: 'relating to the visual style and artistic qualities of something' },
    ],
    questions: [
      { q: "Where did auteur theory originate, and who were its earliest proponents?", choices: ["In Hollywood studios, where directors sought to distinguish their work from other filmmakers", "In the pages of Cahiers du Cinéma, developed by critics including Truffaut and Godard", "In American film schools in the 1950s, influenced by European literary criticism", "In the British Film Institute, where a group of critics attempted to legitimize cinema as an art form"], answer: 1 },
      { q: "What is the core claim of auteur theory regarding the greatest directors?", choices: ["They consistently produce films that are commercially successful across all genres", "They impose a coherent personal vision recognizable across their entire body of work, regardless of genre or material", "They work exclusively with the same collaborators throughout their careers", "They always write their own screenplays and edit their own films"], answer: 1 },
      { q: "What is the most significant criticism raised against auteur theory regarding authorship?", choices: ["It places too much emphasis on the commercial aspects of filmmaking", "It exaggerates the importance of directors and ignores collaborators such as screenwriters and cinematographers", "It fails to account for the fact that some directors work across many different genres", "It applies only to European art cinema and cannot explain Hollywood film production"], answer: 1 },
      { q: "How does the text complicate the auteur framework in relation to the Hollywood studio system?", choices: ["Studio directors were so commercially constrained that none of them qualify as genuine auteurs", "In the studio system, directors often had little control over their projects, making it difficult to identify a personal vision without considerable critical ingenuity", "The studio system actually produced more authentic artistic visions than independent filmmaking", "Studio directors always had complete creative control but chose not to exercise it publicly"], answer: 1 },
      { q: "The text argues that expanding the cinematic canon has done which of the following to auteurist assumptions?", choices: ["Confirmed their validity by revealing previously overlooked visionary directors", "Both challenged the assumptions and complicated the question of what is being assessed when evaluating a filmmaker's vision", "Demonstrated that auteur theory applies equally to all national cinemas and filmmaking traditions", "Rendered auteur theory entirely obsolete as a tool for film criticism and scholarship"], answer: 1 },
    ],
    text: `Cinema is a collaborative art form on a scale that has no real equivalent in other creative traditions. A major film involves the contributions of hundreds of individuals — cinematographers, editors, composers, production designers, actors, sound engineers — each of whom brings expertise and creative judgment to the work. Yet the dominant critical framework through which films have been analyzed and celebrated since the 1950s assigns the primary creative authorship of a film to a single individual: the director. This framework, known as auteur theory, has profoundly shaped how films are marketed, reviewed, taught, and remembered — and it has been disputed, with considerable force, almost since its inception.

Auteur theory originated in the pages of the French film journal Cahiers du Cinéma in the early 1950s, where a group of young critics — including François Truffaut and Jean-Luc Godard, who would later become filmmakers themselves — argued that the greatest directors imposed a coherent personal vision on their films that was recognizable across their entire body of work, regardless of the genre, studio, or material they were working with. A "true" auteur, in this formulation, transformed the essentially industrial process of filmmaking into a medium of personal expression comparable to literature, painting, or music.

The attractions of this framework are evident. It provides a coherent organizing principle for film history and criticism, making it possible to discuss an individual's "oeuvre" in the way one might discuss the collected works of a novelist. It elevates cinema as an art form by asserting that its greatest examples are driven by individual artistic vision rather than commercial formula. And it often corresponds, at least partially, to something real: the films of Ingmar Bergman, Stanley Kubrick, or Wong Kar-wai do exhibit a distinctive and recognizable aesthetic that persists across different projects.

But the objections are significant. The screenwriter, for many people the most obvious candidate for creative authorship in narrative cinema, is typically marginalized in auteurist accounts, despite having crafted the story, dialogue, and structure that the director is said to have "realized." The contribution of directors of photography — who compose every image the audience sees — is similarly underacknowledged. In the classical Hollywood studio system, directors were often assigned to projects rather than choosing them, worked with scripts they had not written, and operated under tight institutional constraints. Identifying a personal vision in this context requires considerable critical ingenuity.

The auteur framework has also been criticized for the way it has historically privileged certain types of directors — predominantly white, Western, and male — while the contributions of women, people of color, and non-Western filmmakers were filtered through evaluative criteria designed around a different tradition. The expansion of the canon in recent decades has both challenged auteurist assumptions and complicated the question of what we are actually assessing when we evaluate a filmmaker's "vision."`
  },

  // ── 10. MUSIC ────────────────────────────────────────────────────────────
  {
    id: 70,
    title: "The Politics of Popular Music",
    topic: "music",
    level: "B2",
    wordCount: 451,
    keywords: [
      { word: 'dissent', definition: 'strong disagreement with an official or widely held opinion or policy' },
      { word: 'commodified', definition: 'turned into a product to be bought and sold for profit' },
      { word: 'incorporated', definition: 'absorbed into a larger system, often losing its original character' },
      { word: 'subculture', definition: 'a cultural group within a larger society with its own values and practices' },
      { word: 'galvanize', definition: 'to shock or excite people into taking action' },
      { word: 'colonialism', definition: 'the practice of one country dominating and exploiting another' },
      { word: 'complacency', definition: 'a feeling of uncritical satisfaction with oneself or one\'s situation' },
      { word: 'censored', definition: 'had content removed or blocked by an authority' },
      { word: 'neutralized', definition: 'made ineffective or harmless, especially by removing political content' },
      { word: 'practitioners', definition: 'people who actively practise a profession or art form' },
    ],
    questions: [
      { q: "What does the text identify as the source of reggae's political content?", choices: ["The personal religious beliefs of individual reggae artists", "The economically marginalized communities of Kingston, Jamaica, and a critique of colonialism, capitalism, and racial hierarchy", "The influence of American civil rights leaders on Jamaican musicians in the 1960s", "The explicitly political philosophy of the Jamaican government during reggae's emergence"], answer: 1 },
      { q: "What social conditions shaped British punk in the mid-to-late 1970s?", choices: ["Rising prosperity and consumer culture that many young people found alienating", "High unemployment, urban decay, and class resentment", "Government censorship of popular music and restrictions on public performance", "The influence of American punk bands who toured the UK and inspired local musicians"], answer: 1 },
      { q: "What does the text describe as the process of 'incorporation' in relation to popular music?", choices: ["The legal process by which music companies acquire the rights to artists' recordings", "The tendency for the commercial infrastructure to extract marketable elements while discarding political commitments", "The absorption of folk and traditional music styles into mainstream popular music production", "The process by which political movements adopt popular songs as their anthems"], answer: 1 },
      { q: "Why does the commercial infrastructure have a consistent tendency to depoliticize music according to the text?", choices: ["Because political music is generally of lower quality and therefore less commercially viable", "Because political commitments complicate the project of selling to the widest possible audience", "Because government censorship forces music companies to remove political content", "Because audiences fundamentally prefer entertainment to political engagement"], answer: 1 },
      { q: "What does the text say is required to assess the political significance of music accurately?", choices: ["Understanding the artist's personal political beliefs and career motivations", "Attention to what artists intended, what the industry did with those intentions, and what audiences actually heard", "Measuring the direct political impact of songs through analysis of voting behavior and protest attendance", "Comparing the commercial success of political and non-political music within the same genre"], answer: 1 },
    ],
    text: `The relationship between popular music and political dissent is long, complex, and frequently uncomfortable for all parties involved. Musicians have used their platform to criticize power, galvanize movements, and give voice to communities whose experiences were otherwise invisible in mainstream culture. Governments, corporations, and institutions have variously censored, co-opted, and commodified those same voices. The result is a history in which moments of genuine political expression exist alongside an equally persistent tendency for radical aesthetics to be absorbed into the entertainment industry with their political content neutralized.

The examples of music serving as a vehicle for political consciousness are well documented. The American folk revival of the 1950s and early 1960s, associated with artists like Pete Seeger, Woody Guthrie, and the young Bob Dylan, was explicitly connected to labor rights, civil rights, and anti-war activism. Reggae, emerging from the economically marginalized communities of Kingston, Jamaica in the late 1960s, carried a systematic critique of colonialism, capitalism, and racial hierarchy, most powerfully expressed in the work of Bob Marley, whose global reach brought these themes to audiences far beyond their geographic origin.

Punk, in both its British and American manifestations in the mid-to-late 1970s, was shaped by a reaction against what its practitioners saw as the complacency and commercialism of mainstream rock culture, as well as — particularly in the British context — by the social conditions of high unemployment, urban decay, and class resentment that characterized that period. Its DIY ethic challenged the gatekeeping structures of the music industry. Its confrontational aesthetics were deliberately designed to provoke and alienate.

What happened to punk is, in some respects, a parable for what has repeatedly happened to politically charged popular music. Within a few years of its emergence, punk's aesthetic elements — the fashion, the attitude, the musical energy — had been thoroughly incorporated into mainstream commercial culture, its political content diluted or discarded in the process. The record industry, which punk had partly defined itself against, signed, promoted, and profited from punk bands on an industrial scale.

This dynamic — what the cultural theorist Stuart Hall called "incorporation" — is not incidental to the relationship between popular music and politics. It is structural: the commercial infrastructure of the music industry has a consistent tendency to extract the marketable elements of a subculture while shedding its political commitments, because political commitments complicate the project of selling to the widest possible audience.

This does not mean that political music is inevitably futile or that its effects are entirely cancelled by incorporation. But it does mean that assessing the political significance of a song, a movement, or a genre requires attention not only to what artists intended but to what the industry did with those intentions — and, crucially, what audiences actually heard.`
  },

  // ── 11. SHOPPING ─────────────────────────────────────────────────────────
  {
    id: 71,
    title: "The Ethics of Consumption",
    topic: "shopping",
    level: "B2",
    wordCount: 446,
    keywords: [
      { word: 'consumerism', definition: 'the idea that buying and using goods is central to modern life and identity' },
      { word: 'ethical', definition: 'following moral principles about what is right and wrong' },
      { word: 'boycotting', definition: 'refusing to buy from or deal with a company as a form of protest' },
      { word: 'carbon footprint', definition: 'the total amount of carbon dioxide produced by a person\'s or organisation\'s activities' },
      { word: 'systemic', definition: 'relating to a whole system rather than individual parts of it' },
      { word: 'abdication', definition: 'the act of giving up a responsibility that should be yours' },
      { word: 'subsidize', definition: 'to support something financially, usually with government money' },
      { word: 'insufficient', definition: 'not enough; failing to meet the required standard or level' },
      { word: 'virtue', definition: 'moral goodness or a quality considered morally admirable' },
      { word: 'extraction', definition: 'the process of taking something out, especially natural resources' },
    ],
    questions: [
      { q: "What is the philosophical objection most frequently raised against the ethical consumerism framework?", choices: ["That it is too expensive for most consumers to practice consistently", "That it misallocates responsibility, placing on individuals the burden that should fall on corporations and governments", "That ethical labelling systems are unreliable and frequently misleading", "That it promotes cultural imperialism by imposing Western values on global production chains"], answer: 1 },
      { q: "What fact about the concept of the 'carbon footprint' does the text highlight?", choices: ["It was developed by environmental scientists in the 1990s as a public education tool", "It was invented by the United Nations to help governments measure national emissions", "It was popularized in a consumer advertising campaign by British Petroleum in the early 2000s", "It was originally a scientific measurement tool that was later adopted by environmental campaigners"], answer: 2 },
      { q: "How does the text characterize the objection that individual action is insufficient?", choices: ["As entirely correct and a reason to focus exclusively on political advocacy", "As a valid concern, but one that can itself become a convenient form of abdication", "As a misunderstanding of how systemic change actually happens in modern societies", "As a deliberate strategy promoted by corporations to discourage consumer activism"], answer: 1 },
      { q: "What evidence does the text offer that consumer pressure has produced measurable change?", choices: ["Consumer pressure has successfully reduced global carbon emissions by fifteen percent since 2000", "Consumer campaigns have forced changes in corporate behavior across food, fashion, and electronics industries", "Ethical consumerism has led to the collapse of several major multinational corporations", "Consumer boycotts have directly influenced government legislation in most developed countries"], answer: 1 },
      { q: "What does the text identify as the danger of treating ethical consumerism as a substitute for political action?", choices: ["It reduces the quality of products available to consumers", "It allows those responsible for the architecture of harmful systems to avoid accountability", "It concentrates purchasing power in the hands of a small wealthy minority", "It creates unrealistic expectations that cannot be sustained over time"], answer: 1 },
    ],
    text: `Each time we make a purchase, we participate — whether we are aware of it or not — in a global network of production, distribution, and exchange whose human, environmental, and political consequences extend far beyond the immediate transaction. The question of whether and how individual consumption choices can or should be guided by ethical considerations is one that has moved steadily from the margins of cultural debate toward its center, driven by growing awareness of the conditions under which many goods are produced and the environmental costs of contemporary consumption patterns.

The concept of "ethical consumerism" encompasses a wide range of practices: buying products certified as fair trade, prioritizing goods produced locally to reduce carbon miles, avoiding companies with documented records of human rights violations, choosing products with recyclable or minimal packaging, boycotting corporations whose political activities or values conflict with one's own. These practices are united by a common underlying premise: that consumer choices are not merely personal preferences but moral acts with consequences that extend to third parties.

The philosophical objection most frequently raised against this framework is not that it is wrong in principle but that it misallocates responsibility in a way that is both intellectually confused and politically convenient for those most responsible for the problems it addresses. Climate change is driven primarily by the decisions of large corporations and the governments that regulate them, not by the cumulative choices of individual consumers. The carbon footprint — now a ubiquitous concept in discussions of individual environmental responsibility — was popularized in a consumer advertising campaign by British Petroleum in the early 2000s, a fact that is widely cited as evidence of a deliberate strategy to shift moral responsibility from industrial producers to individual consumers.

There is real substance to this objection. Systemic problems require systemic solutions, and an excessive focus on individual consumer virtue can substitute a morally satisfying but structurally ineffectual form of action for the harder work of political organization and institutional change. The person who meticulously separates their recycling while voting for politicians who subsidize fossil fuel extraction has perhaps misallocated their moral energy.

And yet the objection can itself become a form of convenient abdication — a reason to conclude that since individual action is insufficient, it is therefore pointless. The evidence does not support this conclusion. Consumer campaigns have forced meaningful changes in corporate behavior across industries including food, fashion, and electronics. The growth of the organic food market, the decline of certain destructive fishing practices, the shift toward more sustainable packaging in major retailers — these changes were in part driven by consumer pressure translated through market mechanisms.

The most honest position is probably this: individual consumption choices matter, but they matter much less than collective political action — and the danger of treating the former as a substitute for the latter is real.`
  },

  // ── 12. ANIMALS & PETS ───────────────────────────────────────────────────
  {
    id: 72,
    title: "Factory Farming and the Question of Animal Welfare",
    topic: "animals and pets",
    level: "B2",
    wordCount: 454,
    keywords: [
      { word: 'confinement', definition: 'the state of being kept in a restricted space and unable to move freely' },
      { word: 'sentient', definition: 'able to experience feelings such as pain, pleasure, and distress' },
      { word: 'gestation', definition: 'the period during which an animal develops inside its mother before birth' },
      { word: 'welfare', definition: 'the health, comfort, and happiness of a person or animal' },
      { word: 'slaughtered', definition: 'killed, especially in large numbers, for food' },
      { word: 'neurological', definition: 'relating to the brain and nervous system' },
      { word: 'labelling', definition: 'putting information on packaging to tell consumers about a product' },
      { word: 'consciousness', definition: 'the state of being aware of and able to experience one\'s own feelings and surroundings' },
      { word: 'regulatory', definition: 'relating to official rules and the organisations that enforce them' },
      { word: 'reconcile', definition: 'to find a way to make two opposing ideas or situations acceptable together' },
    ],
    questions: [
      { q: "What tension does the text identify at the heart of discussions about pets and farmed animals?", choices: ["People are generally willing to spend more money on pet food than on ethically sourced meat", "Many people apply moral concern readily to pets while accepting conditions for farmed animals that are difficult to reconcile with the same intuitions", "Pet ownership has been declining while demand for meat has been increasing globally", "Most people believe that farm animals are less intelligent than pets and therefore require less protection"], answer: 1 },
      { q: "What does the Cambridge Declaration on Consciousness state?", choices: ["That the capacity for consciousness is unique to humans and a small number of great apes", "That non-human animals possess the neurological substrates that generate conscious experience", "That animal consciousness exists on a spectrum, with fish and insects at the lowest level", "That scientific evidence is insufficient to make any definitive claims about animal consciousness"], answer: 1 },
      { q: "What example of regulatory action to improve animal welfare does the text mention?", choices: ["The United States banned all forms of factory farming in 2018", "The EU banned battery cages for laying hens in 2012", "The UK introduced mandatory outdoor access for all farm animals in 2015", "The UN passed a global agreement on minimum animal welfare standards in 2020"], answer: 1 },
      { q: "Why do higher-welfare products remain a small fraction of total sales despite consumer awareness?", choices: ["Because most consumers actively prefer conventional farming methods when they understand them", "Partly because they are more expensive and partly because most consumers prefer not to engage closely with how their food is produced", "Because higher-welfare products are rarely available in mainstream supermarkets", "Because advertising regulations prevent higher-welfare products from marketing their differences"], answer: 1 },
      { q: "How does the text characterize the ethical question posed by factory farming?", choices: ["As primarily an economic question about the cost of food production", "As a question that has already been effectively answered by existing animal welfare legislation", "As one of the defining ethical questions of the current era, involving a tension between consumption habits, economic structures, and animal moral status", "As a question that is ultimately less important than issues of human poverty and inequality"], answer: 2 },
    ],
    text: `The industrialization of animal agriculture over the second half of the twentieth century produced a revolution in the scale and efficiency of food production that fundamentally altered the diet of much of the world. It also created conditions of animal confinement and suffering that, increasingly, a significant proportion of the public finds difficult to reconcile with widely held intuitions about the moral status of sentient creatures — intuitions that the same individuals often apply quite readily to the pets they keep in their homes.

The scale of industrial animal agriculture is difficult to fully comprehend. Approximately eighty billion land animals are slaughtered for food globally each year, the vast majority of them raised in conditions of intensive confinement that severely restrict their natural behaviors. Laying hens may be housed in battery cages so small they cannot spread their wings. Breeding pigs may spend most of their lives in gestation crates in which they cannot turn around. Broiler chickens are selectively bred for such rapid weight gain that many develop skeletal problems that impair their ability to walk.

The ethical arguments against these practices are grounded in a body of scientific evidence establishing that the animals involved are capable of experiencing pain, distress, boredom, and fear in ways that are neurologically and behaviorally recognizable as suffering. The Cambridge Declaration on Consciousness, signed in 2012 by a prominent group of neuroscientists, formally stated that non-human animals possess the neurological substrates that generate conscious experience. If this is accepted — and the scientific case for it has continued to strengthen — then practices that impose significant suffering on billions of sentient creatures for reasons of economic efficiency raise serious moral questions that are difficult to simply dismiss.

The responses from the industry, from policymakers, and from the public have been varied and incomplete. Regulatory frameworks in many jurisdictions have introduced some minimum welfare standards — the European Union banned battery cages for laying hens in 2012 — but enforcement is uneven, and the welfare improvements achieved by such measures are in many cases modest relative to the conditions that still prevail. Consumer labelling schemes for higher-welfare products have expanded, but higher-welfare products remain a small fraction of total sales, partly because they are more expensive and partly because most consumers prefer not to engage closely with information about how their food is produced.

The fundamental tension at the heart of this issue is between the genuine satisfaction and nutritional significance of meat consumption for many people and cultures, the economic structures that make cheap meat available at an unprecedented scale, and the moral status of the animals whose suffering that scale depends upon. How societies navigate this tension — and whether the political will for more substantial reform can be generated — is one of the defining ethical questions of the current era.`
  },

  // ── 13. EDUCATION ────────────────────────────────────────────────────────
  {
    id: 73,
    title: "Critical Thinking in the Age of Misinformation",
    topic: "education",
    level: "B2",
    wordCount: 449,
    keywords: [
      { word: 'misinformation', definition: 'false or inaccurate information, especially when it is spread unintentionally' },
      { word: 'proliferation', definition: 'a rapid and widespread increase in the number of something' },
      { word: 'decontextualized', definition: 'taken out of its original setting in a way that distorts its meaning' },
      { word: 'fact-checking', definition: 'the process of verifying whether a claim or piece of information is true' },
      { word: 'amplify', definition: 'to make something stronger, louder, or more widely distributed' },
      { word: 'epistemic', definition: 'relating to knowledge and how we come to know or believe things' },
      { word: 'credibility', definition: 'the quality of being trusted and believed' },
      { word: 'outrage', definition: 'a strong feeling of anger caused by something perceived as wrong or unjust' },
      { word: 'susceptibility', definition: 'the quality of being easily influenced or harmed by something' },
      { word: 'domain-specific', definition: 'applying only to a particular subject area, not to all areas of knowledge' },
    ],
    questions: [
      { q: "What is the 'continued influence effect' as described in the text?", choices: ["The tendency for people to share misinformation more widely than factual corrections", "The finding that corrections are often less persuasive than the original misinformation, especially when it confirms existing beliefs", "The observation that false information continues to spread even after platform removal", "The pattern by which misinformation influences behavior for years after it is first encountered"], answer: 1 },
      { q: "Why does the text argue that the commercial incentives of social media platforms and the epistemic interests of users are 'systematically misaligned'?", choices: ["Platforms charge users for access to accurate information while providing misinformation for free", "Algorithms optimized for engagement favor emotionally arousing content, which is not disproportionately true", "Social media platforms actively employ teams to create and spread misinformation for commercial gain", "Platforms share user data with political organizations that use it to spread targeted misinformation"], answer: 1 },
      { q: "What is the 'sophistication effect' in the context of susceptibility to misinformation?", choices: ["The finding that experts in a field are completely immune to misinformation in their area of expertise", "The pattern by which the belief that one is good at detecting false information can actually increase susceptibility to certain forms of it", "The observation that sophisticated misinformation is more difficult to correct than simple factual errors", "The tendency for educated people to create more sophisticated forms of misinformation than less educated people"], answer: 1 },
      { q: "The text argues that treating critical thinking education as the primary solution to misinformation risks doing what?", choices: ["Making students excessively skeptical about all sources of information, including reliable ones", "Allowing those responsible for the information environment's architecture to avoid accountability for the conditions they created", "Undermining public trust in educational institutions that are seen as promoting political agendas", "Reducing the quality of public debate by encouraging overly analytical responses to complex emotional issues"], answer: 1 },
      { q: "What does the text identify as the structural conditions that enable and amplify misinformation?", choices: ["Individual cognitive biases that prevent people from evaluating information accurately", "Poor quality science education in schools and universities worldwide", "The commercial incentives of platforms, the economic fragility of quality journalism, and the political exploitation of epistemic uncertainty", "The deliberate policy of certain governments to fund misinformation campaigns against democratic institutions"], answer: 2 },
    ],
    text: `The proliferation of false, misleading, and decontextualized information across digital media platforms has generated widespread concern among educators, journalists, policymakers, and researchers. The problem is not new — misinformation and propaganda have been features of human communication throughout recorded history — but the current information environment has introduced a set of characteristics that make the challenge qualitatively different from its historical predecessors.

The speed at which information circulates online means that a false claim can reach millions of people before the infrastructure of fact-checking and expert correction has had time to engage with it. A correction, even when issued promptly, rarely reaches the same audience as the original claim, and research in cognitive psychology suggests that corrections are in any case often less persuasive than the initial misinformation — particularly when the false claim is emotionally resonant or confirms existing beliefs, a phenomenon known as the "continued influence effect."

The architecture of social media platforms has compounded these tendencies. Recommendation algorithms optimized for engagement preferentially amplify content that provokes strong emotional responses — outrage, fear, moral indignation — because such content reliably generates the clicks, shares, and comments on which platform revenue depends. Emotionally arousing content is disproportionately represented among the claims that spread most rapidly, and emotionally arousing content is not disproportionately true. The commercial incentives of the platforms and the epistemic interests of their users are, in this respect, systematically misaligned.

Into this environment, educators have introduced a growing emphasis on critical thinking — loosely defined as the capacity to evaluate information sources, identify logical fallacies, distinguish evidence from assertion, and assess the credibility and potential biases of those making knowledge claims. In some countries, media literacy has been introduced as an explicit component of the school curriculum, with Finland often cited as a model for its longstanding integration of critical media analysis into education at all levels.

The ambitions of this approach are admirable, but there is a significant danger in treating critical thinking as a straightforwardly teachable skill that, once acquired, inoculates against misinformation. Research suggests that critical thinking skills are often domain-specific — competent evaluators in one field may be quite poor evaluators in another — and that the belief that one is good at detecting false information can actually increase susceptibility to certain forms of it, a phenomenon sometimes called the "sophistication effect."

More fundamentally, the misinformation problem cannot be solved exclusively at the level of individual cognition. The structural conditions that enable and amplify misinformation — the commercial incentives of platforms, the economic fragility of quality journalism, the political exploitation of epistemic uncertainty — require structural responses. Critical thinking education is necessary but not sufficient, and treating it as the primary solution risks allowing those responsible for the architecture of the information environment to avoid accountability for the conditions they have helped create.`
  },

  // ── 14. WEATHER & CLIMATE ────────────────────────────────────────────────
  {
    id: 74,
    title: "Climate Grief and Environmental Psychology",
    topic: "weather",
    level: "B2",
    wordCount: 447,
    keywords: [
      { word: 'ecological grief', definition: 'sadness or distress felt in response to environmental destruction and species loss' },
      { word: 'climate anxiety', definition: 'ongoing worry or fear about climate change and its consequences' },
      { word: 'solastalgia', definition: 'distress caused by environmental changes to one\'s home environment' },
      { word: 'fatalism', definition: 'the belief that events are fixed and people cannot change them' },
      { word: 'disengagement', definition: 'withdrawing interest or involvement from a situation' },
      { word: 'therapeutic', definition: 'relating to treatment that improves health or well-being' },
      { word: 'medicalizing', definition: 'treating a social or emotional issue as a medical problem' },
      { word: 'pro-environmental', definition: 'relating to actions that help protect the environment' },
      { word: 'counterproductive', definition: 'having the opposite effect to the one intended' },
      { word: 'paralysis', definition: 'the inability to move or act, sometimes caused by extreme emotion' },
    ],
    questions: [
      { q: "What does the term 'solastalgia' refer to as defined in the text?", choices: ["The anxiety felt about the future impacts of climate change on one's homeland", "The distress experienced by people who witness the deterioration of their home environment while remaining in it", "The grief associated with the extinction of species one cares about", "The psychological condition of feeling responsible for environmental damage one cannot prevent"], answer: 1 },
      { q: "What did a 2021 survey of young people across ten countries find about climate anxiety?", choices: ["That only a minority of young people reported significant concern about climate change", "That fifty-nine percent were very or extremely worried and forty-five percent said these feelings affected their daily functioning", "That young people in developing countries were significantly more anxious than those in wealthy countries", "That climate anxiety is most severe in countries that are already experiencing extreme weather events"], answer: 1 },
      { q: "What is the argument against treating climate grief as a pathological condition requiring therapy?", choices: ["That most people who experience climate grief recover spontaneously without any intervention", "That medicalizing these responses risks individualizing a collective problem and depoliticizing it", "That therapy is simply too expensive to be a realistic solution for the millions of people experiencing these feelings", "That climate grief is fundamentally different from other forms of grief and cannot be treated using conventional methods"], answer: 1 },
      { q: "What does research suggest about the relationship between climate anxiety and pro-environmental behavior?", choices: ["Higher levels of anxiety always produce stronger and more sustained environmental action", "There is no measurable relationship between climate anxiety and behavior change", "The relationship is non-linear — moderate concern motivates action while high distress is associated with disengagement and fatalism", "Climate anxiety reduces environmental behavior because people feel personally guilty rather than politically engaged"], answer: 2 },
      { q: "How do the most nuanced practitioners in this field attempt to navigate these tensions?", choices: ["By developing new diagnostic categories for climate-related psychological distress", "By validating emotional reality without reinforcing hopelessness, channeling distress toward engagement, and insisting on collective action", "By encouraging clients to reduce their media consumption and focus on personal rather than global concerns", "By combining pharmaceutical treatment with cognitive behavioral therapy specifically designed for environmental concerns"], answer: 1 },
    ],
    text: `Environmental psychologists and mental health practitioners have, over the past decade, identified and begun to study a cluster of emotional responses to climate change and ecological loss that resist categorization within the existing frameworks of psychological distress. These responses — which include profound grief, anxiety, despair, anger, and a persistent sense of helplessness in the face of a threat that is real, large-scale, and inadequately addressed by existing institutions — have been described variously as "eco-grief," "climate anxiety," "solastalgia," and "ecological grief."

The term solastalgia, coined by Australian philosopher Glenn Albrecht in 2003, refers specifically to the distress experienced by people who witness the deterioration of their home environment — a form of homesickness experienced not by those who have left home but by those who remain as their home changes around them. The concept was initially developed in the context of communities living near open-cast mines, but Albrecht and others have extended it to encompass the broader psychological experience of living in a world undergoing accelerating ecological disruption.

Climate anxiety is somewhat differently oriented: it focuses on anticipated future loss rather than present or past deterioration. Studies conducted in multiple countries have found that significant proportions of young people — in some surveys, the majority — report feeling afraid, sad, or anxious about climate change, and that a meaningful subset report these feelings as interfering with their daily functioning. A 2021 survey of ten thousand young people across ten countries found that fifty-nine percent were very or extremely worried about climate change, and forty-five percent said that their feelings about it affected their daily life and functioning.

There is an important question about the appropriate clinical and cultural response to these reactions. One view is that they are rational responses to an objectively alarming situation — that the grief, fear, and anger are appropriate rather than pathological, and that medicalizing them risks individualizing what is fundamentally a collective problem and thereby depoliticizing it. Psychotherapy aimed at helping individuals feel better about a situation that objectively warrants distress might, on this view, be doing the individual and society a disservice.

The counterargument is that extreme emotional distress, whatever its cause, can itself become an obstacle to effective action. Research on the relationship between climate anxiety and pro-environmental behavior suggests a non-linear relationship: moderate levels of concern appear to motivate action, while high levels of distress are associated with disengagement, fatalism, and avoidance — responses that are understandable but counterproductive.

The most nuanced practitioners in this emerging field attempt to hold both perspectives simultaneously: validating the emotional reality of ecological grief without reinforcing hopelessness; channeling distress toward engagement rather than paralysis; and insisting, against the privatizing tendencies of therapeutic culture, that the appropriate response to a collective problem is ultimately collective action.`
  },

  // ── 15. TECHNOLOGY & SOCIETY ─────────────────────────────────────────────
  {
    id: 75,
    title: "The Attention Economy and the Colonization of the Mind",
    topic: "technology",
    level: "B2",
    wordCount: 453,
    keywords: [
      { word: 'attention economy', definition: 'an economic system based on capturing and selling human attention' },
      { word: 'variable reward schedule', definition: 'a pattern of unpredictable rewards that creates compulsive behaviour' },
      { word: 'dopamine', definition: 'a brain chemical associated with pleasure, motivation, and reward' },
      { word: 'autonomous selfhood', definition: 'the ability to form your own goals and values independently' },
      { word: 'polarization', definition: 'the process of dividing into opposing groups with extreme views' },
      { word: 'recommendation algorithm', definition: 'a computer program that suggests content based on your past behaviour' },
      { word: 'infinite scroll', definition: 'a web design feature that constantly loads new content as you scroll down' },
      { word: 'friction', definition: 'obstacles that slow down or interrupt a process' },
      { word: 'outrage', definition: 'extreme anger caused by something perceived as wrong or unfair' },
      { word: 'misaligned', definition: 'not pointing in the same direction; having different goals or interests' },
    ],
    questions: [
      { q: "The term 'attention economy' was coined by Herbert Simon. What was his original observation?", choices: ["That advertising was making it impossible for people to concentrate on meaningful work", "That a surplus of information creates a scarcity of the attention needed to process it", "That television was fundamentally altering the cognitive development of children", "That economic productivity depended on workers being able to direct their attention efficiently"], answer: 1 },
      { q: "What is the mechanism of 'variable reward schedules' as described in the text?", choices: ["A system where users receive larger rewards the longer they spend on a platform", "The same mechanism as slot machines — unpredictable rewarding content keeps users engaged in search of the next hit", "A pricing strategy where platform costs vary based on how much time users spend online", "A design technique that rewards users for sharing accurate rather than emotionally provocative content"], answer: 1 },
      { q: "What specific design feature does the text identify as removing the 'natural stopping point' of online content?", choices: ["The notification system that alerts users to new content while they are offline", "The autoplay feature and the infinite scroll that eliminates page endings", "The recommendation algorithm that suggests related content after each video", "The social sharing button that allows content to spread rapidly between users"], answer: 1 },
      { q: "The text notes that the relationship between the attention economy and polarization is 'more robustly established' than impacts on attention spans. What is the mechanism?", choices: ["Platform algorithms deliberately promote content from political extremists to maximize controversy", "Recommendation algorithms favoring content that provokes strong emotional reactions preferentially serve extreme, threatening, or morally inflaming content", "Social media companies profit directly from political advertising that is inherently divisive and polarizing", "The attention economy forces all media organizations to adopt more extreme editorial positions to compete for users"], answer: 1 },
      { q: "What does James Williams identify as the core threat posed by the attention economy?", choices: ["The damage to productivity caused by constant distraction from meaningful work", "The economic harm caused by people spending money on digital services rather than physical goods", "The threat to autonomous selfhood — the capacity to form one's own intentions and values without constant interruption by misaligned systems", "The physical health consequences of extended screen time and sedentary behavior"], answer: 2 },
    ],
    text: `Human attention is finite. There are only so many hours in a day and only so many cognitive resources available to process the information those hours contain. For most of human history, the scarcity of attention was a background condition of life that no one thought to exploit systematically. The rise of advertising changed this somewhat, but it was the digital revolution — and specifically the emergence of platforms whose revenue depends entirely on capturing and holding user attention for as long as possible — that transformed attention from an incidental resource into the primary commodity of the most valuable industry in the world.

The term "attention economy" was coined by psychologist and Nobel laureate Herbert Simon in the 1970s, who observed that a surplus of information creates a scarcity of the attention needed to process it. But the concept was given its contemporary shape by writers like Tim Wu, James Williams, and former Google design ethicist Tristan Harris, who documented in detail the sophisticated engineering techniques deployed by technology companies to capture and hold user attention.

These techniques are not passive. They include variable reward schedules — the same mechanism that makes slot machines compelling — whereby the unpredictable appearance of rewarding content (a like, a funny video, a piece of news that validates an existing belief) keeps users scrolling in search of the next dopamine-triggering hit. They include notification systems designed to create habitual checking behaviors by making the device a source of unpredictable but potentially important social information. They include interface designs that minimize friction — the infinite scroll that removes the natural stopping point of a page end; the autoplay feature that ensures one video transitions seamlessly to the next without requiring a positive decision to continue.

The consequences of this architecture are disputed but concerning. The impact on attention spans — the capacity to sustain focus on a single demanding task for an extended period — has generated significant research, with most findings suggesting a deterioration that is real but whose magnitude and causal attribution are contested. The impact on polarization is more robustly established: recommendation algorithms that optimize for engagement preferentially serve content that provokes strong emotional reactions, and outrage, as it turns out, is highly engaging. Content that is extreme, threatening, or morally inflaming travels faster and further than content that is measured, nuanced, or complex.

James Williams, who spent a decade working in the technology industry before becoming a philosopher of technology, describes the attention economy as posing a threat not primarily to productivity or time but to the conditions of autonomous selfhood — the capacity to form one's own intentions, pursue one's own goals, and develop one's own values without constant interruption and redirection by systems whose interests are fundamentally misaligned with those of the people they are designed to attract. Reclaiming that autonomy, he argues, is one of the defining political and personal challenges of the age.`
  },

  // ── 16. HOLIDAYS & CULTURE ───────────────────────────────────────────────
  {
    id: 76,
    title: "Cultural Appropriation and Cultural Exchange",
    topic: "holidays and celebrations",
    level: "B2",
    wordCount: 448,
    keywords: [
      { word: 'cultural appropriation', definition: 'adopting elements of another culture, especially by a more powerful group' },
      { word: 'syncretic', definition: 'combining elements from different cultures or belief systems' },
      { word: 'marginalized', definition: 'treated as less important, pushed to the edges of society' },
      { word: 'segregated', definition: 'kept apart from others based on race or another characteristic' },
      { word: 'porous', definition: 'allowing things to pass through; not rigidly separate' },
      { word: 'syncretic', definition: 'combining elements from different cultures or traditions into something new' },
      { word: 'absorbed', definition: 'taken in and made part of something larger, often losing its original character' },
      { word: 'reifies', definition: 'treats an abstract concept as if it were a fixed, concrete thing' },
      { word: 'porous', definition: 'not rigidly separated; allowing things to pass through or mix' },
      { word: 'categorical', definition: 'absolute and without exception' },
    ],
    questions: [
      { q: "The text argues that the mid-twentieth century appropriation of Black American music by white artists was a specific injustice. What made it unjust according to the text?", choices: ["White artists explicitly admitted that they were stealing Black artists' music for profit", "The borrowing operated within a structure of racial inequality that determined who could profit from cultural exchange", "The music itself was fundamentally altered and damaged by the process of appropriation", "White artists refused to acknowledge the Black origins of the music they performed"], answer: 1 },
      { q: "What is the main philosophical problem the text identifies with the broader principle that cultural elements 'belong' to their group of origin?", choices: ["It creates practical difficulties for international copyright law and intellectual property rights", "It contradicts the view held by most anthropologists that all cultures are equally valid", "All cultural production is syncretic — the historical record shows it is the product of contact, exchange, and transformation across porous boundaries", "It is impossible to determine the origin of most cultural elements because they have changed so much over time"], answer: 2 },
      { q: "What does the text identify as distinguishing cultural exchange from cultural appropriation?", choices: ["The nationality and ethnic background of the artist producing the work", "Genuine respect, acknowledgment of origin, support for source communities, and absence of distorting power dynamics", "Whether the cultural element has been significantly transformed or reproduced unchanged", "Whether the borrowing occurs between communities with similar or different economic statuses"], answer: 1 },
      { q: "What does the text suggest is the danger of the framework that asks 'who is permitted to use what'?", choices: ["It encourages artists to avoid all forms of cultural influence, producing creative stagnation", "It reifies cultural boundaries and can be used to police rather than celebrate diversity", "It gives too much power to community leaders who may not represent all members of a cultural group", "It leads to a proliferation of legal disputes that harm creative industries economically"], answer: 1 },
      { q: "What reframing does the text suggest as more productive than debates about cultural ownership?", choices: ["Focusing on whether cultural borrowing produces commercially successful art that benefits the broader economy", "Establishing international regulatory bodies to oversee all instances of cross-cultural artistic influence", "Shifting toward political and economic questions — who profits, who is recognized, and who controls the telling of whose story", "Encouraging all artists to declare their cultural influences and obtain formal permission before incorporating them"], answer: 2 },
    ],
    text: `Few debates in contemporary cultural life generate as much heat as the question of cultural appropriation — the adoption, borrowing, or transformation of elements from one culture by members of another, particularly when the borrowing flows from a dominant cultural group toward one that has been historically marginalized, exploited, or oppressed. The debate is real and the concerns underlying it are genuine. It is also, in its more absolutist forms, philosophically problematic in ways that deserve careful examination.

The concept draws its force from historical contexts of specific injustice. When elements of Black American music — blues, jazz, rhythm and blues — were performed and commercially marketed by white artists to white audiences in the mid-twentieth century, while Black artists were segregated from the commercial infrastructure that would have allowed them to benefit fully from their own cultural innovations, something that deserves the word "appropriation" was occurring. The borrowing was not innocent: it operated within a structure of racial inequality that determined who could profit from cultural exchange and who could not.

The philosophical difficulty arises when this specific historical analysis is generalized into a broader principle — that cultural elements "belong" to the group from which they originate and should not be adopted by outsiders without permission, or at all. Culture does not work this way. All cultural production is syncretic — the product of contact, exchange, borrowing, and transformation across porous boundaries. The history of music alone demonstrates this with extraordinary clarity: rock and roll emerged from the convergence of blues, gospel, country, and Western swing; jazz was a synthesis of African rhythmic traditions, European harmonic structures, and specifically American urban experience; reggae absorbed influences from jazz, rhythm and blues, and Jamaican folk traditions. The idea that cultures are — or should be — hermetically sealed from one another runs against the entire historical record.

The concept of cultural exchange — as distinct from appropriation — requires something more than a simple transfer of cultural elements. It implies a relationship of genuine respect and understanding, acknowledgment of origin, support for the communities whose creativity is being drawn upon, and an absence of the distorting power dynamics that characterized the mid-century music industry. These are real and meaningful distinctions, but they are distinctions of kind and context rather than categorical prohibitions on cross-cultural influence.

The most productive reframing of the debate may be to shift the question from "who is permitted to use what" — a framework that reifies cultural boundaries and can be used to police rather than celebrate diversity — toward questions of power, economic justice, and credit. Who profits? Who is recognized? Whose story is being told, and who is telling it? These are political and economic questions as much as cultural ones, and they are more likely to yield useful answers than metaphysical debates about cultural ownership.`
  },

  // ── 17. TRANSPORT & URBAN LIFE ───────────────────────────────────────────
  {
    id: 77,
    title: "The Automobile and the Shape of Modern Life",
    topic: "travel",
    level: "B2",
    wordCount: 452,
    keywords: [
      { word: 'contingent', definition: 'dependent on something else; not fixed or inevitable' },
      { word: 'bidirectional', definition: 'working or moving in two directions' },
      { word: 'subsidy', definition: 'financial support given by a government to reduce costs' },
      { word: 'pathologies', definition: 'harmful or dysfunctional conditions produced by a system or way of life' },
      { word: 'particulate matter', definition: 'tiny particles of dust or smoke in the air that harm health' },
      { word: 'epidemics', definition: 'widespread occurrences of a disease or problem in a community' },
      { word: 'car-dependent', definition: 'designed in a way that makes owning a car necessary' },
      { word: 'liveability', definition: 'the quality of an environment that makes it pleasant to live in' },
      { word: 'spatial', definition: 'relating to space and the positions of things' },
      { word: 'pervasive', definition: 'present or spreading through every part of something' },
    ],
    questions: [
      { q: "The text describes the relationship between cars and cities as 'bidirectional.' What does this mean?", choices: ["Car ownership has both positive and negative effects on urban life simultaneously", "Cars were built for roads, roads were built for cars, and cities were redesigned around roads, creating mutual dependency", "The automobile industry and city governments have equal influence over urban transportation policy", "Car culture affects the rich and poor in different directions — benefiting some while harming others"], answer: 1 },
      { q: "What is the text's argument about car ownership in car-dependent environments?", choices: ["Car ownership is always a free choice that reflects the genuine preferences of residents", "In environments designed around cars, ownership is not a free choice but the only rational response to infrastructure that makes alternatives impractical", "Most people in car-dependent areas would prefer to use public transport but cannot afford it", "Car ownership is a status symbol that people choose for social rather than practical reasons"], answer: 1 },
      { q: "The text argues that the transition to electric vehicles does not solve the 'broader pathologies of car-dependent urban design.' Which of these reasons is given?", choices: ["Electric vehicles are too expensive for most urban residents to afford", "Electric vehicles still dominate public space, impose congestion and accident costs, and require vast subsidized infrastructure", "Electric vehicles have a larger environmental footprint than conventional cars due to battery production", "Electric vehicles are not yet reliable enough to replace conventional cars in most urban environments"], answer: 1 },
      { q: "What public health consequence of car dependency does the text identify beyond road accident mortality?", choices: ["The spread of respiratory diseases caused by automobile manufacturing processes", "The psychological stress caused by commuting long distances to work every day", "The contribution of air pollution and car-dependent spatial design to epidemics of obesity, diabetes, and depression", "The social isolation caused by urban sprawl that separates residential areas from community facilities"], answer: 2 },
      { q: "What is the text's ultimate argument about how many cars urban environments need?", choices: ["The current number of cars in cities is broadly appropriate and does not need to be reduced significantly", "Considerably fewer cars than currently exist — not as a sacrifice but as a gain in liveability, health, equity, and public space quality", "The number of cars should be determined by user demand rather than by urban planners or governments", "Cities should aim to eliminate all private vehicles within twenty years and replace them entirely with public transport"], answer: 1 },
    ],
    text: `No single technology has done more to reshape the physical environment of modern life than the automobile. The car did not merely offer a new means of getting from place to place; it fundamentally reorganized the spatial logic of cities, suburbs, and rural areas; restructured patterns of work, social life, and commerce; and generated a set of economic, political, and cultural dependencies so deep and pervasive that they now feel like natural features of the landscape rather than the contingent outcomes of specific choices made under specific conditions.

The relationship is, to an extraordinary degree, bidirectional. Cars were built for roads; roads were built for cars; cities were redesigned around roads; and so a physical environment came into existence in which car ownership gradually shifted from a luxury to a practical necessity for large proportions of the population. In much of the United States, and in many suburbs and smaller cities elsewhere, the infrastructure built around the assumption of car ownership has made genuine alternatives impossible for most residents. There is no walkable neighborhood, no useful transit network, no safe cycling infrastructure. In this context, the choice to own a car is not really a free choice at all — it is the only rational response to an environment that has been designed to make every other option impractical.

The environmental consequences of this arrangement are now well understood: transport is typically among the largest sources of greenhouse gas emissions in any high-income country, and the private car is the dominant contributor within the transport sector. The public health consequences are less widely appreciated. Air pollution attributable to vehicle emissions — nitrogen dioxide, particulate matter, ground-level ozone — contributes to respiratory and cardiovascular disease on a scale that exceeds road traffic accidents as a cause of mortality. The spatial separation of activities enforced by car-dependent urban design reduces physical activity in ways that contribute to the epidemics of obesity, diabetes, and depression that characterize many wealthy societies.

The transition toward electric vehicles, while significant in emissions terms, does not address the broader pathologies of car-dependent urban design. Electric cars produce fewer direct emissions but still require enormous material inputs for manufacturing, still dominate public space in ways that exclude pedestrians and cyclists, still impose the congestion, accident, and noise costs associated with high car densities, and still require the vast infrastructure of roads, parking, and traffic management that represents an enormous and largely hidden public subsidy to private motoring.

The deeper question is not what fuel cars should run on but how many cars — and of what kind — a well-functioning, sustainable, equitable city actually needs. And the honest answer, in most urban contexts, is considerably fewer than we currently have: not as a sacrifice, but as a gain, in liveability, health, equity, and the quality of shared public space.`
  },

  // ── 18. SPORTS & SOCIETY ─────────────────────────────────────────────────
  {
    id: 78,
    title: "The Business of Sport and the Integrity of the Game",
    topic: "sports",
    level: "B2",
    wordCount: 450,
    keywords: [
      { word: 'commercialization', definition: 'the process of organising something primarily to make money' },
      { word: 'integrity', definition: 'the quality of being honest and following strong moral principles' },
      { word: 'sovereign wealth fund', definition: 'a state-owned investment fund used to manage a country\'s wealth' },
      { word: 'private equity', definition: 'investment in companies that are not listed on a public stock market' },
      { word: 'predetermined', definition: 'decided in advance before events actually happen' },
      { word: 'geopolitical', definition: 'relating to the influence of geography on politics between countries' },
      { word: 'credibility', definition: 'the quality of being trusted and believed' },
      { word: 'institutional', definition: 'relating to established organisations and their rules' },
      { word: 'transparency', definition: 'the quality of being open and clear about how decisions are made' },
      { word: 'revenue maximization', definition: 'the aim of earning the highest possible income' },
    ],
    questions: [
      { q: "What does the text identify as a key way in which the financial logic of sport can conflict with its integrity?", choices: ["Athletes are paid so much that they lose motivation to perform at their highest level", "Ownership groups primarily motivated by return on investment may prioritize revenue over sporting excellence", "Commercial sponsors insist on changing the rules of sports to make them more entertaining and commercially viable", "Broadcasting rights deals force sports governing bodies to schedule too many competitions"], answer: 1 },
      { q: "What does the example of the 2022 FIFA World Cup in Qatar illustrate about the relationship between commercial interests and sport?", choices: ["That sporting competitions can successfully be held in countries with very different cultural values", "That commercial and geopolitical interests can override the ostensible sporting purposes of a competition", "That the global expansion of sport requires hosting events in non-traditional markets to grow audiences", "That corruption in sports governance is an inevitable consequence of global commercialization"], answer: 1 },
      { q: "What does the text identify as a genuine benefit brought by the commercialization of sport?", choices: ["It has produced more competitive balance between clubs of different sizes", "It has reduced ticket prices, making sport accessible to larger and more diverse audiences", "It has funded better facilities, medical care, training environments, and higher compensation for athletes", "It has encouraged governing bodies to invest in grassroots sport and youth development"], answer: 2 },
      { q: "What does the text conclude about the conditions required for sporting integrity to be maintained?", choices: ["Integrity is maintained naturally when sport is governed by people who genuinely love the game", "Integrity requires active institutional commitment, enforceable rules, transparency, and genuine prioritization of competition over revenue", "Integrity can only be protected through complete separation of sport from commercial investment", "Integrity is best maintained by giving athletes themselves greater control over governing bodies"], answer: 1 },
      { q: "What pattern does the text identify in the relationship between integrity commitments and financial pressures in sport?", choices: ["Financial pressures consistently strengthen sporting integrity by making governing bodies more professional", "The larger the financial stakes, the stronger the institutional commitment to integrity tends to become", "Integrity commitments are easy to articulate but consistently difficult to sustain when financial pressures run in the opposite direction", "Most sports governing bodies successfully balance commercial and sporting interests most of the time"], answer: 2 },
    ],
    text: `The commercialization of elite sport over the past half-century has been so thoroughgoing that it is now difficult to discuss the major professional leagues and competitions without simultaneously discussing the financial structures that sustain them. Football, basketball, cricket, Formula One, tennis — in each case, the on-field contest exists within an economic framework of extraordinary complexity, and the relationship between that framework and the integrity of the competition it sponsors is increasingly a subject of debate.

The scale of money in elite sport creates pressures and incentives that do not always align with the interests of competition, fans, or athletes. Ownership groups primarily motivated by return on investment may prioritize revenue maximization over sporting excellence. Broadcasting arrangements may distort scheduling in ways that are indifferent to players' physical welfare. Sponsorship deals may influence decisions about where events are held in ways that prioritize commercial viability over sporting tradition or human rights considerations. The hosting of the 2022 FIFA World Cup in Qatar, decided in circumstances that led to widespread corruption investigations, illustrated in extreme form the degree to which commercial and geopolitical interests can override the ostensible sporting purposes of a competition.

The salary structures generated by commercialization have transformed the economics of sport at every level. At the top of the game, the financial rewards are extraordinary and have attracted increasing investment from sovereign wealth funds, private equity groups, and billionaire owners with interests that extend well beyond sport itself. At lower levels, the concentration of commercial resources at the top has in some sports created competitive structures so unequal that their outcomes are significantly predetermined by financial rather than sporting factors.

The counterargument to these concerns emphasizes the genuine benefits that commercialization has brought. Increased revenues have funded improved facilities, better medical care, more sophisticated training environments, and significantly higher compensation for athletes — including, over time, significant improvements in pay and conditions for female athletes and those in lower-profile sports. Greater global reach has brought sports to audiences and participants who would otherwise have had no connection to them.

The question of whether a sporting competition can maintain genuine credibility — the sense that its outcomes reflect excellence and effort rather than financial power or political influence — while simultaneously being integrated into commercial structures whose logic is fundamentally different from the logic of sport is not one that admits of a comfortable resolution. Some competitions have maintained remarkable credibility despite enormous commercial pressures; others have clearly compromised their sporting integrity for financial advantage.

What the evidence suggests is that integrity is not maintained automatically or passively. It requires active institutional commitment, enforceable rules with real consequences, transparency about decision-making, and a genuine prioritization of competitive authenticity over short-term revenue maximization — commitments that are easy to articulate and consistently difficult to sustain when the financial pressures run in the opposite direction.`
  },

  // ── 19. FOOD & CULTURE ───────────────────────────────────────────────────
  {
    id: 79,
    title: "The Language of Food: How We Talk About What We Eat",
    topic: "food",
    level: "B2",
    wordCount: 448,
    keywords: [
      { word: 'discourse', definition: 'the way language is used to discuss a particular subject in society' },
      { word: 'aestheticizing', definition: 'treating something as art or making it seem beautiful' },
      { word: 'terroir', definition: 'the environmental conditions that give a food or wine its distinctive character' },
      { word: 'provenance', definition: 'the origin or source of something, especially food' },
      { word: 'artisanal', definition: 'made in a traditional, small-scale way by skilled craftspeople' },
      { word: 'marginalized', definition: 'treated as unimportant, pushed to the edges of society' },
      { word: 'heirloom', definition: 'an old variety of plant or vegetable that was popular before mass farming' },
      { word: 'culinary', definition: 'relating to cooking and food' },
      { word: 'demographic', definition: 'a particular group in society, defined by age, income, etc.' },
      { word: 'negotiation', definition: 'a discussion aimed at reaching an agreement or understanding' },
    ],
    questions: [
      { q: "The text argues that the language of food is 'never merely descriptive.' What does it claim food language always also is?", choices: ["Scientific, nutritional, and health-focused", "Evaluative, social, and political", "Historical, cultural, and religious", "Commercial, manipulative, and brand-driven"], answer: 1 },
      { q: "What argument do critics of upscale food discourse make about the elaborate vocabulary of food writing?", choices: ["It makes food preparation unnecessarily complicated and discourages people from cooking", "It prioritizes aesthetic experience over nutritional value, contributing to unhealthy eating patterns", "It primarily serves a privileged demographic and constructs class-based distinctions between 'good' and 'bad' food", "It reduces cultural diversity by imposing a single global standard for evaluating all food traditions"], answer: 2 },
      { q: "How does the 'heirloom tomato' example in the text illustrate the relationship between language and cultural value?", choices: ["It shows that organic produce is genuinely superior in quality to conventionally grown food", "It demonstrates that the same object acquires different cultural value not through intrinsic quality but through language and social meaning", "It proves that consumers are willing to pay more for food that is locally produced", "It illustrates how farmers can improve their income by marketing their products more effectively"], answer: 1 },
      { q: "What concern does the text raise about the adoption of immigrant community food by upscale restaurants?", choices: ["That the food is inevitably altered in ways that make it nutritionally inferior", "That the original community may be simultaneously celebrated for their food while remaining marginalized themselves", "That intellectual property rights of immigrant communities are violated by such appropriation", "That customers develop inauthentic ideas about foreign cultures based on restaurant experiences"], answer: 1 },
      { q: "What does the text identify as the most honest framework for understanding food language?", choices: ["Treating it as primarily a form of entertainment with no serious social consequences", "Treating it as a neutral and purely descriptive system that accurately reflects culinary reality", "Treating it as a site of ongoing negotiation between aesthetic aspiration, commercial interest, cultural power, and the desire to share pleasurable experience", "Treating it as primarily a tool of corporate marketing that consumers should learn to resist"], answer: 2 },
    ],
    text: `Food is one of the most universal of human experiences and one of the most culturally specific. Every human society eats, but what is eaten, how it is prepared, with whom it is shared, and what meanings are attached to it vary so enormously across cultures and historical periods that the apparent universality of eating can obscure the radical particularity of any given food culture. This tension is nowhere more evident than in the language we use to describe food — a language that is never merely descriptive but always also evaluative, social, and political.

The vocabulary of contemporary food writing — particularly in its upscale, English-language, urban manifestations — has undergone a remarkable expansion and elaboration in the past three decades. Restaurant reviewing has become a serious literary genre. Cookbooks by prominent chefs routinely appear on bestseller lists. Food documentaries command large global audiences. The cultural space devoted to discussing, analyzing, and aestheticizing food has grown enormously, as has the sophistication of the language employed within it.

Critics of this development argue that the elaboration of food discourse primarily serves the interests of a relatively privileged urban demographic — people for whom food is a leisure interest and an identity marker as much as a necessity. The language of "terroir," "umami," "nose-to-tail," "artisanal," and "heritage" constructs distinctions between "good" and "bad" food that often track economic class. The same tomato, described as "locally grown heirloom" at a farmers' market and "tomato" at a supermarket, acquires different cultural value not because of any intrinsic difference in its quality but because of the social meanings attached to its provenance and the vocabulary used to frame it.

The relationship between food language and cultural power is particularly acute around the international circulation of cuisines. When dishes from low-income immigrant communities are adopted by upscale restaurants in wealthy cities — often with modifications and a sophisticated vocabulary that the community of origin did not apply to its own food — the original community may be simultaneously celebrated and marginalized. The food becomes desirable; the people who created it do not necessarily share in the desirability.

At the same time, language shapes appetite, perception, and experience in ways that are genuinely significant. The explosion of food writing has demonstrably expanded the culinary horizons of readers, generated interest in food traditions that might otherwise have remained invisible to mainstream culture, and contributed to public conversations about farming, ecology, and labor that have genuine social value.

Perhaps the most productive framework is one that treats the language of food not as a neutral reflection of culinary reality but as a site of ongoing negotiation between aesthetic aspiration, commercial interest, cultural power, and the simple human desire to eat something wonderful and to share the experience of having done so.`
  },

  // ── 20. ENVIRONMENT & SUSTAINABILITY ─────────────────────────────────────
  {
    id: 80,
    title: "Biodiversity Loss and the Sixth Mass Extinction",
    topic: "nature",
    level: "B2",
    wordCount: 457,
    keywords: [
      { word: 'mass extinction', definition: 'an event in which a large proportion of all species on Earth die out in a short time' },
      { word: 'biodiversity', definition: 'the variety of plant and animal species in a particular area' },
      { word: 'ecosystem services', definition: 'the benefits that natural ecosystems provide to people, such as clean water and pollination' },
      { word: 'background rate', definition: 'the natural rate at which species go extinct without human interference' },
      { word: 'invasive species', definition: 'a plant or animal introduced to a new area that harms the local ecosystem' },
      { word: 'habitat destruction', definition: 'the process of damaging or removing the natural home of a species' },
      { word: 'overexploitation', definition: 'using a natural resource faster than it can be replaced' },
      { word: 'pollination', definition: 'the transfer of pollen between plants, enabling them to reproduce' },
      { word: 'cost-benefit analysis', definition: 'comparing the advantages and disadvantages of an action to decide if it is worthwhile' },
      { word: 'irreversible', definition: 'impossible to undo or return to the original state' },
    ],
    questions: [
      { q: "What distinguishes the current mass extinction from all previous ones according to the text?", choices: ["It is occurring much more slowly than previous mass extinctions, allowing more time to respond", "It is unique in being driven by the activities of a single species rather than geological or cosmic events", "It is affecting marine species more severely than terrestrial species for the first time in geological history", "It is the first mass extinction that scientists were able to predict and prepare for in advance"], answer: 1 },
      { q: "What are 'ecosystem services' as described in the text?", choices: ["Commercial services provided by environmental consulting companies to businesses", "Government programs that pay landowners to protect habitats on their property", "The processes by which living systems maintain conditions that make human life possible, such as pollination, water purification, and climate regulation", "International agreements that compensate developing countries for protecting their natural environments"], answer: 2 },
      { q: "Why were economic valuations of ecosystem services introduced as a strategic intervention?", choices: ["To enable governments to charge corporations for the environmental damage they cause", "To make biodiversity loss comprehensible in the language of cost-benefit analysis that dominates policy discussions", "To help individuals understand the financial value of their own environmental behaviors", "To create a new market for ecosystem services that could fund conservation directly"], answer: 1 },
      { q: "What is the text's assessment of the Convention on Biological Diversity's track record?", choices: ["It has been remarkably successful in meeting its targets and reversing biodiversity loss", "It has been moderately effective, achieving about half of its stated targets", "It has consistently failed to meet its targets despite widespread international support", "It has been effective for marine biodiversity but not for terrestrial species"], answer: 2 },
      { q: "What does the text identify as 'the defining question' regarding biodiversity loss?", choices: ["Whether scientific research can develop effective methods to resurrect extinct species", "Whether economic growth can be decoupled from biodiversity loss through technological innovation", "Whether the political will to close the gap between international agreements and implementation can be generated before losses become irreversible", "Whether individual consumers can change their behavior rapidly enough to make a meaningful difference"], answer: 2 },
    ],
    text: `Earth has experienced five mass extinction events in its geological history — episodes during which catastrophic disruption to environmental conditions caused the rapid elimination of a significant proportion of all species on the planet. The most recent of these, approximately sixty-six million years ago, was caused by the impact of a large asteroid and resulted in the extinction of the non-avian dinosaurs and approximately three-quarters of all species then living. Scientists studying contemporary rates of species loss have concluded, with increasing alarm, that the planet is currently experiencing a sixth mass extinction — one unique among all previous extinctions in being driven not by geological catastrophe or cosmic incident but by the activities of a single species.

Current rates of species extinction are estimated to be between one hundred and one thousand times higher than the background rate — the natural rate of extinction that would be expected to occur in the absence of significant human influence. The causes are multiple and interlocking: habitat destruction through deforestation, agricultural expansion, and urban development; overexploitation through hunting, fishing, and the wildlife trade; pollution of terrestrial and aquatic environments; the spread of invasive species facilitated by global trade and travel; and, increasingly, the compounding disruption of climate change, which is altering the conditions to which species are adapted faster than many can adjust through migration or evolution.

The consequences of biodiversity loss extend beyond the intrinsic value of the species lost — though that value, to many people, is itself sufficient justification for concern. Ecosystems provide what ecologists call "ecosystem services": the processes by which living systems maintain the conditions that make human life possible. Pollination of crops, purification of water, cycling of nutrients through soils, regulation of the atmosphere, flood mitigation, coastal protection — these are functions performed by the web of living organisms that constitute functioning ecosystems. As that web is damaged and simplified, the services it provides become less reliable and in some cases cease altogether.

The economic valuation of ecosystem services — attempts to quantify in monetary terms what functioning ecosystems provide to human economies — was intended partly as a strategic intervention: to make biodiversity loss comprehensible in the language of cost-benefit analysis that dominates policy discussions. These valuations have reached extraordinary figures, in some studies dwarfing global GDP. Their methodological validity is contested, but their underlying purpose — to make visible the dependence of human economies on the biological systems they are simultaneously destroying — reflects a genuine insight.

The political responses to biodiversity loss have been considerably weaker than the scientific consensus on its severity would seem to demand. The Convention on Biological Diversity, the main international framework for biodiversity protection, has consistently failed to meet its targets. The Kunming-Montreal Global Biodiversity Framework, agreed in 2022, established more ambitious targets, but the history of international environmental agreements suggests that the distance between agreement and implementation is often very large. Whether the political will to close that gap can be generated before the losses become irreversible remains the defining question.`
  }
];

/**
 * Helper: get all unique topics in the database.
 * @returns {string[]}
 */
function getTopics() {
  return [...new Set(texts.map(t => t.topic))];
}

/**
 * Helper: filter texts by topic (case-insensitive, partial match).
 * @param {string} topic
 * @returns {object[]}
 */
function getByTopic(topic) {
  const q = topic.toLowerCase();
  return texts.filter(t => t.topic.toLowerCase().includes(q));
}

/**
 * Helper: get a single random text.
 * @returns {object}
 */
function getRandom() {
  return texts[Math.floor(Math.random() * texts.length)];
}

// ── Export ────────────────────────────────────────────────────────────────

// ES Module export (works with import/export syntax)
export { texts, getTopics, getByTopic, getRandom };
export default texts;

// Browser global (works with a plain <script src="texts-b2.js"> tag)
if (typeof window !== 'undefined') {
  window.B2Texts = { texts, getTopics, getByTopic, getRandom };
}
