const conceptBank = [
  {
    module: "Module 1: Land Use and Transportation",
    concept: "Mobility vs accessibility",
    correct: "Accessibility measures what opportunities people can reach, while mobility measures movement efficiency.",
    distractors: [
      "Mobility and accessibility are always identical when speeds increase.",
      "Accessibility only applies to freight and not passenger travel.",
      "Mobility is measured only by the number of parking spaces."
    ],
    explanation: "PTP questions often test this distinction. Faster travel is mobility; reaching jobs, services, schools, or transit is accessibility.",
    stems: [
      "A TOD plan lowers auto LOS at two intersections but increases jobs reachable within 30 minutes by transit. What concept best captures the benefit?",
      "A city wants to evaluate whether households can reach groceries, schools, and clinics without driving. Which concept is central?",
      "A widening project improves peak speed but does not increase access to destinations for zero-car households. Which distinction is being tested?",
      "A compact growth scenario shortens trip distances even though local speeds decline. Which planning concept explains why it can still perform well?",
      "A performance dashboard tracks jobs reachable by walking, biking, transit, and auto. Which concept is the dashboard emphasizing?"
    ]
  },
  {
    module: "Module 1: Land Use and Transportation",
    concept: "Land use feedback",
    correct: "Transportation investments can change accessibility, development patterns, and future travel demand.",
    distractors: [
      "Land use is fixed once a roadway project is selected.",
      "Transportation planning excludes zoning and development patterns.",
      "Traffic volumes are independent of access to land."
    ],
    explanation: "Land use and transportation influence each other. A project can change development pressure, mode choice, trip lengths, and VMT.",
    stems: [
      "After a highway interchange opens, nearby farmland converts to auto-oriented retail and warehouses. What planning concept is illustrated?",
      "Why should a long-range plan test land use scenarios when evaluating major transportation investments?",
      "A planner warns that capacity expansion can reshape future demand by making edge development more attractive. What idea is this?",
      "A model scenario changes population and employment by zone after a new transit line is assumed. What relationship is being represented?",
      "A corridor plan evaluates both access changes and redevelopment potential. What concept justifies linking those analyses?"
    ]
  },
  {
    module: "Module 1: Land Use and Transportation",
    concept: "Access management",
    correct: "Access management controls driveway, median, turning, and intersection access to preserve safety and roadway function.",
    distractors: [
      "Access management means eliminating all local street connections.",
      "Access management is only a transit fare policy.",
      "Access management is the same as a household travel survey."
    ],
    explanation: "Access management balances property access with through movement by managing conflict points and spacing.",
    stems: [
      "An arterial plan consolidates driveways and adds raised medians to reduce conflict points. Which concept applies?",
      "A corridor has many closely spaced curb cuts and crash conflicts. Which strategy category is most relevant?",
      "A city requires shared access between adjacent commercial parcels along a highway. What is it practicing?",
      "A plan limits full-movement driveways near major intersections. Which transportation planning tool is this?",
      "A roadway's function is degraded by frequent unsignalized access points. Which concept addresses the issue?"
    ]
  },
  {
    module: "Module 1: Land Use and Transportation",
    concept: "Context-sensitive solutions",
    correct: "The design should fit transportation purpose, land use context, community values, and environmental setting.",
    distractors: [
      "Every roadway should use the same design speed and cross section.",
      "Community context is considered only after construction begins.",
      "CSS means selecting the lowest-cost alternative regardless of impacts."
    ],
    explanation: "Context-sensitive solutions align transportation function with local context, stakeholder needs, safety, and environmental constraints.",
    stems: [
      "A main street project balances freight access, slower traffic, storefront access, and pedestrian comfort. Which principle is this?",
      "A rural scenic corridor avoids oversized urban design standards to protect community character. What approach is being used?",
      "A project team changes a cross section after public input about school access and historic resources. Which concept fits?",
      "A transportation alternative is modified to preserve place character while meeting safety needs. What is this called?",
      "A corridor plan starts with purpose and need but also weighs community and environmental context. Which idea applies?"
    ]
  },
  {
    module: "Module 1: Land Use and Transportation",
    concept: "Planning process",
    correct: "Planning supports decisions through goals, data, alternatives, evaluation, public input, and implementation.",
    distractors: [
      "Planning replaces elected officials and public policy judgment.",
      "Planning begins only after a preferred contractor is selected.",
      "Planning is only a traffic count exercise."
    ],
    explanation: "The planning process informs decisions. It does not mechanically dictate outcomes or replace public values.",
    stems: [
      "A model shows delay, so a staff member says the widening must be built. What is the best critique?",
      "Which statement best describes the role of transportation planning in public decision-making?",
      "A corridor study moves from problem definition to alternatives and evaluation. What process is being followed?",
      "Why are goals and performance measures established before ranking projects?",
      "A plan combines technical analysis with community input and funding constraints. What is the role of that process?"
    ]
  },
  {
    module: "Module 2: Needs Assessment",
    concept: "Performance measures",
    correct: "Performance measures connect goals to observable outcomes such as safety, access, reliability, condition, and emissions.",
    distractors: [
      "Performance measures are decorative and unrelated to project selection.",
      "Only total lane miles can be used as a performance measure.",
      "Performance measures should be chosen after the final project is built."
    ],
    explanation: "Good performance measures translate policy goals into evidence that can guide needs assessment and evaluation.",
    stems: [
      "A region sets targets for fatal crashes, pavement condition, transit access, and reliability. What planning approach is this?",
      "A plan ranks alternatives using measures tied to adopted goals. What role do those measures play?",
      "Why is average speed alone insufficient for a multimodal regional plan?",
      "A safety goal is paired with fatal and serious injury crash metrics. What is being established?",
      "A needs assessment includes access, reliability, condition, safety, and equity indicators. What concept organizes the analysis?"
    ]
  },
  {
    module: "Module 2: Needs Assessment",
    concept: "Reliability",
    correct: "Reliability measures the consistency and predictability of travel time.",
    distractors: [
      "Reliability is the same as posted speed limit.",
      "Reliability measures only the age of pavement.",
      "Reliability is unrelated to operations."
    ],
    explanation: "A route may have acceptable average travel time but poor reliability if incidents or recurring variation make trips unpredictable.",
    stems: [
      "A corridor has moderate average delay but severe day-to-day travel time variation. Which performance concept is most relevant?",
      "A freight operator values predictable delivery time more than the fastest possible time. Which metric matters?",
      "A dashboard reports buffer time needed to arrive on time. What is it measuring?",
      "Incident delays make a commute unpredictable even when average speed is acceptable. Which need is being identified?",
      "A managed lanes analysis focuses on consistent peak-period travel time. Which concept is central?"
    ]
  },
  {
    module: "Module 2: Needs Assessment",
    concept: "Asset condition",
    correct: "State of good repair and asset preservation are valid transportation needs even without current congestion.",
    distractors: [
      "Asset condition is irrelevant unless traffic volumes exceed capacity.",
      "Bridges and pavements are only considered during land use forecasting.",
      "Maintenance needs cannot be included in transportation plans."
    ],
    explanation: "Needs assessment includes infrastructure condition, life-cycle costs, resilience, and preservation, not only congestion.",
    stems: [
      "A bridge carries acceptable traffic today but will reach the end of service life within eight years. What type of need is this?",
      "A plan prioritizes pavement preservation before adding new capacity. Which need is being emphasized?",
      "A transit agency identifies aging vehicles and maintenance facilities as its highest risk. What planning category is this?",
      "A roadway has low delay but poor pavement condition and drainage failures. Which need should be recorded?",
      "A region uses life-cycle cost analysis to maintain existing infrastructure. What concept is this tied to?"
    ]
  },
  {
    module: "Module 2: Needs Assessment",
    concept: "Safety needs",
    correct: "Safety analysis should consider crash severity, exposure, roadway context, and systemic risk.",
    distractors: [
      "Safety need is proven only by total traffic volume.",
      "A location with no reported crashes can never have a safety issue.",
      "Safety is evaluated only after project completion."
    ],
    explanation: "Modern safety planning emphasizes fatal and serious injury prevention and may use systemic risk where crash history is sparse.",
    stems: [
      "Residents report dangerous school crossings, but reported crash history is low because few children walk. What should a planner do?",
      "A plan prioritizes fatal and serious injury reduction over total crash count. Which concept is being applied?",
      "A rural curve has risk factors similar to severe crash locations but little crash history. What analysis is appropriate?",
      "A pedestrian corridor has high speeds, long crossings, and low lighting. Which need category is most direct?",
      "A safety program screens locations by roadway features and exposure, not only past crashes. What approach is this?"
    ]
  },
  {
    module: "Module 2: Needs Assessment",
    concept: "Data collection",
    correct: "Needs assessment should combine observed data, forecasts, field review, and community input.",
    distractors: [
      "One anecdote is sufficient to define all regional needs.",
      "Traffic counts alone capture every transportation issue.",
      "Public input should be ignored when data exists."
    ],
    explanation: "Different data sources answer different questions. Robust needs assessment triangulates evidence.",
    stems: [
      "A planner has traffic counts, crash data, field observations, and public comments. What is the best use of these sources?",
      "A corridor study uses Bluetooth travel times, turning counts, bus delay data, and resident input. What principle is illustrated?",
      "Why should a needs assessment avoid relying on a single data source?",
      "A public meeting identifies missing sidewalks not visible in regional model outputs. How should this be handled?",
      "A freight bottleneck is confirmed by GPS data and shipper interviews. What does this show?"
    ]
  },
  {
    module: "Module 3: System Planning and Analysis",
    concept: "Trip generation",
    correct: "Trip generation estimates trip productions and attractions for zones or land uses.",
    distractors: [
      "Trip generation assigns vehicles to network links.",
      "Trip generation chooses between auto and transit.",
      "Trip generation sets the federal funding program."
    ],
    explanation: "In the four-step model, trip generation estimates how many trips begin or end in each zone.",
    stems: [
      "A model estimates how many trips are produced by households and attracted by employment zones. Which step is this?",
      "A site impact study estimates trips from a proposed retail development. Which modeling concept applies?",
      "A regional model uses households, employment, and school enrollment to estimate trip ends. What step is being performed?",
      "A planner asks how many daily trips a new land use will create before considering destination choice. Which step is first?",
      "A zone's productions and attractions are being calculated. Which four-step model stage is this?"
    ]
  },
  {
    module: "Module 3: System Planning and Analysis",
    concept: "Trip distribution",
    correct: "Trip distribution links trip origins and destinations into travel patterns.",
    distractors: [
      "Trip distribution determines pavement thickness.",
      "Trip distribution is the same as public participation.",
      "Trip distribution sets parking meter prices."
    ],
    explanation: "Distribution estimates where trips go after productions and attractions are known.",
    stems: [
      "A model allocates trips between origin and destination zones. Which step is this?",
      "A planner creates an origin-destination matrix from zone trip ends. What process is being used?",
      "A gravity model estimates travel between zones based on attractions and travel impedance. Which step is this?",
      "A regional analysis determines whether new households travel to the CBD or suburban job centers. Which model step fits?",
      "A table shows trips from every zone to every other zone. Which concept produced it?"
    ]
  },
  {
    module: "Module 3: System Planning and Analysis",
    concept: "Mode choice",
    correct: "Mode choice estimates how trips are split among available modes such as auto, transit, walking, and biking.",
    distractors: [
      "Mode choice calculates bridge replacement cost.",
      "Mode choice is only the legal adoption of a plan.",
      "Mode choice ignores travel time, cost, and access."
    ],
    explanation: "Mode choice depends on relative time, cost, availability, service quality, parking, and traveler characteristics.",
    stems: [
      "A model estimates whether trips use auto, transit, walking, or biking. Which step is this?",
      "A new transit line changes the share of trips made by bus and rail. Which model component captures that?",
      "A planner tests parking pricing and bus frequency effects on travel behavior. Which step is most directly affected?",
      "A model uses travel time, fare, parking cost, and vehicle availability to estimate travel mode. What is it doing?",
      "A scenario shifts commute trips from single-occupant vehicles to transit. Which concept is central?"
    ]
  },
  {
    module: "Module 3: System Planning and Analysis",
    concept: "Traffic assignment",
    correct: "Traffic assignment loads trips onto specific network paths and links.",
    distractors: [
      "Traffic assignment estimates household trip productions.",
      "Traffic assignment creates zoning regulations.",
      "Traffic assignment is identical to environmental justice analysis."
    ],
    explanation: "Assignment estimates route choice and link volumes after trips, destinations, and modes are determined.",
    stems: [
      "A model loads vehicle trips onto roadway links and estimates segment volumes. Which step is this?",
      "A planner compares route choices after a new bridge opens. Which modeling step applies?",
      "A network analysis estimates link-level congestion from an O-D matrix. What is being performed?",
      "A model tests whether drivers divert from one arterial to another after tolling. Which step is most direct?",
      "A screenline volume forecast comes from trips loaded onto the network. Which concept produced it?"
    ]
  },
  {
    module: "Module 3: System Planning and Analysis",
    concept: "Scenario planning",
    correct: "Scenario planning compares plausible futures to test policy, land use, investment, and uncertainty.",
    distractors: [
      "Scenario planning selects only one future and ignores uncertainty.",
      "Scenario planning is limited to construction scheduling.",
      "Scenario planning prohibits public values."
    ],
    explanation: "Scenarios help decision-makers understand tradeoffs under different growth, technology, funding, or policy assumptions.",
    stems: [
      "A region compares compact growth, dispersed growth, and transit-oriented futures. Which method is this?",
      "A long-range plan tests different assumptions for population, land use, and funding. What approach is being used?",
      "A resilience plan evaluates outcomes under high-growth, low-growth, and extreme-weather futures. What concept applies?",
      "A corridor study compares a highway-focused alternative with a multimodal redevelopment alternative. Which planning tool is this?",
      "A planner presents multiple plausible futures instead of one forecast. What is the method called?"
    ]
  },
  {
    module: "Module 3: System Planning and Analysis",
    concept: "TDM",
    correct: "Transportation demand management changes travel choices about mode, time, route, destination, or need to travel.",
    distractors: [
      "TDM means building only new general-purpose lanes.",
      "TDM is another term for bridge inspection.",
      "TDM prohibits employer programs and pricing."
    ],
    explanation: "TDM includes transit benefits, carpooling, telework, pricing, parking management, and other demand-side strategies.",
    stems: [
      "An employer offers transit passes, telework, and carpool matching to reduce peak SOV trips. Which strategy is this?",
      "A downtown adjusts parking pricing to shift peak demand and encourage alternatives. Which concept applies?",
      "A university reduces vehicle trips through shuttle service, bike incentives, and remote work policies. What is this?",
      "A corridor plan reduces peak demand without adding lanes. Which strategy category likely applies?",
      "A city tries to change when and how people travel rather than expand capacity. Which concept is central?"
    ]
  },
  {
    module: "Module 3: System Planning and Analysis",
    concept: "TSMO",
    correct: "TSMO improves system performance through operations, management, technology, and coordination.",
    distractors: [
      "TSMO is only long-range zoning.",
      "TSMO excludes incident response and signal coordination.",
      "TSMO means abandoning existing infrastructure."
    ],
    explanation: "TSMO uses the existing system more effectively through active traffic management, incident management, signals, information, and coordination.",
    stems: [
      "A region uses incident management, adaptive signals, and traveler information before widening a freeway. Which approach is this?",
      "A corridor plan improves throughput by coordinating signals and managing events. Which concept applies?",
      "A freeway operations center deploys ramp metering and real-time information. What strategy type is this?",
      "A plan focuses on making the existing network perform better rather than adding capacity first. Which concept fits?",
      "A bottleneck is addressed through operations, enforcement coordination, and data sharing. What is this called?"
    ]
  },
  {
    module: "Module 4: Evaluation and Public Policy",
    concept: "Alternatives evaluation",
    correct: "Alternatives should be compared against adopted goals, performance measures, costs, risks, and impacts.",
    distractors: [
      "The alternative with the most lane miles is always best.",
      "Evaluation begins only after construction is complete.",
      "Public policy goals should be excluded from evaluation."
    ],
    explanation: "Evaluation is multidimensional. It should make tradeoffs visible rather than reduce every decision to one metric.",
    stems: [
      "A project reduces delay but has high cost and community impacts. What should evaluation do?",
      "A ranking framework includes safety, access, cost, equity, environment, and deliverability. What process is this?",
      "Why is a single congestion score often insufficient for project prioritization?",
      "A plan compares alternatives using adopted goals and measurable outcomes. Which concept applies?",
      "A board asks staff to show tradeoffs instead of only the top-scoring project. What evaluation principle is this?"
    ]
  },
  {
    module: "Module 4: Evaluation and Public Policy",
    concept: "Benefit-cost analysis",
    correct: "Benefit-cost analysis monetizes benefits and costs where possible but does not replace policy judgment.",
    distractors: [
      "Benefit-cost analysis automatically resolves all equity and community questions.",
      "Benefit-cost analysis cannot include travel time or safety benefits.",
      "Benefit-cost analysis is the same as a public meeting transcript."
    ],
    explanation: "BCA is useful but incomplete. Non-monetized impacts, distributional effects, uncertainty, and policy goals still matter.",
    stems: [
      "A project has a high benefit-cost ratio but harms a vulnerable community. What is the best interpretation?",
      "Why should decision-makers avoid using BCA as the only project selection criterion?",
      "A study monetizes travel time, crashes, emissions, and construction cost. What method is this?",
      "A planner notes that some environmental justice impacts are not fully monetized. What does this caution apply to?",
      "A project's quantified benefits exceed costs, but public acceptability is low. What evaluation limitation is shown?"
    ]
  },
  {
    module: "Module 4: Evaluation and Public Policy",
    concept: "Equity evaluation",
    correct: "Equity evaluation examines who receives benefits, who bears burdens, and whether impacts are disproportionate.",
    distractors: [
      "Equity evaluation only counts total regional delay.",
      "Equity is unrelated to project prioritization.",
      "Equity analysis is only needed for toll roads."
    ],
    explanation: "Equity focuses on distribution, access, affordability, displacement, participation, and disproportionate adverse effects.",
    stems: [
      "A highway project improves regional speed but displaces low-income households. What evaluation issue is raised?",
      "A transit project has modest travel-time savings but greatly improves access for zero-car households. What should evaluation consider?",
      "A plan maps benefits and burdens by income, race, age, and disability. Which concept applies?",
      "A toll facility saves time for some users but creates affordability concerns. Which evaluation lens is needed?",
      "A project's benefits are regional but impacts are concentrated in one neighborhood. What issue is central?"
    ]
  },
  {
    module: "Module 4: Evaluation and Public Policy",
    concept: "Fiscal constraint",
    correct: "Fiscal constraint means planned investments are reasonably matched to expected revenues.",
    distractors: [
      "Fiscal constraint requires every desired project to be funded.",
      "Fiscal constraint removes the need for public involvement.",
      "Fiscal constraint means cost estimates are unnecessary."
    ],
    explanation: "Fiscally constrained plans distinguish realistic funded or fundable investments from wish lists.",
    stems: [
      "A metropolitan plan includes only projects that fit reasonably expected revenues. What requirement is being met?",
      "Why must a long-range transportation plan compare project costs with anticipated funding?",
      "A project is desired by the public but no funding source is identified. What planning issue is raised?",
      "A plan separates constrained projects from illustrative projects. Which concept explains this?",
      "A region updates revenue forecasts before adopting its project list. What principle is being applied?"
    ]
  },
  {
    module: "Module 4: Evaluation and Public Policy",
    concept: "Performance-based planning",
    correct: "Performance-based planning links goals, measures, targets, investment decisions, and monitoring.",
    distractors: [
      "Performance-based planning selects projects without goals or measures.",
      "Performance-based planning prohibits targets.",
      "Performance-based planning is only graphic design."
    ],
    explanation: "The performance framework connects policy intent to measurable outcomes and implementation accountability.",
    stems: [
      "A region sets safety targets, tracks progress, and aligns funding with results. What approach is this?",
      "A plan links goals, measures, targets, and project selection. Which concept applies?",
      "Why are targets and monitoring important after a plan is adopted?",
      "A project score is tied directly to adopted outcomes. What type of planning is being used?",
      "A board asks whether investments are moving measures toward adopted targets. What framework is this?"
    ]
  },
  {
    module: "Module 5: Environmental Analysis",
    concept: "Environmental justice",
    correct: "Environmental justice addresses disproportionately high and adverse effects on minority and low-income populations.",
    distractors: [
      "Environmental justice is only a pavement design standard.",
      "Environmental justice excludes public participation.",
      "Environmental justice applies only to vehicle color."
    ],
    explanation: "EJ also includes meaningful involvement and fair treatment in planning and project development.",
    stems: [
      "A project's noise, displacement, and access impacts fall mainly on low-income residents. Which analysis is required?",
      "A planning team translates notices and holds meetings in affected neighborhoods. Which principle is being supported?",
      "A plan compares adverse impacts on minority populations with regional benefits. What issue is being evaluated?",
      "A transit service cut would disproportionately affect zero-car low-income households. Which concept is central?",
      "A highway alternative avoids impacts in affluent areas but burdens a minority neighborhood. What analysis should flag this?"
    ]
  },
  {
    module: "Module 5: Environmental Analysis",
    concept: "NEPA and planning linkage",
    correct: "Planning can inform NEPA, but NEPA is a project-level environmental decision process.",
    distractors: [
      "NEPA replaces all long-range transportation planning.",
      "Transportation planning cannot consider environmental issues.",
      "NEPA applies only after construction has ended."
    ],
    explanation: "Good planning considers environmental issues early and can streamline project development, but NEPA has distinct requirements.",
    stems: [
      "A corridor study screens alternatives before later project-level environmental review. How should planning and NEPA relate?",
      "What is the best distinction between a long-range plan and NEPA review?",
      "A planning product documents purpose, need, alternatives, and environmental constraints for later use. What linkage is being attempted?",
      "Why should environmental issues be considered before a preferred alternative is locked in?",
      "A project advances from systems planning into environmental documentation. Which process relationship applies?"
    ]
  },
  {
    module: "Module 5: Environmental Analysis",
    concept: "Indirect impacts",
    correct: "Indirect impacts occur later in time or farther away but are reasonably foreseeable effects of the action.",
    distractors: [
      "Indirect impacts are impossible to consider in transportation planning.",
      "Indirect impacts are only construction invoice errors.",
      "Indirect impacts are identical to existing pavement condition."
    ],
    explanation: "Transportation can influence development, access, land conversion, and community patterns beyond the immediate footprint.",
    stems: [
      "A new interchange increases development pressure in rural land beyond the project footprint. What impact type is this?",
      "A bypass changes market access and induces commercial growth away from downtown. Which environmental concept applies?",
      "A project may lead to future land use changes because access improves. What should analysis consider?",
      "A transportation investment causes effects not directly at the construction site but reasonably foreseeable. What are these?",
      "A corridor plan evaluates secondary development effects. Which impact category is being assessed?"
    ]
  },
  {
    module: "Module 5: Environmental Analysis",
    concept: "Mitigation",
    correct: "Mitigation avoids, minimizes, repairs, reduces, or compensates for adverse impacts.",
    distractors: [
      "Mitigation means ignoring impacts after they are found.",
      "Mitigation is the same as selecting the cheapest alternative.",
      "Mitigation prohibits alignment changes."
    ],
    explanation: "Mitigation can include avoidance, design changes, noise barriers, habitat restoration, replacement access, and compensation.",
    stems: [
      "A project shifts alignment to avoid a wetland and adds noise barriers near homes. What is this?",
      "A plan identifies adverse impacts and proposes design changes to reduce them. Which concept applies?",
      "A project compensates for unavoidable habitat loss. What category does this fall under?",
      "A corridor alternative is revised to avoid a historic resource. What process is being used?",
      "A team first avoids impacts, then minimizes remaining impacts, then compensates where needed. What is this hierarchy?"
    ]
  },
  {
    module: "Module 5: Environmental Analysis",
    concept: "Air quality conformity",
    correct: "Transportation conformity links plans and programs in nonattainment or maintenance areas to air quality requirements.",
    distractors: [
      "Conformity is only a bridge painting requirement.",
      "Conformity applies only to bicycle helmet laws.",
      "Conformity removes emissions from transportation analysis."
    ],
    explanation: "In relevant areas, transportation plans and TIPs must conform to air quality plans and budgets.",
    stems: [
      "A region in ozone nonattainment adds a highway project to its MTP and TIP. Which issue must be checked?",
      "A transportation plan must show consistency with air quality emissions budgets. What requirement is this?",
      "A new project may affect regional emissions in a maintenance area. Which analysis becomes important?",
      "A plan update is delayed because conformity documentation is incomplete. What concept is involved?",
      "A project list is tested against air quality requirements before approval. What is being performed?"
    ]
  },
  {
    module: "Module 6: Implementation",
    concept: "MTP/LRTP",
    correct: "The metropolitan transportation plan sets long-range fiscally constrained transportation policy and investments.",
    distractors: [
      "The MTP is only tomorrow's construction schedule.",
      "The MTP is unrelated to public involvement.",
      "The MTP covers only private parking lots."
    ],
    explanation: "The MTP/LRTP typically covers at least 20 years and connects regional goals, projects, revenues, and performance.",
    stems: [
      "Which document sets a region's long-range transportation investment direction over at least 20 years?",
      "A region adopts a fiscally constrained 25-year project and policy plan. What document is this?",
      "A transit extension is planned for a future decade but not yet programmed for construction. Where would it likely appear first?",
      "A plan describes long-range goals, forecasts, financial assumptions, and major projects. What is it?",
      "An MPO updates its future transportation vision and investment strategy. Which planning product is central?"
    ]
  },
  {
    module: "Module 6: Implementation",
    concept: "TIP/STIP",
    correct: "The TIP/STIP programs near-term transportation projects for implementation using available funding.",
    distractors: [
      "The TIP is only a theoretical land use scenario.",
      "The TIP replaces all environmental permits.",
      "The TIP is a household survey instrument."
    ],
    explanation: "The TIP is the near-term programming document and must be consistent with the long-range plan.",
    stems: [
      "Which document most directly moves near-term metropolitan projects toward implementation?",
      "A project is in the long-range plan but not programmed for the next several years. Which document is missing it?",
      "A region lists funded projects expected to proceed in the short term. What program is this?",
      "A project cannot advance with federal funds because it is not in the approved near-term program. Which document matters?",
      "An MPO updates the list of projects to be implemented over the next few years. What is it updating?"
    ]
  },
  {
    module: "Module 6: Implementation",
    concept: "3-C process",
    correct: "Metropolitan planning should be continuing, cooperative, and comprehensive.",
    distractors: [
      "The 3-C process means closed, confidential, and centralized.",
      "The 3-C process means construction, concrete, and claims.",
      "The 3-C process applies only to private driveway permits."
    ],
    explanation: "The 3-C process is a foundation of metropolitan transportation planning.",
    stems: [
      "What does the 3-C transportation planning process stand for?",
      "An MPO regularly coordinates with agencies and considers all modes and regional issues. Which principle applies?",
      "A planning process is ongoing, collaborative, and multimodal. What federal planning concept does this reflect?",
      "A region updates plans continuously with state, transit, local, and public participation. What process is being followed?",
      "Which phrase best describes the expected nature of metropolitan transportation planning?"
    ]
  },
  {
    module: "Module 6: Implementation",
    concept: "Public participation",
    correct: "Public participation should be early, meaningful, inclusive, and connected to decisions.",
    distractors: [
      "Public participation is only required after final design is complete.",
      "Public participation means posting a plan after adoption and accepting no feedback.",
      "Public participation should exclude affected communities."
    ],
    explanation: "Engagement improves legitimacy and helps identify needs, impacts, values, and implementation barriers.",
    stems: [
      "A project team meets with affected neighborhoods before alternatives are narrowed. Which implementation principle is this?",
      "Why should engagement occur before selecting a preferred alternative?",
      "A plan uses translation, accessible meetings, and targeted outreach. Which concept is being supported?",
      "A community identifies a barrier to school access not shown in the model. Why does participation matter?",
      "A public involvement plan connects comments to decision points. What is the key principle?"
    ]
  },
  {
    module: "Module 6: Implementation",
    concept: "Value capture",
    correct: "Value capture uses increases in land value created by public investment to help fund infrastructure.",
    distractors: [
      "Value capture is a travel demand model step.",
      "Value capture means ignoring who benefits from a project.",
      "Value capture is only a crash database."
    ],
    explanation: "Examples include tax increment financing, special assessment districts, joint development, and developer contributions.",
    stems: [
      "A rail station increases nearby land values, and a district uses part of that increase to fund station improvements. What is this?",
      "A city creates a special assessment around a new transit corridor. Which funding concept applies?",
      "A project is partly funded by development value created by improved access. What strategy is being used?",
      "A plan links infrastructure funding to land value gains near the investment. What is this called?",
      "A local government uses tax increment from station-area redevelopment to pay for access improvements. Which concept applies?"
    ]
  },
  {
    module: "Module 3: System Planning and Analysis",
    concept: "Transit planning",
    correct: "Transit planning evaluates service coverage, frequency, reliability, access, ridership markets, and operating resources.",
    distractors: [
      "Transit planning is only roadway pavement design.",
      "Transit planning ignores first- and last-mile access.",
      "Transit planning requires every route to have identical frequency."
    ],
    explanation: "Transit planning balances ridership, coverage, equity, service design, cost, reliability, and access to stops.",
    stems: [
      "A bus network redesign compares high-frequency ridership routes with coverage routes. Which planning field is this?",
      "A planner evaluates stop access, headways, span of service, and transfer quality. What mode is being planned?",
      "A transit agency changes route spacing and frequency to improve reliability. Which planning concept applies?",
      "A plan identifies zero-car households and major job centers as key markets. What planning effort is this?",
      "A service analysis weighs operating cost, passenger loads, and schedule reliability. Which mode is central?"
    ]
  },
  {
    module: "Module 3: System Planning and Analysis",
    concept: "Pedestrian and bicycle planning",
    correct: "Pedestrian and bicycle planning focuses on safety, comfort, connectivity, directness, access, and network gaps.",
    distractors: [
      "Pedestrian planning is only freeway ramp metering.",
      "Bicycle planning ignores traffic speed and crossing distance.",
      "Walking access is unrelated to transit planning."
    ],
    explanation: "Active transportation planning must account for human scale, crossing safety, network continuity, and perceived comfort.",
    stems: [
      "A city maps missing sidewalks, high-stress bike links, and unsafe crossings near schools. Which planning area is this?",
      "A transit access plan improves crossings and sidewalks around stations. Which concept is included?",
      "A bike network analysis prioritizes low-stress connectivity between neighborhoods and jobs. What is being planned?",
      "A pedestrian plan identifies long crossings and high-speed traffic as barriers. Which mode is central?",
      "A complete streets project adds safe crossings, sidewalks, and bike lanes. Which planning concept applies?"
    ]
  },
  {
    module: "Module 3: System Planning and Analysis",
    concept: "Freight planning",
    correct: "Freight planning considers supply chains, truck routes, terminals, land use, reliability, and goods movement needs.",
    distractors: [
      "Freight planning can be fully described by household travel surveys.",
      "Freight planning excludes industrial land use.",
      "Freight planning is only residential parking management."
    ],
    explanation: "Freight demand depends on economic activity, logistics, warehousing, ports, rail, truck access, and delivery constraints.",
    stems: [
      "A region studies truck bottlenecks near warehouses, ports, and intermodal terminals. Which planning topic is this?",
      "Why are household travel surveys insufficient for goods movement analysis?",
      "A corridor plan evaluates delivery reliability and industrial access. Which user group is central?",
      "A freight plan maps last-mile truck routes and loading conflicts. What is being planned?",
      "A logistics district creates heavy truck demand not captured by commute data. Which planning field addresses this?"
    ]
  },
  {
    module: "Module 4: Evaluation and Public Policy",
    concept: "Safety performance",
    correct: "Safety performance emphasizes fatal and serious injury reduction, exposure, and risk.",
    distractors: [
      "Safety performance is measured only by posted speed limit.",
      "Safety performance excludes pedestrians and bicyclists.",
      "Safety performance is unrelated to project evaluation."
    ],
    explanation: "Safety evaluation should consider severity and risk, especially for vulnerable users and high-speed contexts.",
    stems: [
      "A plan prioritizes locations with high fatal and serious injury risk. Which performance area is this?",
      "A project reduces severe crash risk even if total crashes change little. What concept supports it?",
      "A region uses a high-injury network to guide investments. Which evaluation area is central?",
      "A speed management project is justified by severe pedestrian crash risk. Which measure matters most?",
      "A safety target tracks fatalities and serious injuries. Which planning concept is being applied?"
    ]
  },
  {
    module: "Module 5: Environmental Analysis",
    concept: "Resilience",
    correct: "Resilience planning addresses vulnerability, adaptation, recovery, and continuity under disruptions or extreme events.",
    distractors: [
      "Resilience means ignoring climate and hazard risk.",
      "Resilience applies only to logo design.",
      "Resilience prohibits redundancy in the network."
    ],
    explanation: "Transportation resilience considers flooding, heat, storms, seismic risk, evacuation, redundancy, and recovery.",
    stems: [
      "A coastal highway plan evaluates flooding, evacuation routes, and redundant access. Which concept applies?",
      "A transit agency raises critical equipment above projected flood levels. What planning goal is this?",
      "A region screens assets for climate vulnerability and recovery importance. Which analysis is this?",
      "A bridge investment is prioritized because it maintains access after disasters. What concept is central?",
      "A plan considers extreme weather impacts on system continuity. Which planning area is this?"
    ]
  },
  {
    module: "Module 6: Implementation",
    concept: "Implementation framework",
    correct: "Implementation requires responsible parties, funding, phasing, approvals, monitoring, and coordination.",
    distractors: [
      "A vision statement alone is a complete implementation plan.",
      "Implementation should not identify agencies or timelines.",
      "Monitoring is unrelated to implementation."
    ],
    explanation: "Plans become real through programming, institutional ownership, budgets, schedules, permits, partnerships, and tracking.",
    stems: [
      "A plan has goals but no funding source, agency owner, schedule, or monitoring. What is the weakness?",
      "A corridor plan assigns lead agencies, phases projects, and identifies funding programs. What is it building?",
      "Why is a project list without costs and responsibilities hard to implement?",
      "A plan connects recommendations to grants, local match, and a delivery timeline. Which concept is this?",
      "A region tracks implementation progress after plan adoption. What part of planning is being strengthened?"
    ]
  },
  {
    module: "Module 2: Needs Assessment",
    concept: "Equity in needs assessment",
    correct: "Needs assessment should identify whether transportation barriers and risks are unevenly distributed across populations.",
    distractors: [
      "Needs assessment should average all users and ignore distribution.",
      "Equity can be considered only after construction is finished.",
      "Equity analysis means selecting the fastest project automatically."
    ],
    explanation: "Equity starts with defining needs: who lacks access, who faces risk, who pays, and who is underserved.",
    stems: [
      "A region maps access to jobs for zero-car households before selecting projects. Which need is being examined?",
      "A neighborhood has fewer safe crossings and longer transit waits than the regional average. What lens is needed?",
      "A needs assessment compares service quality by income and disability status. Which concept applies?",
      "A plan identifies communities with high crash risk and low vehicle access. What analysis is this?",
      "A planner asks who experiences the transportation problem most severely. Which planning concern is this?"
    ]
  },
  {
    module: "Module 4: Evaluation and Public Policy",
    concept: "Prioritization",
    correct: "Prioritization ranks projects using transparent criteria aligned with goals, constraints, and readiness.",
    distractors: [
      "Prioritization should hide criteria from decision-makers.",
      "Prioritization means selecting only the largest project.",
      "Prioritization eliminates the need for funding analysis."
    ],
    explanation: "A good prioritization process is transparent, repeatable, and tied to policy goals while allowing judgment.",
    stems: [
      "A region scores projects by safety, access, equity, cost, readiness, and environmental impact. What process is this?",
      "Why should project ranking criteria be published before scoring?",
      "A plan distinguishes high-benefit projects from those not ready for delivery. Which process applies?",
      "A committee uses adopted goals and project readiness to order investments. What is this called?",
      "A project list is sorted using transparent criteria rather than informal preference alone. Which concept fits?"
    ]
  },
  {
    module: "Module 1: Land Use and Transportation",
    concept: "Parking management",
    correct: "Parking management influences access, mode choice, land use efficiency, and vehicle trip demand.",
    distractors: [
      "Parking supply has no effect on travel behavior.",
      "Parking management is only bridge asset inspection.",
      "Parking pricing cannot affect peak demand."
    ],
    explanation: "Parking supply, pricing, and regulation shape auto use, development form, walkability, and TDM effectiveness.",
    stems: [
      "A downtown removes parking minimums and prices curb spaces to manage demand. Which concept applies?",
      "A campus reduces SOV trips by charging for parking and offering transit passes. What policy area is involved?",
      "A city uses shared parking to support compact mixed-use development. Which planning concept is this?",
      "A corridor has abundant free parking that undermines transit use. What factor should the planner evaluate?",
      "A plan treats parking as part of demand management and land use strategy. Which concept is central?"
    ]
  },
  {
    module: "Module 6: Implementation",
    concept: "Funding sources",
    correct: "Transportation funding can include fuel taxes, tolls, fees, grants, bonds, local taxes, and value capture.",
    distractors: [
      "Transportation projects can only be funded by one universal source.",
      "Funding sources are unrelated to fiscal constraint.",
      "Revenue estimates are unnecessary for implementation."
    ],
    explanation: "Implementation depends on matching eligible projects to realistic revenue sources and financing tools.",
    stems: [
      "A plan combines federal grants, local sales tax, toll revenue, and bonds. What implementation issue is being addressed?",
      "Why must a project's funding eligibility be checked before programming it?",
      "A region updates revenue assumptions before adopting a project list. Which planning task is this?",
      "A project relies on tolls and local match rather than only formula funds. Which concept applies?",
      "A finance plan identifies grants, fees, bonds, and value capture. What is it supporting?"
    ]
  },
  {
    module: "Module 5: Environmental Analysis",
    concept: "Community impacts",
    correct: "Community impact analysis considers access, cohesion, displacement, noise, public health, and local services.",
    distractors: [
      "Community impact analysis is only asphalt mix testing.",
      "Displacement and neighborhood cohesion are never transportation issues.",
      "Community impacts are identical to travel demand model calibration."
    ],
    explanation: "Transportation projects can affect neighborhoods through access changes, barriers, relocation, noise, vibration, and service access.",
    stems: [
      "A freeway alternative divides a neighborhood and reduces access to schools. Which impact category is this?",
      "A project may relocate homes and businesses. What analysis should evaluate this burden?",
      "A corridor design changes access to community facilities and parks. Which environmental topic applies?",
      "A plan considers noise, displacement, cohesion, and public health. What type of impact is being assessed?",
      "A new arterial creates a barrier between residents and services. Which analysis should identify it?"
    ]
  },
  {
    module: "Module 3: System Planning and Analysis",
    concept: "Functional classification",
    correct: "Functional classification describes a roadway's role in balancing mobility and land access.",
    distractors: [
      "Functional classification is a transit fare table.",
      "Functional classification applies only to airports.",
      "Functional classification is the same as household income."
    ],
    explanation: "Freeways emphasize mobility, local streets emphasize access, and arterials/collectors balance both.",
    stems: [
      "A roadway is evaluated by whether it primarily provides through movement or property access. Which concept applies?",
      "Why might driveway spacing expectations differ between an arterial and a local street?",
      "A network plan distinguishes freeways, arterials, collectors, and local roads. What is being used?",
      "A street's role in the hierarchy affects design and access decisions. Which classification is this?",
      "A collector street balances neighborhood access with circulation. Which concept explains its role?"
    ]
  }
];

