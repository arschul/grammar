/**
 * texts-b1.js
 * Shared reading text database — B1 level (CEFR)
 * 20 texts, ~250–350 words each
 * Topics: work, travel, technology, food, habits & routine,
 *         health, sports, nature, movies & series, music, and more.
 *
 * Companion files:
 *   texts-a1.js (100–150 words, A1 level)
 *   texts-a2.js (150–250 words, A2 level)
 *   texts-b2.js (400–500 words, B2 level)
 *
 * USAGE (ES Module):
 *   import { texts } from './texts-b1.js';
 *
 * USAGE (plain <script> tag — no module needed):
 *   <script src="texts-b1.js"></script>
 *   // then access window.B1Texts.texts
 *
 * USAGE (GitHub raw URL / jsDelivr CDN):
 *   import { texts } from 'https://cdn.jsdelivr.net/gh/YOUR_USER/YOUR_REPO@main/texts-b1.js';
 */

const texts = [
  // ── 1. WORK ──────────────────────────────────────────────────────────────
  {
    id: 41,
    title: "The Four-Day Working Week",
    topic: "work",
    level: "B1",
    wordCount: 302,
    keywords: [
      { word: 'compressed', definition: 'fitted into a shorter time or smaller space than usual' },
      { word: 'productivity', definition: 'the rate at which work is completed or output is produced' },
      { word: 'burnout', definition: 'extreme tiredness caused by working too hard for too long' },
      { word: 'absenteeism', definition: 'the habit of regularly being absent from work or school' },
      { word: 'proponents', definition: 'people who actively support an idea or plan' },
      { word: 'arbitrary', definition: 'based on chance or personal choice rather than reason or planning' },
      { word: 'automation', definition: 'the use of machines or computers to do tasks without human effort' },
      { word: 'momentum', definition: 'the force or energy that keeps something moving forward' },
      { word: 'logistical', definition: 'relating to the practical organization of a complex activity' },
      { word: 'optimal', definition: 'the best or most effective possible' },
    ],
    text: `For most of the twentieth century, the five-day, forty-hour working week was considered the standard model for employment across the industrialized world. However, in recent years, a growing number of companies and governments have begun questioning whether this model is truly the most effective, both for businesses and for the people who work within them.

The four-day working week — in which employees work the same number of hours but compressed into four days instead of five, or simply work fewer hours overall — has been trialled in several countries with surprisingly positive results. In Iceland, a large-scale experiment involving over two thousand public sector workers found that productivity either stayed the same or actually improved, while workers reported significantly lower levels of stress and burnout, and higher levels of job satisfaction and work-life balance.

In the United Kingdom, a similar trial involving more than sixty companies found that the vast majority intended to make the change permanent after the trial period ended. Workers were more focused during the time they were at work, meetings became shorter and more purposeful, and absenteeism — the rate at which employees miss work due to illness — dropped noticeably.

Critics of the four-day week argue that it does not work equally well in all sectors. Industries that require continuous coverage, such as healthcare, retail, and emergency services, face obvious logistical challenges in implementing such a model. Others worry that compressing the same workload into fewer days could simply transfer stress rather than reduce it.

Proponents, however, argue that the traditional five-day model was itself an arbitrary historical choice rather than a scientifically optimal arrangement. As automation increasingly handles routine tasks, they suggest that the nature of productive work is changing, and our working structures should change along with it.

The debate is far from settled, but the momentum behind shorter working weeks continues to grow.`
  },

  // ── 2. TRAVEL ────────────────────────────────────────────────────────────
  {
    id: 42,
    title: "Overtourism and Its Consequences",
    topic: "travel",
    level: "B1",
    wordCount: 318,
    keywords: [
      { word: 'overtourism', definition: 'a situation where too many tourists visit a place and cause harm' },
      { word: 'infrastructure', definition: 'the basic systems a place needs, such as roads and water supplies' },
      { word: 'inhabitant', definition: 'a person who lives permanently in a particular place' },
      { word: 'conservation', definition: 'the protection of natural environments and wildlife' },
      { word: 'erosion', definition: 'the gradual wearing away of rock, soil, or a place\'s character' },
      { word: 'sustainable', definition: 'able to continue without causing harm to the environment' },
      { word: 'ethics', definition: 'the moral principles that guide a person\'s or group\'s behaviour' },
      { word: 'intentional', definition: 'done on purpose; carefully planned and considered' },
      { word: 'revenue', definition: 'money received by a business or government from its activities' },
      { word: 'reconcile', definition: 'to find a way to make two different things work together' },
    ],
    text: `Tourism is one of the world's largest industries, generating trillions of dollars in revenue and supporting hundreds of millions of jobs globally. For many countries, particularly developing nations with limited alternative sources of income, it represents a vital economic lifeline. Yet in an increasing number of destinations, tourism has begun to create as many problems as it solves.

The term "overtourism" refers to situations where the number of visitors to a place exceeds the capacity of its infrastructure, natural environment, or local community to absorb them without significant harm. Cities such as Venice, Barcelona, and Dubrovnik have all experienced this phenomenon in extreme forms. In Venice, a city of around 250,000 inhabitants, the number of tourists at peak times can reach 80,000 per day. Residents complain that their neighborhoods have been transformed into theme parks, with authentic local businesses replaced by souvenir shops and short-term rental apartments driving up rents beyond what ordinary people can afford.

The environmental consequences can be equally severe. Popular natural sites such as Machu Picchu in Peru and the Galápagos Islands in Ecuador face ongoing threats from erosion, pollution, and disruption to wildlife caused by excessive visitor numbers.

In response, some destinations have introduced measures to manage visitor flows more sustainably. Amsterdam has restricted certain types of tourism advertising and introduced taxes on cruise ships. Bhutan famously operates a "high value, low impact" tourism model, charging visitors a substantial daily fee that simultaneously limits numbers and funds environmental conservation.

These examples point toward a broader question about the purpose and ethics of travel. Is it possible to reconcile the human desire to explore the world with a genuine responsibility toward the places and communities being visited?

Many travel experts argue that the answer lies in a shift from mass tourism toward slower, more intentional forms of travel — spending longer in fewer places, engaging meaningfully with local cultures, and prioritizing quality of experience over quantity of destinations.`
  },

  // ── 3. TECHNOLOGY ────────────────────────────────────────────────────────
  {
    id: 43,
    title: "The Right to Disconnect",
    topic: "technology",
    level: "B1",
    wordCount: 310,
    keywords: [
      { word: 'connectivity', definition: 'the state of being connected, especially to the internet' },
      { word: 'burnout', definition: 'extreme tiredness and stress caused by overworking' },
      { word: 'legislative', definition: 'relating to the process of making laws' },
      { word: 'legislation', definition: 'a set of laws made by a government' },
      { word: 'implicit', definition: 'suggested or understood but not directly stated' },
      { word: 'boundary', definition: 'a line or limit that separates two things' },
      { word: 'enforce', definition: 'to make sure a law or rule is obeyed' },
      { word: 'prohibit', definition: 'to officially say that something is not allowed' },
      { word: 'responsive', definition: 'quick to reply or react to messages or situations' },
      { word: 'override', definition: 'to cancel or take control over something else' },
    ],
    text: `Smartphones and constant internet connectivity have fundamentally altered the relationship between employees and their employers. Where a working day once had a clear beginning and end, the boundaries have become increasingly blurred. Emails arrive at midnight, messages appear on weekends, and the expectation — often unspoken but nonetheless real — is that employees should be available and responsive outside of official working hours.

This phenomenon has been linked to rising levels of burnout, anxiety, and difficulty sleeping among workers across many industries. When the mind cannot distinguish between work time and rest time, recovery becomes much harder. People return to work on Monday morning already exhausted, having never truly switched off during the weekend.

In response to this growing problem, several countries have taken legislative action. France introduced a "right to disconnect" law in 2017, which requires companies with more than fifty employees to establish clear policies about out-of-hours communication. Portugal followed with legislation prohibiting employers from contacting employees outside of working hours except in genuine emergencies. Other countries, including Spain and Belgium, have introduced or are considering similar measures.

The results of these policies have been mixed. Critics point out that global business does not stop at national borders, and that in practice, many workers still feel implicit pressure to remain available regardless of what the law says. Cultural change, they argue, is ultimately more important than legal change.

Proponents of the right to disconnect argue that the issue is essentially one of power and habit. Without formal rules, individual employees feel unable to set boundaries without risking their career prospects. Clear legislation, even if imperfectly enforced, signals a change in societal expectations and gives workers the backing they need to genuinely rest.

The debate touches on deeper questions about the role of work in modern life and whether technology should serve human needs or gradually override them.`
  },

  // ── 4. FOOD ──────────────────────────────────────────────────────────────
  {
    id: 44,
    title: "The Science of Fermentation",
    topic: "food",
    level: "B1",
    wordCount: 308,
    keywords: [
      { word: 'fermentation', definition: 'a chemical process in which microorganisms break down sugars to produce acids or alcohol' },
      { word: 'microorganism', definition: 'a living thing too small to see without a microscope, such as bacteria' },
      { word: 'probiotic', definition: 'live bacteria in food that are beneficial to your digestive health' },
      { word: 'gut microbiome', definition: 'the community of microorganisms living in your digestive system' },
      { word: 'pasteurization', definition: 'a process of heating food to kill harmful bacteria' },
      { word: 'metabolism', definition: 'all the chemical processes in your body that keep you alive' },
      { word: 'immune function', definition: 'how well your body\'s defence system works to fight illness' },
      { word: 'staple', definition: 'a basic food that is eaten regularly as a main part of the diet' },
      { word: 'surge', definition: 'a sudden large increase in something' },
      { word: 'inflammation', definition: 'redness, swelling, and pain in part of the body caused by infection or injury' },
    ],
    text: `Fermentation is one of humanity's oldest food preservation techniques, yet it is also one of the most scientifically fascinating. At its core, fermentation is a metabolic process in which microorganisms such as bacteria, yeasts, or fungi break down sugars and starches, producing acids, gases, or alcohol as byproducts. The result is food that lasts longer, often tastes more complex, and in many cases, is significantly more beneficial for health than the original ingredient.

Almost every culture in the world has developed its own fermented foods. In Korea, kimchi — fermented vegetables, typically cabbage, seasoned with chili and garlic — has been central to the diet for thousands of years. In Central and Eastern Europe, sauerkraut and kefir are traditional staples. In Japan, miso, soy sauce, and natto are essential flavor foundations of the cuisine. In the West, yogurt, cheese, sourdough bread, and wine are all products of fermentation.

The recent surge of scientific interest in the human gut microbiome — the vast community of microorganisms living in our digestive systems — has brought fermented foods into the mainstream health conversation. Research increasingly suggests that a diverse and well-functioning gut microbiome is connected to immune function, mental health, inflammation, and a range of chronic diseases. Fermented foods, which are rich in live bacteria known as probiotics, appear to support this microbial diversity.

Kimchi, yogurt, kombucha, and other fermented products have consequently moved from the shelves of specialist health shops to mainstream supermarkets in many countries.

However, nutritionists caution that not all commercially produced fermented foods retain their probiotic benefits by the time they reach consumers. Processing and pasteurization can destroy live cultures. The most reliable sources remain traditionally made or homemade versions.

For Sara, who began making her own sourdough during lockdown, the process was as rewarding as the product. "There is something deeply satisfying," she says, "about understanding what your food actually is."
`
  },

  // ── 5. HABITS & ROUTINE ──────────────────────────────────────────────────
  {
    id: 45,
    title: "The Psychology of Procrastination",
    topic: "habits and routine",
    level: "B1",
    wordCount: 315,
    keywords: [
      { word: 'procrastination', definition: 'the habit of delaying tasks that need to be done' },
      { word: 'avoidance', definition: 'keeping away from something or someone deliberately' },
      { word: 'self-compassion', definition: 'being kind and forgiving to yourself when you make mistakes' },
      { word: 'underlying', definition: 'hidden beneath the surface; being the real cause of something' },
      { word: 'regulation', definition: 'the control of something to keep it at the right level' },
      { word: 'self-reinforcing', definition: 'a process that makes itself stronger the more it happens' },
      { word: 'Pomodoro method', definition: 'a time-management technique using 25-minute focused work blocks followed by short breaks' },
      { word: 'freelance', definition: 'working independently for different clients rather than for one employer' },
      { word: 'overwhelming', definition: 'so large or difficult that it is hard to deal with' },
      { word: 'paradoxically', definition: 'in a way that seems contradictory but may still be true' },
    ],
    text: `Most people procrastinate sometimes, but for a significant number, habitual delay becomes a serious obstacle to achieving goals, maintaining relationships, and managing everyday responsibilities. Despite its prevalence, procrastination is widely misunderstood. It is commonly dismissed as laziness or poor time management, when in reality, psychological research suggests it is fundamentally an emotional regulation problem.

The key insight is this: we do not avoid tasks because we are inherently lazy. We avoid them because they are associated with negative emotions — anxiety about failure, boredom, resentment, self-doubt, or a feeling of being overwhelmed. Procrastination offers a temporary escape from these uncomfortable feelings. The relief is immediate; the consequences come later. This is why the problem tends to be self-reinforcing: avoidance provides short-term comfort, which makes the same avoidance strategy more likely to be repeated in the future.

Understanding this emotional dimension opens up more effective strategies for change. Simply telling a procrastinator to "just get started" addresses the behavior without addressing the underlying feeling. More helpful approaches include breaking tasks into very small steps — small enough that starting feels non-threatening — and using structured techniques such as the Pomodoro method, which involves working in focused blocks of twenty-five minutes followed by short breaks.

Self-compassion also plays a surprisingly important role. Research by psychologist Timothy Pychyl and colleagues has found that people who forgive themselves quickly after procrastinating are actually less likely to procrastinate on the same type of task in the future. Guilt and self-criticism, paradoxically, tend to increase avoidance rather than reduce it.

David, who works as a freelance designer, struggled with procrastination for years before he changed his approach. Rather than judging himself harshly when he avoided a task, he started asking himself what specifically felt threatening about it. Identifying the emotion behind the delay, he says, made it much easier to move forward — not because the task became easier, but because he stopped fighting himself at the same time.`
  },

  // ── 6. HEALTH ────────────────────────────────────────────────────────────
  {
    id: 46,
    title: "Loneliness: A Modern Epidemic",
    topic: "health",
    level: "B1",
    wordCount: 311,
    keywords: [
      { word: 'chronic', definition: 'lasting for a long time or happening repeatedly' },
      { word: 'solitude', definition: 'the state of being alone, especially when chosen and peaceful' },
      { word: 'cognitive decline', definition: 'a gradual worsening of memory, thinking, and reasoning ability' },
      { word: 'urbanization', definition: 'the process by which more people move to live in cities' },
      { word: 'mobility', definition: 'the ability to move freely, or move to a new place' },
      { word: 'unprecedented', definition: 'never having happened before; without any earlier example' },
      { word: 'paradoxically', definition: 'in a way that seems contradictory but may still be true' },
      { word: 'intervention', definition: 'an action taken to improve a difficult situation' },
      { word: 'subjective', definition: 'based on personal feelings or opinions, not facts' },
      { word: 'epidemic', definition: 'a problem that affects a very large number of people at the same time' },
    ],
    text: `In an era of unprecedented connectivity, loneliness has paradoxically become one of the most pressing public health challenges of our time. Surveys conducted in numerous countries over the past decade have consistently found that a significant proportion of adults — in some studies as many as one in three — report feeling lonely on a regular basis. Among older adults and young people in their twenties, rates are particularly high.

The health consequences of chronic loneliness are more serious than many people appreciate. Research conducted by psychologist Julianne Holt-Lunstad and others has shown that loneliness is associated with a range of negative health outcomes, including elevated blood pressure, weakened immune function, disrupted sleep, and cognitive decline. Some analyses have suggested that prolonged loneliness carries health risks comparable to smoking fifteen cigarettes a day — a statistic that has drawn widespread attention to the scale of the problem.

It is important to distinguish between loneliness and solitude. Solitude is a chosen state of being alone, which many people find restorative and even essential for well-being. Loneliness, by contrast, is the painful experience of feeling disconnected, of wanting more meaningful connection than one currently has. It is subjective: a person surrounded by people can feel profoundly lonely, while someone who lives alone may feel deeply connected to others.

Several factors have contributed to rising loneliness in modern societies. Urbanization, increased geographic mobility, later marriage, smaller family units, and the decline of community institutions such as religious organizations and local clubs have all reduced the density of social bonds that historically kept loneliness at bay.

Some governments have begun to treat loneliness as a policy priority. The United Kingdom appointed a Minister for Loneliness in 2018, and several countries have developed national strategies to address it through community programs, volunteering schemes, and health service interventions.

Ana, a social worker, says the most powerful intervention she has witnessed is simply giving lonely people a reason to leave the house regularly. Connection, she believes, is best built through shared activity rather than through direct conversation alone.`
  },

  // ── 7. SPORTS ────────────────────────────────────────────────────────────
  {
    id: 47,
    title: "The Mental Side of Elite Sport",
    topic: "sports",
    level: "B1",
    wordCount: 307,
    keywords: [
      { word: 'visualization', definition: 'imagining a performance in your mind in great detail before it happens' },
      { word: 'pre-performance routine', definition: 'a fixed set of actions done before competing to prepare the mind' },
      { word: 'anxiety', definition: 'a feeling of worry and nervousness that is hard to control' },
      { word: 'physiology', definition: 'the way that the body and its parts work' },
      { word: 'cognitive load', definition: 'the mental effort required to process information or make decisions' },
      { word: 'neural pathway', definition: 'a connection in the brain through which signals travel' },
      { word: 'metric', definition: 'a way of measuring something' },
      { word: 'replicating', definition: 'repeating something in exactly the same way' },
      { word: 'stakes', definition: 'the level of risk or importance involved in a situation' },
      { word: 'concentration', definition: 'the ability to give your full attention to something' },
    ],
    text: `At the highest levels of competitive sport, the physical differences between athletes are often extraordinarily small. The gap in strength, speed, and technical skill between a gold medalist and an athlete who finishes fourth may be almost immeasurable by conventional metrics. What frequently separates them, coaches and sports psychologists increasingly argue, is not physiology but psychology.

Mental skills such as concentration, emotional regulation, confidence, and the ability to perform under pressure have become a central focus of elite athletic training. Sports psychology — once regarded as an optional add-on — is now considered a core component of preparation at the Olympic level and in professional leagues around the world.

One of the most important mental skills is the ability to manage the so-called "pressure performance relationship." Most athletes perform well in training, when the stakes are low and mistakes carry no consequences. Replicating that level of performance in competition, when the outcome matters enormously, is a fundamentally different psychological challenge.

Techniques such as visualization — mentally rehearsing a performance in precise detail before it occurs — have been used by elite athletes for decades. Sprinters visualize their start, swimmers rehearse their turns, golfers imagine the arc of every shot. Research suggests that this kind of mental rehearsal activates similar neural pathways to actual physical practice, making it a genuinely effective training tool rather than simply a motivational exercise.

The concept of a "pre-performance routine" — a consistent sequence of actions and thoughts carried out before competing — is another widely used technique. By automating the preparation process, athletes reduce the cognitive load at the moment of performance and create a sense of control in an inherently unpredictable environment.

Elena, who competed internationally in swimming for eight years, says that her most significant improvement came not from additional training in the pool but from working with a sports psychologist on managing the anxiety she felt before major competitions. "The physical preparation was there," she says. "The real work was learning to trust it."
`
  },

  // ── 8. NATURE ────────────────────────────────────────────────────────────
  {
    id: 48,
    title: "Rewilding: Letting Nature Heal Itself",
    topic: "nature",
    level: "B1",
    wordCount: 316,
    keywords: [
      { word: 'rewilding', definition: 'restoring land to its natural state by reducing human control and reintroducing species' },
      { word: 'biodiversity', definition: 'the variety of different plants and animals in an area' },
      { word: 'trophic cascade', definition: 'a series of changes in an ecosystem triggered by one species affecting others' },
      { word: 'predation', definition: 'the act of one animal hunting and killing another for food' },
      { word: 'ecosystem', definition: 'all the living things in an area and how they depend on each other' },
      { word: 'reintroduce', definition: 'to bring back a species to an area where it no longer lives' },
      { word: 'vegetation', definition: 'plants and trees covering an area' },
      { word: 'self-organizing', definition: 'able to develop structure and order without outside control' },
      { word: 'grazing', definition: 'animals eating grass in a field' },
      { word: 'conservation', definition: 'the protection and careful management of nature and wildlife' },
    ],
    text: `For much of the modern era, conservation efforts have focused on protecting what remains of natural habitats and managing wildlife populations to prevent species from disappearing. These approaches have achieved much, but they have also required constant intervention and have proven insufficient to reverse the broader trend of biodiversity loss. A newer and more radical philosophy — rewilding — is challenging the conventional approach.

Rewilding is based on the idea that ecosystems, given the chance, are capable of restoring themselves. Rather than actively managing landscapes to maintain a particular state, rewilding involves stepping back, removing some of the human interventions that have historically suppressed natural processes, and allowing nature to determine its own course. This typically involves reintroducing species that have been locally or regionally extinct, restoring natural water flows, and reducing or eliminating intensive land management such as grazing.

One of the most celebrated examples of rewilding in practice is the reintroduction of wolves to Yellowstone National Park in the United States in the 1990s, after an absence of nearly seventy years. The wolves' return triggered what ecologists call a "trophic cascade" — a chain of ecological changes that rippled through the entire ecosystem. Deer populations, previously unchecked, began to regulate their grazing behavior in response to predation pressure. Riverbanks that had been stripped bare by overgrazing began to regenerate with vegetation, stabilizing the soil and changing the physical course of rivers. Bird populations increased. Even beaver colonies returned.

This example has become emblematic of a broader principle: ecosystems are far more complex and self-organizing than previously assumed, and the restoration of a single missing element can have profound effects that no human manager could have predicted or engineered from above.

In Europe, rewilding projects are underway in Scotland, Romania, the Netherlands, and several other countries, each adapting the principles to local conditions and contexts. The debates they generate — about land use, agriculture, and the proper relationship between humans and wild nature — reflect some of the most important environmental questions of the century.`
  },

  // ── 9. MOVIES & SERIES ───────────────────────────────────────────────────
  {
    id: 49,
    title: "Documentary Film and Social Change",
    topic: "movies and series",
    level: "B1",
    wordCount: 303,
    keywords: [
      { word: 'documentary', definition: 'a film or programme that presents real events and facts' },
      { word: 'objectivity', definition: 'not being influenced by personal opinions or feelings' },
      { word: 'advocacy', definition: 'publicly supporting a cause or policy' },
      { word: 'editorial', definition: 'relating to the decisions about what to include in a publication or film' },
      { word: 'distribution', definition: 'the process of making a film or product available to an audience' },
      { word: 'behavioral change', definition: 'a shift in the way people act or make decisions' },
      { word: 'persuasive', definition: 'good at making people agree with you or do what you want' },
      { word: 'legitimate', definition: 'acceptable and following the rules' },
      { word: 'subjective', definition: 'based on personal feelings or opinions, not facts' },
      { word: 'amplify', definition: 'to make something stronger or more noticeable' },
    ],
    text: `Documentaries occupy a unique position in the landscape of film. Unlike feature films, which are primarily judged by their entertainment value, documentaries are often evaluated partly by their capacity to inform, challenge, and ultimately change how audiences think about the world. At their best, they have proven remarkably powerful in doing exactly this.

The 2006 documentary "An Inconvenient Truth," featuring former US Vice President Al Gore presenting evidence on climate change, is widely credited with bringing global warming into mainstream public consciousness in a way that years of scientific reporting had failed to achieve. Whatever one's view of its conclusions or methods, its cultural impact was undeniable. It reached audiences who were never going to read academic journals, won an Academy Award, and significantly accelerated the public debate around climate policy.

More recently, documentaries tackling subjects such as factory farming, prison reform, financial fraud, and the fashion industry's environmental impact have sparked genuine policy discussions and, in some cases, measurable behavioral change. Streaming platforms have greatly increased the reach of documentary film, allowing works that might previously have been seen by limited festival audiences to achieve global distribution almost instantly.

However, critics of the genre raise legitimate concerns about objectivity. Every documentary involves editorial choices — what to include, what to omit, how to structure a narrative, whose voices to amplify. These choices inevitably reflect the filmmaker's perspective, and the documentary form can give a subjective viewpoint the persuasive authority of factual reporting. The blurring of journalism and advocacy within the format demands a degree of critical viewing that is not always applied.

Julia, who teaches media studies, encourages her students to watch documentaries as they would read a persuasive essay rather than a factual report: engaging seriously with the argument while remaining alert to what the filmmaker may have chosen not to show. "The best documentaries," she says, "make you want to investigate further, not simply accept."
`
  },

  // ── 10. MUSIC ────────────────────────────────────────────────────────────
  {
    id: 50,
    title: "Music Streaming and the Future of Artists",
    topic: "music",
    level: "B1",
    wordCount: 309,
    keywords: [
      { word: 'royalties', definition: 'payments made to artists when their work is used or sold' },
      { word: 'revenue', definition: 'money received from an activity or business' },
      { word: 'independent artist', definition: 'a musician who is not signed to a major record company' },
      { word: 'merchandising', definition: 'selling products related to a musician or brand' },
      { word: 'algorithmic', definition: 'controlled or decided by a computer program following set rules' },
      { word: 'listenership', definition: 'the total number of people who listen to an artist or programme' },
      { word: 'licensing', definition: 'giving or getting official permission to use something for payment' },
      { word: 'reform', definition: 'a change made to improve a system or organization' },
      { word: 'restructured', definition: 'organized in a completely new way' },
      { word: 'compact disc', definition: 'a small round disc used to store and play music, common before streaming' },
    ],
    text: `The transition from physical music sales to digital streaming has fundamentally restructured the economics of the music industry. For consumers, the change has been overwhelmingly positive: access to virtually all recorded music in human history for a monthly fee of roughly the price of a single compact disc in the 1990s. For artists — particularly those at the beginning or middle of their careers — the picture is considerably more complicated.

Streaming platforms typically pay rights holders between $0.003 and $0.005 per stream, with the revenue then divided between the record label, the music publisher, and finally the artist, who often receives only a fraction of the final amount depending on their contract. To earn the equivalent of the US federal minimum wage purely from streaming royalties, an independent artist would need to generate several million streams per month — a level of listenership that only a small percentage of musicians ever achieves.

The result has been a significant shift in how artists generate income. Live performance, once considered secondary to record sales, has become the primary revenue source for most working musicians. Merchandising, licensing music to films and advertisements, Patreon-style direct fan funding, and live-streamed performances have all become increasingly important income streams.

Some artists have responded by releasing music more frequently. Where an album release every two or three years was once standard, many artists now release singles monthly or even weekly in order to remain visible in algorithmic recommendation systems that favor recent activity.

Others have argued for a fundamental reform of streaming royalty structures. A campaign for a "user-centric" payment model — in which each subscriber's fee goes directly to the artists they listen to rather than being pooled and distributed based on total streams — has gained support among musicians and some industry organizations.

Mike, who releases music independently, describes streaming as "a paradox of visibility and invisibility." His music reaches listeners in forty countries. His monthly royalty payment rarely covers his studio costs.`
  },

  // ── 11. SHOPPING ─────────────────────────────────────────────────────────
  {
    id: 51,
    title: "The Psychology of Pricing",
    topic: "shopping",
    level: "B1",
    wordCount: 298,
    keywords: [
      { word: 'pricing', definition: 'the way a company decides how much to charge for something' },
      { word: 'perception', definition: 'the way you understand or interpret something' },
      { word: 'anchor price', definition: 'a high price shown first to make other prices seem cheaper' },
      { word: 'decoy effect', definition: 'adding a third option to make one of the other two seem more attractive' },
      { word: 'scarcity', definition: 'when there is not enough of something, which makes people want it more' },
      { word: 'behavioral economics', definition: 'the study of how emotions and thinking affect financial decisions' },
      { word: 'rational', definition: 'based on clear thinking and reason, not on emotion' },
      { word: 'manipulate', definition: 'to control or influence someone in a clever or dishonest way' },
      { word: 'premium', definition: 'higher in price or quality than standard' },
      { word: 'subscription', definition: 'a regular payment to use a service for a period of time' },
    ],
    text: `Every time we shop, we make dozens of decisions about price and value. We compare options, weigh costs against benefits, and decide what seems fair. Most of us believe we do this rationally. The evidence from behavioral economics, however, suggests otherwise.

One of the most well-documented pricing phenomena is the effect of "charm pricing" — the practice of ending prices with the digit nine. A product priced at $9.99 sells significantly better than the same product priced at $10.00, even though the difference is a single cent. Consumers mentally categorize $9.99 as belonging to the "nine dollar" rather than the "ten dollar" range, an effect so consistent and powerful that it has become a near-universal retail convention.

Another widely used technique is "anchoring." When a product is shown alongside a more expensive option, consumers tend to perceive it as better value, even if its absolute price has not changed. Restaurants often place a very expensive item at the top of the menu not because they expect many customers to order it, but because it makes the next most expensive option appear reasonable by comparison.

Scarcity and urgency cues — "Only three left in stock" or "Offer ends midnight tonight" — exploit a cognitive bias known as loss aversion: the tendency to feel the pain of losing something more acutely than the pleasure of gaining something of equivalent value. Consumers may rush to purchase not because they have genuinely evaluated the product but because they fear missing out.

Grace, who works in retail marketing, says awareness of these techniques does not make people immune to them. "Knowing the trick doesn't make it stop working," she says. "That's what makes behavioral economics both fascinating and slightly unsettling."

Understanding the psychology behind pricing decisions is valuable not only for marketers, but for anyone who wants to become a more deliberate and less manipulated consumer.`
  },

  // ── 12. ANIMALS & PETS ───────────────────────────────────────────────────
  {
    id: 52,
    title: "Animal Intelligence: More Than We Thought",
    topic: "animals and pets",
    level: "B1",
    wordCount: 305,
    keywords: [
      { word: 'cognition', definition: 'the mental processes of thinking, learning, and understanding' },
      { word: 'self-awareness', definition: 'the ability to recognize yourself as an individual' },
      { word: 'empathy', definition: 'the ability to understand and share the feelings of another' },
      { word: 'rudimentary', definition: 'very basic; not fully developed' },
      { word: 'theory of mind', definition: 'the ability to understand that others have different thoughts and knowledge' },
      { word: 'referential communication', definition: 'directing someone else\'s attention to a specific object or place' },
      { word: 'instinct', definition: 'a natural behaviour that an animal is born with' },
      { word: 'ethical', definition: 'following moral principles about right and wrong' },
      { word: 'captivity', definition: 'the state of being kept in a place and not allowed to leave' },
      { word: 'permeable', definition: 'able to be passed through; not clearly divided' },
    ],
    text: `For most of Western history, the dominant view of animals was that they were essentially biological machines — capable of complex behaviors driven by instinct, but lacking the self-awareness, planning ability, and emotional depth associated with human intelligence. Advances in animal cognition research over the past few decades have forced a significant revision of this view.

Chimpanzees and other great apes have long been known to use simple tools, but the sophistication of tool use observed across the animal kingdom has surprised even specialists. New Caledonian crows — a species of bird — have been shown to manufacture tools from materials they have not encountered before, combine multiple tools to solve multi-step problems, and even demonstrate a rudimentary form of planning by selecting the right tool for a task in advance. These are cognitive feats once considered exclusively human.

Elephants display behaviors that suggest a capacity for empathy and grief that is striking in its resemblance to human mourning. They have been observed returning repeatedly to the bones of deceased family members, touching them gently with their trunks. They recognize themselves in mirrors — one of the key behavioral tests for self-awareness — a capability shared by only a small number of species.

Dolphins communicate using individual "signature whistles" that function somewhat like names, and research suggests they can understand and use referential communication — the ability to direct another's attention toward a specific object or location — which requires a theory of mind: an understanding that others have distinct perspectives and knowledge.

These findings have important ethical implications. If many animals possess significant cognitive and emotional capacities, this raises serious questions about how they are treated in farming, research, entertainment, and captivity more broadly.

The scientific consensus is moving steadily in one direction: the boundary between human and animal cognition is considerably more permeable than we previously assumed.`
  },

  // ── 13. EDUCATION ────────────────────────────────────────────────────────
  {
    id: 53,
    title: "The Debate Over University Education",
    topic: "education",
    level: "B1",
    wordCount: 312,
    keywords: [
      { word: 'vocation', definition: 'a type of work that you feel is your calling or purpose' },
      { word: 'elite', definition: 'a small group of people with the most power or privilege' },
      { word: 'enrich', definition: 'to improve the quality or value of something' },
      { word: 'correlation', definition: 'a connection between two things that change together' },
      { word: 'nuanced', definition: 'having many small but important differences or details' },
      { word: 'debt', definition: 'money that you owe to someone and must pay back' },
      { word: 'workforce', definition: 'all the people available and willing to work' },
      { word: 'critical thinking', definition: 'the ability to analyse information carefully and make good judgements' },
      { word: 'employable', definition: 'having the skills and qualities that employers want' },
      { word: 'assumption', definition: 'something you believe to be true without checking' },
    ],
    text: `In many countries, university education expanded enormously in the second half of the twentieth century. What had once been the preserve of a small social elite became, over several generations, something approaching a mass experience. In the United Kingdom, for example, fewer than five percent of young people attended university in the 1960s; today the figure is closer to fifty percent.

This expansion was driven by a broadly optimistic belief: that higher education was both personally enriching and economically beneficial, and that giving more people access to it would reduce inequality and produce a more skilled, innovative workforce. Both sides of this argument have been significantly complicated by subsequent experience.

The economic argument for university has not disappeared, but it has become more nuanced. A degree still correlates with higher lifetime earnings on average, but the gap between graduates and non-graduates has narrowed in some fields, and it varies enormously depending on the subject studied, the institution attended, and the economic conditions graduates enter. Meanwhile, the cost of university education has risen sharply in many countries, leaving students with significant debt at the beginning of their working lives — a burden that can take decades to repay.

The personal enrichment argument has also been contested. Critics argue that much university education has become narrowly vocational, focused on producing employable graduates rather than broadly educated citizens capable of critical thinking, cultural engagement, and democratic participation. Others argue that this is precisely the wrong critique: that universities should be preparing people for the labor market, not for abstract intellectual fulfillment.

Paulo, who chose a vocational training course over university, says he has no regrets. He entered a field he loves, has no debt, and has been employed continuously since he qualified. He acknowledges that his path would not suit everyone, but believes the cultural assumption that university is always the best route after secondary school deserves serious questioning.`
  },

  // ── 14. WEATHER & ENVIRONMENT ────────────────────────────────────────────
  {
    id: 54,
    title: "Living with Drought",
    topic: "weather",
    level: "B1",
    wordCount: 306,
    keywords: [
      { word: 'water scarcity', definition: 'a lack of enough clean water for people\'s needs' },
      { word: 'precipitation', definition: 'water that falls from the sky as rain, snow, or hail' },
      { word: 'reservoir', definition: 'a large artificial lake used to store water for a city or region' },
      { word: 'desalination', definition: 'the process of removing salt from seawater to make it drinkable' },
      { word: 'irrigation', definition: 'the system of supplying water to land to help crops grow' },
      { word: 'arid', definition: 'having very little rain; very dry' },
      { word: 'food insecurity', definition: 'a lack of reliable access to enough food' },
      { word: 'municipal', definition: 'relating to a local town or city government' },
      { word: 'conservation', definition: 'the careful use of water or other resources to avoid waste' },
      { word: 'glacial retreat', definition: 'the shrinking of glaciers over time due to rising temperatures' },
    ],
    text: `Water scarcity is not a problem confined to arid or developing regions. In recent years, severe droughts have affected parts of Europe, North America, and Australia with a frequency and intensity that has surprised many scientists and policymakers. As global temperatures continue to rise and precipitation patterns become less predictable, managing water resources has become one of the most pressing infrastructure challenges of the twenty-first century.

Drought has multiple, interconnected consequences. The most immediate is agricultural: crops fail when rainfall is insufficient, leading to food price increases and, in the most severe cases, widespread food insecurity. Droughts also affect energy production, since many power stations — including renewable hydroelectric plants — depend on consistent water supplies. In regions that rely on glaciers as long-term water storage systems, accelerating glacial retreat is reducing water availability in ways that may become irreversible within decades.

Cities are not immune. Cape Town, South Africa, came close to running out of municipal water in 2018 in an event that became widely referred to as "Day Zero" — the point at which the city's reservoirs would have dropped to levels at which the tap supply would be cut off. Extraordinary conservation measures, combined with an unusually wet winter, narrowly averted the crisis. But the episode served as a powerful warning to urban planners and water authorities worldwide.

Effective responses to drought operate on multiple levels simultaneously. At the individual level, water conservation behaviors — shorter showers, efficient appliances, drought-tolerant gardens — can make a meaningful collective difference. At the municipal level, investment in water recycling infrastructure, leak reduction, and desalination facilities is increasingly necessary. At the agricultural level, transitioning to more water-efficient crops and irrigation techniques is critical.

Underlying all of these responses is a cultural shift: treating water not as an inexhaustible resource to be consumed without thought, but as a finite and precious element whose management requires both technical innovation and behavioral change.`
  },

  // ── 15. TECHNOLOGY & SOCIETY ─────────────────────────────────────────────
  {
    id: 55,
    title: "Privacy in the Digital Age",
    topic: "technology",
    level: "B1",
    wordCount: 314,
    keywords: [
      { word: 'data', definition: 'information, especially in a form that a computer can use' },
      { word: 'behavioral profile', definition: 'a detailed record of a person\'s actions, habits, and preferences' },
      { word: 'micro-targeted', definition: 'aimed at very specific groups of people based on detailed data' },
      { word: 'creditworthiness', definition: 'how likely a person is to repay money they borrow' },
      { word: 'consent', definition: 'permission that you give for something to happen' },
      { word: 'jurisdiction', definition: 'the area over which a law or authority has power' },
      { word: 'regulation', definition: 'an official rule made by a government or authority' },
      { word: 'implication', definition: 'a possible result or effect that is not directly stated' },
      { word: 'nominally', definition: 'in name only; not in a real or effective way' },
      { word: 'violation', definition: 'an act that breaks a rule or law' },
    ],
    text: `Every time we use a search engine, visit a website, post on social media, or make an online purchase, we generate data. This data is collected, stored, analyzed, and often sold by the companies whose services we use. The scale of this collection is extraordinary: researchers have estimated that the amount of data created globally doubles roughly every two years, and the majority of it is personal — reflecting our movements, preferences, relationships, anxieties, and ambitions.

Most people consent to this data collection, at least nominally, by accepting the terms and conditions of the services they use. But research consistently shows that very few people read these documents, which can run to tens of thousands of words. In practice, the choice many users face is between accepting data collection in full or not using a service at all — a choice that, when the service in question is a dominant communication platform or a professional necessity, is not much of a choice at all.

The implications of this data economy are broad and still unfolding. Targeted advertising — matching commercial messages to individuals based on their detailed behavioral profiles — is the most visible application. But data collected by private companies is also used to influence political behavior through micro-targeted messaging, to determine creditworthiness, to screen job candidates, and to assess insurance risk.

Regulatory responses have been significant in some jurisdictions. The European Union's General Data Protection Regulation, introduced in 2018, established important rights for individuals including the right to access their data, the right to have it deleted, and the right to know how it is being used. It also imposed substantial fines for violations, signaling that privacy is to be treated as a genuine legal right rather than a corporate preference.

Whether regulation can keep pace with technological change remains deeply uncertain. The fundamental tension between the commercial incentives that drive data collection and the democratic and personal interests that privacy protects is unlikely to be resolved easily or quickly.`
  },

  // ── 16. HOLIDAYS & CULTURE ───────────────────────────────────────────────
  {
    id: 56,
    title: "The Commercialization of Holidays",
    topic: "holidays and celebrations",
    level: "B1",
    wordCount: 299,
    keywords: [
      { word: 'commercialization', definition: 'the process of making something focused on making money' },
      { word: 'spiritual', definition: 'relating to the human spirit or religion, rather than physical things' },
      { word: 'observance', definition: 'the practice of following a religious or cultural tradition' },
      { word: 'profitability', definition: 'the ability of a business to make more money than it spends' },
      { word: 'consumerism', definition: 'the idea that buying and owning things is very important' },
      { word: 'commemoration', definition: 'an event or action that honours and remembers something or someone' },
      { word: 'gratitude', definition: 'the feeling of being thankful for something' },
      { word: 'reflection', definition: 'serious and careful thought about something' },
      { word: 'packaging', definition: 'the wrapping or containers that goods are sold in' },
      { word: 'disproportionate', definition: 'too large or too small in relation to something else' },
    ],
    text: `Many of the world's major holidays have deep roots in religion, seasonal tradition, or historical commemoration. Christmas, Diwali, Hanukkah, Eid, and the Lunar New Year all carry profound cultural and spiritual significance for millions of people. Yet in many parts of the world, these occasions have also become enormous commercial events, driving consumer spending on a scale that their original celebrants could scarcely have imagined.

The commercialization of Christmas in Western countries is perhaps the most extensively documented example. The modern image of Santa Claus — red suit, white beard, reindeer — owes its current form in large part to a series of influential Coca-Cola advertising campaigns in the 1930s. Gift-giving has expanded from a modest exchange to an industry worth hundreds of billions of dollars. The retail sector in many countries depends significantly on Christmas sales to achieve annual profitability.

This commercial dimension is frequently criticized on cultural and environmental grounds. Critics argue that the material emphasis of modern holiday celebrations has displaced their deeper meaning, reducing what should be a time of reflection, gratitude, or spiritual observance to an obligation to spend. Environmentally, the waste generated during holiday seasons — wrapping paper, packaging, unwanted gifts, food — is disproportionately large.

Yet the picture is not entirely straightforward. For many people, the commercial and the meaningful are not in opposition. Shopping for gifts can be an expression of care and thoughtfulness. Shared meals and decorations create genuine connections and memories that endure long after the occasion.

Grace says she has simplified her family's Christmas over the past few years — fewer gifts, more time together, more focus on food and conversation. She hasn't abandoned the holiday; she's re-negotiated her relationship with it.

Perhaps the most honest conclusion is that commercialization creates pressure, and that resisting that pressure, rather than removing it, requires a conscious and ongoing act of attention.`
  },

  // ── 17. TRANSPORT & URBAN LIFE ───────────────────────────────────────────
  {
    id: 57,
    title: "The Return of the Train",
    topic: "travel",
    level: "B1",
    wordCount: 304,
    keywords: [
      { word: 'infrastructure', definition: 'the basic systems a country needs, such as roads and railways' },
      { word: 'high-speed rail', definition: 'a railway system on which trains travel much faster than normal' },
      { word: 'carbon emissions', definition: 'carbon dioxide gas released into the air, mainly by burning fuels' },
      { word: 'flight shame', definition: 'the feeling of guilt about flying because of its environmental impact' },
      { word: 'momentum', definition: 'the force or energy that keeps something moving forward' },
      { word: 'capital investment', definition: 'a large amount of money spent on building or improving something' },
      { word: 'consensus', definition: 'general agreement among a group of people' },
      { word: 'reappraisal', definition: 'a new look at something to judge whether it is good or not' },
      { word: 'commute', definition: 'the regular journey between home and work' },
      { word: 'matured', definition: 'reached a full, developed state over time' },
    ],
    text: `For much of the latter half of the twentieth century, rail travel appeared to be a technology in decline. The expansion of commercial aviation made long-distance travel faster and, as the industry matured, increasingly affordable. Road infrastructure improved, and car ownership became widespread. Trains seemed to many observers to be a remnant of an earlier era — practical for short urban commutes, but largely irrelevant to the way modern societies moved.

That perception has changed significantly in recent years, driven by a combination of environmental concern, technological improvement, and a reappraisal of what comfortable, productive travel actually looks like.

High-speed rail networks have transformed long-distance travel in countries that have invested in them. In Japan, the Shinkansen bullet train has been running since 1964 and remains a model of reliability, speed, and passenger experience. China has built the world's largest high-speed rail network since 2007, connecting cities that previously required internal flights with journeys of a few hours. In Europe, the opening of new routes and the expansion of existing networks has made it genuinely competitive with flying on many important city pairs when total journey time — including airport check-in, security, and transfer — is taken into account.

Environmental considerations have given rail travel a renewed political and cultural momentum. Trains produce a fraction of the greenhouse gas emissions of equivalent air travel per passenger kilometer. In several European countries, a movement sometimes described as "flight shame" has encouraged travelers, particularly younger ones, to choose rail over air on environmental grounds.

The challenge for rail's continued expansion is primarily economic rather than technological. Building high-speed infrastructure requires enormous capital investment and decades of planning. In countries with fragmented political systems or competing regional interests, reaching the consensus needed to approve large infrastructure projects has proven extremely difficult. The vision is compelling; the path to it remains complex.`
  },

  // ── 18. SPORTS & SOCIETY ─────────────────────────────────────────────────
  {
    id: 58,
    title: "Sport and National Identity",
    topic: "sports",
    level: "B1",
    wordCount: 303,
    keywords: [
      { word: 'euphoria', definition: 'a feeling of great happiness and excitement' },
      { word: 'cohesion', definition: 'the quality of working or staying together as a united group' },
      { word: 'hooliganism', definition: 'violent or destructive behaviour by a group, especially at sports events' },
      { word: 'nationalism', definition: 'strong belief in and support for one\'s own nation, sometimes at the expense of others' },
      { word: 'apartheid', definition: 'the former political system in South Africa that separated people by race' },
      { word: 'civil rights', definition: 'the rights of all citizens to equal treatment under the law' },
      { word: 'arena', definition: 'a place where competitions happen; also a field of activity or debate' },
      { word: 'provocation', definition: 'an action or remark that is intended to make someone angry' },
      { word: 'collective', definition: 'shared by or involving all members of a group' },
      { word: 'architecture', definition: 'here, the underlying structure or organisation of something' },
    ],
    text: `Few things reveal the emotional architecture of a nation quite as vividly as how it responds to victory and defeat in international sport. The collective euphoria that follows a World Cup triumph, or the shared grief that descends after an unexpected early exit, are experiences of remarkable social intensity — capable of briefly dissolving class distinctions, regional rivalries, and political divisions behind a common banner.

This relationship between sport and national identity is not accidental. In the late nineteenth and early twentieth centuries, competitive sport was deliberately promoted by governments and educational institutions as a vehicle for building national cohesion. The modern Olympic movement, founded in 1896, was explicitly conceived as a means of fostering international understanding through peaceful athletic competition — though from its earliest days, it also served as an arena in which nations measured themselves against one another with considerable seriousness.

The dynamics are complex. Sport can unite, but it can also be a vehicle for the expression of darker forms of nationalism. Hooliganism, ethnic and racial abuse of athletes, and the use of sporting events as platforms for political provocation have all illustrated the ways in which the intense emotions generated by sport can take destructive rather than constructive forms.

At the same time, sport has occasionally served as a site of genuine political progress. The integrated South African rugby team that won the Rugby World Cup in 1995, the year after the end of apartheid, became one of the most powerful symbols of a nation attempting to reinvent itself. Jackie Robinson's entry into Major League Baseball in 1947 was a significant moment in the long struggle for civil rights in the United States.

Carlos believes the power of sport to shape how people see themselves and each other is too significant to be treated as merely entertainment. "When a national team wins," he says, "something real happens to the people watching — something that politics rarely achieves."
`
  },

  // ── 19. FOOD & CULTURE ───────────────────────────────────────────────────
  {
    id: 59,
    title: "The Global Coffee Culture",
    topic: "food",
    level: "B1",
    wordCount: 307,
    keywords: [
      { word: 'commodity', definition: 'a useful raw material or product that is bought and sold' },
      { word: 'ubiquitous', definition: 'found or present everywhere' },
      { word: 'ritual', definition: 'a set of actions done in a fixed order, often for a special reason' },
      { word: 'communal', definition: 'shared by or belonging to all members of a community' },
      { word: 'per capita', definition: 'for each person; calculated by dividing by the number of people' },
      { word: 'civic', definition: 'relating to a city or the duties of citizens' },
      { word: 'specialty coffee', definition: 'high-quality coffee from specific regions, carefully grown and prepared' },
      { word: 'single-origin', definition: 'coffee that comes from one specific farm or region' },
      { word: 'barista', definition: 'a person who makes and serves coffee professionally' },
      { word: 'espresso', definition: 'a small, strong cup of coffee made by forcing hot water through ground coffee' },
    ],
    text: `Coffee is the second most traded commodity in the world after crude oil, consumed in extraordinary quantities across virtually every country and culture on earth. Yet for all its global ubiquity, coffee culture is anything but uniform. The way people grow, prepare, serve, and drink coffee reflects deep cultural values, social rituals, and historical traditions that vary remarkably from place to place.

In Ethiopia, widely regarded as the birthplace of coffee cultivation, the traditional coffee ceremony is a slow, communal ritual that can last several hours. Green coffee beans are roasted, ground, and brewed in a clay pot called a jebena, and the coffee is served three times — the three rounds are said to transform the spirit in different ways. Participating in the ceremony is an expression of respect, friendship, and community.

In Italy, espresso culture is built around speed and sociality. The standard interaction at an Italian coffee bar is brief: stand at the counter, drink your espresso in two or three sips, exchange a few words with the barista, and leave. Sitting at a table costs extra. Ordering a cappuccino after eleven in the morning is regarded with mild suspicion.

In Scandinavia, particularly in Finland and Sweden, coffee is consumed in the largest quantities per capita in the world, typically brewed at home, drunk throughout the day, and served with a slice of cake during "fika" — the Swedish concept of a social coffee break that is considered almost a civic institution.

The third wave specialty coffee movement, which has spread from the United States over the past two decades, has introduced concepts like single-origin beans, specific brewing techniques, and flavor tasting notes to urban audiences around the world.

Jack, who has visited coffee-producing regions in Colombia and Ethiopia, says the experience transformed his understanding of what he was drinking. "Every cup has a geography," he says. "A story of soil and rain and human labor." Most of us forget that with the first sip.`
  },

  // ── 20. ENVIRONMENT & SUSTAINABILITY ─────────────────────────────────────
  {
    id: 60,
    title: "Fast Fashion and Its True Cost",
    topic: "nature",
    level: "B1",
    wordCount: 316,
    keywords: [
      { word: 'fast fashion', definition: 'cheaply made clothing produced quickly and in large quantities' },
      { word: 'garment', definition: 'a piece of clothing' },
      { word: 'incinerate', definition: 'to destroy something by burning it completely' },
      { word: 'microplastic', definition: 'a tiny piece of plastic that pollutes the environment' },
      { word: 'synthetic fibre', definition: 'a man-made material such as polyester, used in clothing' },
      { word: 'capsule wardrobe', definition: 'a small collection of clothes that can be worn in many combinations' },
      { word: 'labor', definition: 'work, especially physical work' },
      { word: 'secondhand', definition: 'previously owned or used by someone else' },
      { word: 'consumption', definition: 'the act of buying and using goods or resources' },
      { word: 'carbon emissions', definition: 'carbon dioxide gas released into the air, mainly from burning fuels' },
    ],
    text: `The fashion industry has undergone a dramatic transformation over the past thirty years. Where previous generations might have purchased a relatively small number of garments per year, expecting them to last for many seasons, the rise of "fast fashion" — characterized by extremely rapid production cycles, very low prices, and constant encouragement to buy new items — has fundamentally altered consumption patterns across the world.

Global clothing production has roughly doubled since 2000, while the average number of times a garment is worn before being discarded has fallen by around forty percent. The result is a system that generates an enormous amount of waste. It is estimated that the equivalent of a rubbish truck full of textiles is either landfilled or incinerated every second globally.

The environmental footprint of this system extends well beyond waste. The fashion industry is responsible for approximately ten percent of global carbon dioxide emissions — more than all international flights and maritime shipping combined. Cotton cultivation is extraordinarily water-intensive: it takes roughly two thousand liters of water to produce a single cotton T-shirt. Synthetic fibers such as polyester, which now account for the majority of clothing produced, shed microplastics with every wash, which enter waterways and eventually the ocean.

The human cost is equally significant. The majority of global garment production takes place in countries where labor is cheap, regulation is limited, and working conditions are frequently dangerous. The 2013 collapse of the Rana Plaza factory in Bangladesh, which killed more than 1,100 workers, brought international attention to the conditions under which much of the world's clothing is made.

Consumer responses have varied. A growing movement toward secondhand shopping, clothing rental, capsule wardrobes, and "buying less, buying better" has gained visibility, particularly among younger consumers. But awareness and behavior change are different things, and the structures of the fast fashion system — low prices, constant newness, algorithmic marketing — are extraordinarily effective at maintaining consumption patterns even among those who are critical of them.`
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

// Browser global (works with a plain <script src="texts-b1.js"> tag)
if (typeof window !== 'undefined') {
  window.B1Texts = { texts, getTopics, getByTopic, getRandom };
}