const modules = [...new Set(conceptBank.map((item) => item.module))];
const optionLetters = ["A", "B", "C", "D"];

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededShuffle(items, seedText) {
  const output = [...items];
  let seed = hashString(seedText) || 1;
  for (let index = output.length - 1; index > 0; index -= 1) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const swapIndex = seed % (index + 1);
    [output[index], output[swapIndex]] = [output[swapIndex], output[index]];
  }
  return output;
}

const questions = conceptBank.slice(0, 40).flatMap((concept, conceptIndex) =>
  concept.stems.map((stem, stemIndex) => {
    const id = conceptIndex * 5 + stemIndex + 1;
    const options = seededShuffle(
      [concept.correct, ...concept.distractors],
      `${concept.concept}-${stemIndex}`
    );
    return {
      id,
      module: concept.module,
      concept: concept.concept,
      stem,
      options,
      answerIndex: options.indexOf(concept.correct),
      explanation: concept.explanation
    };
  })
);

let selectedModule = "All modules";
let submitted = false;
let score = 0;
let currentSet = [];
const setSize = 20;

const elements = {
  moduleFilter: document.getElementById("moduleFilter"),
  randomButton: document.getElementById("randomButton"),
  resetButton: document.getElementById("resetButton"),
  progressText: document.getElementById("progressText"),
  scoreText: document.getElementById("scoreText"),
  completionText: document.getElementById("completionText"),
  questionList: document.getElementById("questionList"),
  submitButton: document.getElementById("submitButton"),
};

function filteredQuestions() {
  if (selectedModule === "All modules") {
    return questions;
  }
  return questions.filter((question) => question.module === selectedModule);
}

function populateModuleFilter() {
  elements.moduleFilter.innerHTML = "";
  ["All modules", ...modules].forEach((moduleName) => {
    const option = document.createElement("option");
    option.value = moduleName;
    option.textContent = moduleName;
    elements.moduleFilter.append(option);
  });
}

function randomQuestions() {
  return seededShuffle(filteredQuestions(), `${Date.now()}-${Math.random()}`).slice(0, setSize);
}

function renderSet() {
  submitted = false;
  score = 0;
  currentSet = randomQuestions();
  elements.questionList.innerHTML = "";
  elements.submitButton.disabled = false;
  elements.progressText.textContent = `${currentSet.length} random questions from ${questions.length}`;
  elements.scoreText.textContent = "Not submitted";

  currentSet.forEach((question, questionIndex) => {
    const article = document.createElement("article");
    article.className = "question-panel";
    article.dataset.questionId = String(question.id);

    const meta = document.createElement("div");
    meta.className = "question-meta";
    const number = document.createElement("span");
    number.textContent = `Question ${questionIndex + 1}`;
    const module = document.createElement("span");
    module.textContent = question.module;
    const concept = document.createElement("span");
    concept.textContent = question.concept;
    meta.append(number, module, concept);

    const heading = document.createElement("h2");
    heading.textContent = question.stem;

    const answerForm = document.createElement("form");
    answerForm.className = "answers";
    answerForm.dataset.questionId = String(question.id);

    question.options.forEach((optionText, optionIndex) => {
      const label = document.createElement("label");
      label.className = "answer-option";
      label.htmlFor = `q${question.id}-answer-${optionIndex}`;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `answer-${question.id}`;
      input.id = `q${question.id}-answer-${optionIndex}`;
      input.value = String(optionIndex);

      const span = document.createElement("span");
      span.textContent = `${optionLetters[optionIndex]}. ${optionText}`;

      label.append(input, span);
      answerForm.append(label);
    });

    const feedback = document.createElement("div");
    feedback.className = "feedback";
    feedback.hidden = true;

    article.append(meta, heading, answerForm, feedback);
    elements.questionList.append(article);
  });
  updateCompletionText();
}

function selectedAnswerIndex(questionId) {
  const selected = elements.questionList.querySelector(`input[name="answer-${questionId}"]:checked`);
  return selected ? Number(selected.value) : null;
}

function submitAnswer() {
  if (submitted) {
    return;
  }
  submitted = true;
  score = 0;
  currentSet.forEach((question) => {
    const panel = elements.questionList.querySelector(`[data-question-id="${question.id}"]`);
    const selectedIndex = selectedAnswerIndex(question.id);
    const isCorrect = selectedIndex === question.answerIndex;
    if (isCorrect) {
      score += 1;
    }

    [...panel.querySelectorAll(".answer-option")].forEach((label, index) => {
      const input = label.querySelector("input");
      input.disabled = true;
      if (index === question.answerIndex) {
        label.classList.add("correct");
      }
      if (selectedIndex !== null && index === selectedIndex && !isCorrect) {
        label.classList.add("incorrect");
      }
    });

    const feedback = panel.querySelector(".feedback");
    feedback.hidden = false;
    feedback.dataset.result = isCorrect ? "right" : "wrong";
    if (selectedIndex === null) {
      feedback.dataset.result = "wrong";
      feedback.innerHTML = `
        <strong>未作答。正确答案：${optionLetters[question.answerIndex]}</strong>
        <div>${question.options[question.answerIndex]}</div>
        <p>${question.explanation}</p>
      `;
    } else {
      feedback.innerHTML = `
        <strong>${isCorrect ? "Correct." : "Incorrect."} 正确答案：${optionLetters[question.answerIndex]}</strong>
        <div>${question.options[question.answerIndex]}</div>
        <p>${question.explanation}</p>
      `;
    }
  });

  elements.submitButton.disabled = true;
  elements.scoreText.textContent = `Score ${score} / ${currentSet.length}`;
  elements.completionText.textContent = `Submitted ${currentSet.length} questions`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetScore() {
  renderSet();
}

function updateCompletionText() {
  const answeredCount = currentSet.filter((question) => selectedAnswerIndex(question.id) !== null).length;
  elements.completionText.textContent = `Answered ${answeredCount} / ${currentSet.length}`;
}

function bindEvents() {
  elements.moduleFilter.addEventListener("change", () => {
    selectedModule = elements.moduleFilter.value;
    renderSet();
  });

  elements.randomButton.addEventListener("click", renderSet);
  elements.resetButton.addEventListener("click", resetScore);
  elements.submitButton.addEventListener("click", submitAnswer);
  elements.questionList.addEventListener("change", updateCompletionText);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !submitted) {
      event.preventDefault();
      submitAnswer();
    }
  });
}

populateModuleFilter();
bindEvents();
renderSet();
