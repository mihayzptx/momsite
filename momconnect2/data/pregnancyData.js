/**
 * Week-by-week pregnancy information for MomConnect application
 * Contains data for all 40 weeks of pregnancy with detailed information about:
 * - Baby's development
 * - Mother's physical changes
 * - Common symptoms
 * - Nutrition tips
 * - Important medical checks
 * - Self-care recommendations
 */

const pregnancyData = {
    // First Trimester (Weeks 1-13)
    trimester1: {
      overview: "The first trimester is a time of rapid development for your baby. During these early weeks, all major organs and body systems begin to form. Many women experience morning sickness, fatigue, and breast tenderness during this time. This is also when your pregnancy is most vulnerable, so good prenatal care is essential.",
      weeks: {
        1: {
          babyDevelopment: "Conception occurs! When a sperm fertilizes your egg, your baby's DNA is set, determining gender and physical traits. The fertilized egg (zygote) begins dividing rapidly.",
          babySize: "Microscopic (smaller than a poppy seed)",
          maternalChanges: "You likely won't feel different yet, though the fertilized egg is traveling to your uterus.",
          commonSymptoms: ["None yet, as most women don't realize they're pregnant"],
          nutritionTips: ["Start taking prenatal vitamins with folic acid if you haven't already", "Maintain a balanced diet rich in fruits and vegetables"],
          medicalChecks: ["Confirm pregnancy with home test once you miss your period", "Schedule your first prenatal appointment"],
          selfCare: ["Avoid alcohol, tobacco, and recreational drugs", "Limit caffeine intake"],
          toDoThisWeek: ["Start taking prenatal vitamins if you haven't already", "Avoid harmful substances"]
        },
        2: {
          babyDevelopment: "The fertilized egg implants in your uterine lining. Cells begin to form into an embryo and placenta. The amniotic sac forms.",
          babySize: "Microscopic (smaller than a poppy seed)",
          maternalChanges: "Some women experience light spotting (implantation bleeding) as the fertilized egg attaches to the uterine wall.",
          commonSymptoms: ["Possible light spotting", "No other noticeable symptoms for most women"],
          nutritionTips: ["Focus on folate-rich foods like leafy greens, citrus fruits, and legumes", "Stay hydrated with water"],
          medicalChecks: ["Consider confirming pregnancy with a blood test", "Continue prenatal vitamins"],
          selfCare: ["Get adequate rest", "Begin tracking your cycle if you haven't been"],
          toDoThisWeek: ["Download a pregnancy app to track development", "Start a pregnancy journal if interested"]
        },
        3: {
          babyDevelopment: "The placenta is forming. The embryo is now about the size of a sesame seed. The neural tube, which will become the brain and spinal cord, is forming.",
          babySize: "1-2 mm (size of a sesame seed)",
          maternalChanges: "Hormone levels are rising, which may trigger early pregnancy symptoms.",
          commonSymptoms: ["Possible fatigue", "Slight breast tenderness", "Frequent urination may begin"],
          nutritionTips: ["Eat small, frequent meals if nausea begins", "Choose complex carbohydrates like whole grains for energy"],
          medicalChecks: ["Schedule your first prenatal appointment if you haven't yet"],
          selfCare: ["Listen to your body and rest when tired", "Begin practicing stress reduction techniques"],
          toDoThisWeek: ["Research healthcare providers if you haven't chosen one yet", "Begin thinking about how to share the news"]
        },
        4: {
          babyDevelopment: "The embryo is developing basic facial features. The heart tube begins to beat and pump blood. Limb buds that will become arms and legs are forming.",
          babySize: "5-6 mm (size of a poppy seed)",
          maternalChanges: "Your body is increasing blood production to support the growing embryo.",
          commonSymptoms: ["Morning sickness may begin", "Fatigue", "Breast tenderness", "Food aversions or cravings may start"],
          nutritionTips: ["Eat plain crackers before getting out of bed to help with morning sickness", "Focus on protein-rich foods to support blood cell production"],
          medicalChecks: ["First prenatal appointment typically scheduled around this time", "Discuss any medications you're taking with your doctor"],
          selfCare: ["Get plenty of rest", "Stay hydrated", "Consider gentle exercise like walking if you feel up to it"],
          toDoThisWeek: ["Start researching pregnancy nutrition", "Begin thinking about maternity leave options"]
        },
        5: {
          babyDevelopment: "The embryo's heart is now beating steadily. Brain development is rapid. Eyes, ears, and nose begin to form. Tiny limb buds are growing.",
          babySize: "8-10 mm (size of a sesame seed to a small bean)",
          maternalChanges: "Blood volume is increasing. Metabolism is speeding up.",
          commonSymptoms: ["Morning sickness", "Fatigue", "Breast changes and tenderness", "Increased urination", "Heightened sense of smell"],
          nutritionTips: ["Eat small meals throughout the day", "Try ginger tea or candies for nausea", "Increase iron intake through lean meats or leafy greens"],
          medicalChecks: ["First prenatal visit if you haven't had it yet", "Initial blood tests to check blood type, hemoglobin levels, and screen for infections"],
          selfCare: ["Rest when tired", "Try acupressure wristbands for nausea", "Wear a supportive bra as breasts change"],
          toDoThisWeek: ["Start a list of questions for your healthcare provider", "Research health insurance coverage for pregnancy and birth"]
        },
        6: {
          babyDevelopment: "The embryo's face is forming with openings for mouth, nose, and eyes. Arm and leg buds are more defined. Internal organs continue developing.",
          babySize: "12-15 mm (size of a lentil or small bean)",
          maternalChanges: "Hormones continue to increase, potentially intensifying symptoms.",
          commonSymptoms: ["Morning sickness", "Fatigue", "Food aversions", "Emotional changes", "Constipation may begin"],
          nutritionTips: ["Focus on fiber-rich foods to prevent constipation", "Try eating protein snacks before bed to stabilize blood sugar overnight"],
          medicalChecks: ["Possible early ultrasound to confirm pregnancy viability and dating"],
          selfCare: ["Listen to your body's needs for rest", "Stay hydrated with water and herbal teas", "Begin prenatal yoga if interested and approved by your doctor"],
          toDoThisWeek: ["Start researching childcare options if needed", "Consider when and how to announce your pregnancy"]
        },
        7: {
          babyDevelopment: "The embryo begins to move, though you can't feel it yet. Eyelids and ears are forming. The umbilical cord is clearly visible.",
          babySize: "18-22 mm (size of a blueberry)",
          maternalChanges: "Your uterus is now twice its normal size, though not showing externally yet.",
          commonSymptoms: ["Continued morning sickness", "Fatigue", "Frequent urination", "Excess saliva", "Heightened sense of smell"],
          nutritionTips: ["Incorporate calcium-rich foods like dairy or fortified plant milks", "Try eating bland, cold foods if nausea is severe"],
          medicalChecks: ["Discuss genetic testing options with your healthcare provider", "Routine weight and blood pressure checks"],
          selfCare: ["Find comfortable sleeping positions as your body changes", "Consider a pregnancy massage if you're feeling uncomfortable"],
          toDoThisWeek: ["Begin researching childbirth education classes", "Start a baby name list if you haven't already"]
        },
        8: {
          babyDevelopment: "The embryo is now officially a fetus. All essential organs have begun to form. Tiny fingers and toes are developing. The neural tube is closing.",
          babySize: "2.5 cm (size of a raspberry or grape)",
          maternalChanges: "Your blood volume has increased by 40-50%. You may notice veins becoming more visible.",
          commonSymptoms: ["Morning sickness may peak", "Breast changes continue", "Fatigue", "Bloating and gas", "Possible mild cramping"],
          nutritionTips: ["Focus on nutrition quality rather than quantity if sick", "Try vitamin B6 or ginger supplements for nausea (consult doctor first)"],
          medicalChecks: ["Prenatal appointment may include doppler to hear heartbeat", "Discuss any concerning symptoms with your provider"],
          selfCare: ["Try pregnancy-safe stretches for lower back discomfort", "Consider maternity support bands if experiencing pain"],
          toDoThisWeek: ["Research maternity and paternity leave options", "Begin thinking about your birth preferences"]
        },
        9: {
          babyDevelopment: "The fetus can make tiny movements. External genitalia begin to form but aren't distinguishable yet. Eyelids form but remain closed.",
          babySize: "3 cm (size of a grape or olive)",
          maternalChanges: "Your uterus is now the size of a grapefruit. Some women may notice slight abdominal swelling.",
          commonSymptoms: ["Morning sickness", "Nasal congestion and possible nosebleeds", "Breast tenderness", "Mood swings", "Visible veins on chest and breasts"],
          nutritionTips: ["Incorporate omega-3 fatty acids through fish or supplements (doctor-approved)", "Stay hydrated to help with nasal congestion"],
          medicalChecks: ["Possible early genetic testing such as NIPT (Non-Invasive Prenatal Testing)", "Routine weight and blood pressure check"],
          selfCare: ["Use a humidifier for nasal congestion", "Wear comfortable, non-restrictive clothing", "Practice pelvic floor exercises"],
          toDoThisWeek: ["Research baby gear and create preliminary registry", "Start planning any needed home modifications for baby"]
        },
        10: {
          babyDevelopment: "The fetus can now swallow and kick. Cartilage and bones begin to form. Vital organs like liver and kidneys start functioning.",
          babySize: "4 cm (size of a kumquat or large strawberry)",
          maternalChanges: "Your uterus can now be felt just above the pubic bone. Weight gain may begin.",
          commonSymptoms: ["Possible decrease in morning sickness", "Round ligament pain (sharp pain in lower abdomen)", "Visible veins across chest and breasts", "Increased vaginal discharge"],
          nutritionTips: ["Begin increasing caloric intake slightly if morning sickness is improving", "Focus on iron-rich foods to support increased blood volume"],
          medicalChecks: ["Prenatal appointment with heart rate check", "Possible ultrasound", "Discussion about optional genetic testing"],
          selfCare: ["Wear supportive shoes as your center of gravity begins to shift", "Use body pillows for comfort while sleeping", "Stay active with prenatal-approved exercise"],
          toDoThisWeek: ["Research prenatal classes in your area", "Start thinking about childcare arrangements if needed"]
        },
        11: {
          babyDevelopment: "The fetus's head makes up about half its length. Tooth buds are forming. The diaphragm is developing, and hiccups may begin (though you can't feel them yet).",
          babySize: "5 cm (size of a fig)",
          maternalChanges: "You may notice your waistline thickening. Many women begin to look pregnant around this time, especially with second or subsequent pregnancies.",
          commonSymptoms: ["Morning sickness often begins to improve", "Increased energy for some women", "Visible veins on breasts, abdomen", "Skin changes like darkening of areolas"],
          nutritionTips: ["If appetite is returning, focus on nutrient-dense foods", "Continue with prenatal vitamins", "Maintain adequate protein intake"],
          medicalChecks: ["Chorionic villus sampling (CVS) might be performed if chosen", "Routine weight, blood pressure, and urine checks"],
          selfCare: ["Begin moisturizing belly, hips, and breasts to help with stretching skin", "Consider maternity clothes as regular clothes become tight"],
          toDoThisWeek: ["Start planning nursery design if applicable", "Research breastfeeding vs. formula feeding"]
        },
        12: {
          babyDevelopment: "The fetus can now open and close fingers and curl toes. External genitalia are forming but may not be visible on ultrasound yet. Reflexes are developing.",
          babySize: "6-7 cm (size of a lime or plum)",
          maternalChanges: "Your uterus fills the pelvis now and is rising into the abdomen. You may notice your belly beginning to show.",
          commonSymptoms: ["Visible belly bump for some women", "Decreased morning sickness for many", "Increased appetite", "Increased vaginal discharge", "Headaches"],
          nutritionTips: ["Focus on quality protein sources", "Incorporate a variety of colorful fruits and vegetables", "Stay well-hydrated"],
          medicalChecks: ["End of first-trimester screening tests", "Discussion about second-trimester tests", "Routine prenatal check"],
          selfCare: ["Begin regular, gentle exercise if you haven't already", "Consider a belly band for support", "Focus on good posture as your center of gravity shifts"],
          toDoThisWeek: ["Consider announcing pregnancy to wider circle if you haven't yet", "Research childbirth education options"]
        },
        13: {
          babyDevelopment: "The fetus has unique fingerprints now. Vocal cords are forming. Intestines move from the umbilical cord into the abdomen.",
          babySize: "7-8 cm (size of a peach)",
          maternalChanges: "You've reached the end of the first trimester! Many women notice improved energy and decreased nausea.",
          commonSymptoms: ["Visible pregnancy bump", "Increased energy", "Less morning sickness", "Increased appetite", "Vaginal discharge continues"],
          nutritionTips: ["If appetite has returned, focus on balanced nutrition", "Increase calcium intake for baby's developing bones", "Stay hydrated"],
          medicalChecks: ["Routine prenatal appointment", "Discussion of second-trimester tests including anatomy scan"],
          selfCare: ["Shop for maternity clothes if needed", "Consider pregnancy-safe exercise routines", "Begin sleeping on your side, preferably the left"],
          toDoThisWeek: ["Start reading about childbirth options and creating a birth plan", "Consider registering for childbirth classes"]
        },
      }
    },
  
    // Second Trimester (Weeks 14-27)
    trimester2: {
      overview: "The second trimester is often called the 'honeymoon phase' of pregnancy. Morning sickness typically subsides, energy levels increase, and your baby bump becomes more visible. During this time, you'll likely feel your baby's first movements and learn the gender if you choose to. This is also when many of the prenatal screening tests are performed.",
      weeks: {
        14: {
          babyDevelopment: "The fetus can now make facial expressions like squinting and frowning. Kidneys are producing urine. Hair pattern is forming on the scalp.",
          babySize: "9 cm (size of a lemon)",
          maternalChanges: "Your uterus is now the size of a small melon and extends above your pubic bone. Pregnancy is usually visible now.",
          commonSymptoms: ["Decreasing nausea", "Increased energy", "Increased appetite", "Growing belly", "Breast changes continue"],
          nutritionTips: ["Increase calories by about 300 per day now", "Focus on iron-rich foods", "Continue calcium intake for bone development"],
          medicalChecks: ["Second-trimester blood tests may be scheduled", "Routine weight, blood pressure, and urine checks"],
          selfCare: ["Begin daily moisturizing of abdomen to help with itching as skin stretches", "Continue side-sleeping with pillows for support"],
          toDoThisWeek: ["Register for childbirth classes", "Begin researching pediatricians"]
        },
        15: {
          babyDevelopment: "The fetus can sense light through closed eyelids. Bones are getting harder. All joints and limbs can move.",
          babySize: "10 cm (size of an apple or navel orange)",
          maternalChanges: "Blood volume continues to increase. Your heart is working 40-50% harder than before pregnancy.",
          commonSymptoms: ["Nasal congestion or nosebleeds", "Heartburn may begin", "Improved energy levels", "Pink or red stretch marks may appear"],
          nutritionTips: ["Eat smaller, more frequent meals to prevent heartburn", "Include magnesium-rich foods like nuts and seeds for muscle development"],
          medicalChecks: ["Routine prenatal appointment", "Discuss upcoming anatomy scan"],
          selfCare: ["Stay active with pregnancy-safe exercises", "Consider a pregnancy massage", "Use pillows between knees when sleeping"],
          toDoThisWeek: ["Begin researching baby care basics", "Create a registry if you plan to have a baby shower"]
        },
        16: {
          babyDevelopment: "The fetus can make sucking motions with its mouth. Eyebrows and eyelashes are forming. The heart is pumping about 25 quarts of blood per day.",
          babySize: "12 cm (size of an avocado)",
          maternalChanges: "You may feel your baby move for the first time (called quickening), especially if this isn't your first pregnancy.",
          commonSymptoms: ["Possible quickening (feeling baby move)", "Constipation", "Round ligament pain", "Possible nasal congestion", "Increased appetite"],
          nutritionTips: ["Add fiber-rich foods to combat constipation", "Drink plenty of water", "Include healthy fats for baby's developing nervous system"],
          medicalChecks: ["Routine prenatal check", "Blood pressure monitoring", "May hear heartbeat with doppler"],
          selfCare: ["Practice good posture to minimize back pain", "Try prenatal yoga if interested", "Consider a belly support band for activity"],
          toDoThisWeek: ["Research cord blood banking options", "Begin thinking about your maternity leave plan"]
        },
        17: {
          babyDevelopment: "The fetus is adding fat stores. Sweat glands are developing. The heart is now regulated by the brain (instead of beating on its own).",
          babySize: "13 cm (size of a pomegranate)",
          maternalChanges: "Your belly is growing more noticeably now. The top of your uterus is midway between your pubic bone and navel.",
          commonSymptoms: ["More defined baby movements", "Increased appetite", "Possible headaches", "Stretch marks may develop", "Bleeding gums"],
          nutritionTips: ["Incorporate healthy fats like avocados and olive oil", "Ensure adequate calcium intake", "Continue with prenatal vitamins"],
          medicalChecks: ["Anatomy scan may be scheduled around this time", "Routine prenatal appointment"],
          selfCare: ["Use a supportive maternity bra", "Practice kegel exercises for pelvic floor strength", "Consider prenatal massage for tension relief"],
          toDoThisWeek: ["Finalize baby registry if applicable", "Research baby gear safety ratings"]
        },
        18: {
          babyDevelopment: "The fetus's ears are now in their final position. The baby can hear your voice. Myelin (nerve covering) is forming around nerves.",
          babySize: "14 cm (size of a bell pepper)",
          maternalChanges: "Your belly button may begin to flatten out or protrude. You've likely gained 5-10 pounds by now.",
          commonSymptoms: ["Definite fetal movement", "Backaches", "Leg cramps", "Mild swelling in ankles and feet", "Varicose veins may appear"],
          nutritionTips: ["Increase protein intake", "Add potassium-rich foods to help with leg cramps", "Stay hydrated to help with swelling"],
          medicalChecks: ["Anatomy ultrasound may be performed", "Routine prenatal check", "Weight and blood pressure monitoring"],
          selfCare: ["Use a pregnancy pillow for sleeping comfort", "Elevate feet to reduce swelling", "Wear support stockings if experiencing varicose veins"],
          toDoThisWeek: ["If having anatomy scan, decide if you want to learn baby's sex", "Begin planning nursery if applicable"]
        },
        19: {
          babyDevelopment: "The fetus is developing a protective coating called vernix caseosa. Sensory development is rapid. The baby follows a sleep-wake cycle.",
          babySize: "15 cm (size of a large mango)",
          maternalChanges: "You may notice stronger and more frequent movements. Your uterus is about level with your belly button.",
          commonSymptoms: ["Regular fetal movement", "Lower back pain", "Round ligament pain", "Leg cramps", "Heartburn"],
          nutritionTips: ["Eat iron-rich foods to prevent anemia", "Avoid lying down immediately after eating to reduce heartburn", "Stay well-hydrated"],
          medicalChecks: ["Follow-up on any abnormal findings from anatomy scan", "Routine prenatal check", "Group B strep testing may be discussed"],
          selfCare: ["Practice good posture", "Wear comfortable, supportive shoes", "Consider prenatal water exercises for relief"],
          toDoThisWeek: ["Begin thinking about childcare options if needed", "Research infant CPR and safety classes"]
        },
        20: {
          babyDevelopment: "The fetus has reached the halfway point! Eyebrows and eyelids are fully formed. Baby is developing taste buds and can taste what you eat through amniotic fluid.",
          babySize: "16 cm (size of a banana)",
          maternalChanges: "You're halfway through your pregnancy! Your fundal height (top of uterus) is now at your navel.",
          commonSymptoms: ["Noticeable fetal movements", "Braxton Hicks contractions may begin", "Increased vaginal discharge", "Heartburn", "Constipation"],
          nutritionTips: ["Continue with balanced diet", "Include omega-3 fatty acids for brain development", "Calcium for bone development"],
          medicalChecks: ["Important anatomy scan if not done already", "Routine check of weight and blood pressure", "Fundal height measurement begins"],
          selfCare: ["Begin pelvic tilts to relieve back pressure", "Use body pillows for sleeping comfort", "Consider prenatal massage"],
          toDoThisWeek: ["Decide on baby's name if you haven't", "Look into birth preparation classes"]
        },
        21: {
          babyDevelopment: "The fetus's inner ear is now developed, giving baby a sense of balance. Bone marrow is taking over red blood cell production. Fingers and toes are fully formed with nails.",
          babySize: "26-27 cm from head to toe (size of a carrot)",
          maternalChanges: "You've likely gained 10-13 pounds by now. Your uterus extends about 3/4 inch above your navel.",
          commonSymptoms: ["Stronger fetal movements", "Braxton Hicks contractions", "Increased appetite", "Stretch marks", "Sore feet and ankles"],
          nutritionTips: ["Focus on zinc-rich foods for immune system development", "Continue with calcium and vitamin D", "Increase water intake"],
          medicalChecks: ["Routine prenatal visit", "Glucose screening test may be scheduled", "Monitor blood pressure"],
          selfCare: ["Practice relaxation techniques", "Take breaks when standing for long periods", "Wear proper supportive shoes"],
          toDoThisWeek: ["Begin preparing older siblings if applicable", "Create a birth plan draft"]
        },
        22: {
          babyDevelopment: "The fetus has developed a strong grip. Eyelids and eyebrows are complete. The lips are becoming more distinct. White fat is accumulating.",
          babySize: "28 cm from head to toe (size of a papaya)",
          maternalChanges: "You may notice your skin changing, with possible darkening of the linea nigra (vertical line down abdomen) and areolas.",
          commonSymptoms: ["Distinct fetal movement patterns", "Braxton Hicks contractions", "Backaches", "Increased vaginal discharge", "Trouble sleeping"],
          nutritionTips: ["Include vitamin C-rich foods to help with iron absorption", "Choose complex carbs for sustained energy", "Monitor hydration"],
          medicalChecks: ["Routine prenatal visit", "Schedule glucose test if not already done", "Monitor fetal movement"],
          selfCare: ["Try swimming for exercise and pain relief", "Use heat or cold packs for backaches", "Begin sleep position adjustments with pillows"],
          toDoThisWeek: ["Pack early items for hospital bag", "Research newborn care classes"]
        },
        23: {
          babyDevelopment: "The fetus has a fully developed sense of movement and can feel you dance or exercise. The baby is practicing breathing movements. Blood vessels in lungs are developing.",
          babySize: "30 cm from head to toe (size of a large mango)",
          maternalChanges: "Your uterus extends about 1.5 inches above your navel. Stretch marks may become more noticeable.",
          commonSymptoms: ["Regular sleep/wake patterns from baby", "Back pain", "Increased hip pain", "Swollen ankles", "Potential hemorrhoids"],
          nutritionTips: ["Focus on fiber to prevent hemorrhoids", "Include vitamin K for baby's bone development", "Small frequent meals if experiencing fullness quickly"],
          medicalChecks: ["Routine prenatal check", "Glucose challenge test", "Monitor blood pressure"],
          selfCare: ["Consider pregnancy support belt", "Try prenatal yoga for hip pain", "Kegel exercises for pelvic support"],
          toDoThisWeek: ["Take a hospital tour if planning hospital birth", "Begin preparing freezer meals for after birth"]
        },
        24: {
          babyDevelopment: "The fetus's face is fully formed. The lungs are developing rapidly. The baby may respond to sounds by increasing pulse rate or movement.",
          babySize: "30+ cm from head to toe (size of an ear of corn)",
          maternalChanges: "Your belly button may now protrude. The top of your uterus is about 2 inches above your navel.",
          commonSymptoms: ["Strong fetal movements", "Swelling in hands and feet", "Backaches", "Increased clumsiness", "Trouble sleeping"],
          nutritionTips: ["Limit sodium to reduce swelling", "Continue with calcium-rich foods", "Monitor protein intake"],
          medicalChecks: ["Regular prenatal check", "Results from glucose test", "Track fetal movement patterns"],
          selfCare: ["Elevate feet several times a day", "Consider maternity support belt for back pain", "Practice relaxation techniques for better sleep"],
          toDoThisWeek: ["Create a list of pediatrician questions", "Research baby-proofing needs"]
        },
        25: {
          babyDevelopment: "The fetus's nostrils open. The brain is experiencing rapid growth. The baby responds to touch and sound. Lung development continues.",
          babySize: "34 cm from head to toe (size of a rutabaga)",
          maternalChanges: "Your uterus extends about 2.5 inches above your navel. Some women notice hair and nail growth accelerating.",
          commonSymptoms: ["Increased fetal movement", "Braxton Hicks contractions", "Heartburn", "Hemorrhoids may develop", "Carpal tunnel syndrome symptoms"],
          nutritionTips: ["Small frequent meals to manage heartburn", "Increase fiber for hemorrhoid prevention", "Include foods rich in B vitamins for energy"],
          medicalChecks: ["Routine prenatal visit", "Third trimester tests may be discussed", "Review any glucose test results"],
          selfCare: ["Use wrist braces for carpal tunnel symptoms", "Practice pelvic tilts for back relief", "Continue with approved exercise"],
          toDoThisWeek: ["Begin interviewing pediatricians", "Research childcare options if needed"]
        },
        26: {
          babyDevelopment: "The fetus's eyes begin to open. Lung development continues with the production of surfactant. Brain wave activity for hearing and sight begins.",
          babySize: "35 cm from head to toe (size of a head of lettuce)",
          maternalChanges: "You may have gained 16-22 pounds by now. Your uterus extends about 2.5 inches above your navel.",
          commonSymptoms: ["Stronger Braxton Hicks contractions", "Trouble sleeping", "Lower back pain", "Increased appetite", "Clumsiness", "Swelling"],
          nutritionTips: ["Focus on iron and protein", "Stay hydrated to help with contractions", "Monitor swelling by limiting sodium"],
          medicalChecks: ["Routine prenatal visit", "Rh antibody test for Rh-negative mothers", "Review third-trimester testing schedule"],
          selfCare: ["Sleep with pillows supporting back and belly", "Practice relaxation techniques", "Consider pregnancy-safe massage"],
          toDoThisWeek: ["Begin gathering baby supplies", "Finalize childcare arrangements if needed"]
        },
        27: {
          babyDevelopment: "The fetus has regular periods of sleep and wakefulness. Brain tissue continues to develop. Eyes are open when baby is awake.",
          babySize: "37 cm from head to toe (size of a head of cauliflower)",
          maternalChanges: "You're entering your third trimester! Your uterus extends about 3 inches above your navel.",
          commonSymptoms: ["More intense Braxton Hicks", "Back pain", "Leg cramps", "Increased urination", "Shortness of breath beginning"],
          nutritionTips: ["Increase calcium intake", "Include vitamin C for tissue repair", "Maintain adequate hydration"],
          medicalChecks: ["Routine prenatal visit", "Tdap vaccine may be administered", "Discuss signs of preterm labor"],
          selfCare: ["Try prenatal water exercises", "Use a belly support band during activity", "Rest with feet elevated several times daily"],
          toDoThisWeek: ["Finalize birth plan", "Install car seat base if you have it already"]
        },
      }
    },
  
    // Third Trimester (Weeks 28-40)
    trimester3: {
      overview: "The third trimester is the final stretch of pregnancy. Your baby continues to grow and develop, gaining weight rapidly in preparation for birth. You might experience more discomfort as your body accommodates your growing baby and prepares for delivery. Regular prenatal visits become more frequent, and you'll begin preparing for labor, delivery, and bringing your baby home.",
      weeks: {
        28: {
          babyDevelopment: "The fetus can open and close eyes. The central nervous system is developed enough to control some body functions. The baby can sense light and dark.",
          babySize: "38 cm from head to toe (size of an eggplant)",
          maternalChanges: "You're beginning the third trimester. The top of your uterus is about 3.5 inches above your navel.",
          commonSymptoms: ["Shortness of breath", "Frequent Braxton Hicks contractions", "Lower back pain", "Leg cramps", "Difficulty sleeping"],
          nutritionTips: ["Focus on iron-rich foods", "Increase protein intake", "Include foods rich in vitamin D and calcium"],
          medicalChecks: ["Start of more frequent prenatal visits (every 2-3 weeks)", "Third trimester blood work", "Monitor blood pressure closely"],
          selfCare: ["Sleep on left side to improve circulation", "Practice breathing exercises", "Use support pillows for sleeping"],
          toDoThisWeek: ["Pack hospital bag essentials", "Take infant CPR class"]
        },
        29: {
          babyDevelopment: "The fetus is developing more fat under the skin. Brain development continues at a rapid pace. The baby practices breathing movements.",
          babySize: "39-40 cm from head to toe (size of a butternut squash)",
          maternalChanges: "Your uterus extends about 4 inches above your navel. You may have gained 19-25 pounds.",
          commonSymptoms: ["Shortness of breath", "Hemorrhoids", "Heartburn", "Swelling in extremities", "Frequent urination"],
          nutritionTips: ["Eat small, frequent meals to manage heartburn", "Focus on fiber-rich foods for hemorrhoid relief", "Stay well-hydrated to manage swelling"],
          medicalChecks: ["Regular prenatal visit", "Monitor blood pressure", "Track fetal movement patterns"],
          selfCare: ["Elevate feet several times daily", "Use support hose for varicose veins", "Try different sleeping positions with pillow support"],
          toDoThisWeek: ["Research pediatricians if you haven't chosen one", "Prepare older children for new baby if applicable"]
        },
        30: {
          babyDevelopment: "The fetus's brain continues rapid growth. Bone marrow is now controlling red blood cell production. The baby is growing fingernails and toenails.",
          babySize: "41 cm from head to toe (size of a large cabbage)",
          maternalChanges: "Your uterus extends about 4 inches above your navel. You're likely feeling more pressure in your pelvis.",
          commonSymptoms: ["Braxton Hicks contractions", "Shortness of breath", "Back pain", "Trouble sleeping", "Leaky breasts may begin"],
          nutritionTips: ["Focus on calcium and vitamin D", "Include healthy fats for brain development", "Monitor iron levels through diet"],
          medicalChecks: ["Routine prenatal visit", "Group B strep test may be scheduled", "Monitor fetal heart rate and position"],
          selfCare: ["Practice relaxation techniques", "Use a support belt during activities", "Try warm baths for discomfort"],
          toDoThisWeek: ["Wash baby clothes and bedding", "Set up nursery if you haven't already"]
        },
        31: {
          babyDevelopment: "The fetus's immune system is developing. The central nervous system is regulating body temperature. Eyes can detect light.",
          babySize: "42 cm from head to toe (size of a coconut)",
          maternalChanges: "Your uterus is getting crowded, which may reduce fetal movement somewhat, though you should still feel regular movement.",
          commonSymptoms: ["Braxton Hicks contractions", "Shortness of breath", "Trouble sleeping", "Leaky colostrum possible", "Increased fatigue"],
          nutritionTips: ["Continue balanced nutrition", "Stay well-hydrated", "Include probiotics for digestive health"],
          medicalChecks: ["Biweekly prenatal visits begin", "Monitor blood pressure", "Check fetal position"],
          selfCare: ["Practice pelvic tilts for back relief", "Try prenatal yoga or swimming", "Use heat or cold packs for pain relief"],
          toDoThisWeek: ["Install car seat if not done", "Finalize birth plan details"]
        },
        32: {
          babyDevelopment: "The fetus's lungs are maturing. The baby is practicing breathing motions. Fingernails and toenails are fully formed.",
          babySize: "43 cm from head to toe (weighing about 1.8-2 kg)",
          maternalChanges: "Your uterus extends about 5 inches above your navel. You may notice colostrum leaking from your breasts.",
          commonSymptoms: ["Difficulty finding comfortable positions", "Shortness of breath", "Increased swelling", "More frequent urination", "Trouble sleeping"],
          nutritionTips: ["Monitor sodium intake to control swelling", "Focus on protein for baby's growth", "Include foods with natural laxative properties"],
          medicalChecks: ["Regular prenatal visit", "Monitor baby's position", "Check for signs of preeclampsia"],
          selfCare: ["Rest frequently", "Elevate feet when sitting", "Try side-lying positions for comfort"],
          toDoThisWeek: ["Prepare freezer meals for after birth", "Practice driving to hospital and identify parking"]
        },
        33: {
          babyDevelopment: "The fetus's bones are hardening except for the skull, which remains soft for birth. The baby is developing coordination between breathing, sucking, and swallowing.",
          babySize: "44 cm from head to toe (weighing about 2.1 kg)",
          maternalChanges: "You might notice your belly button protruding more prominently. Stretch marks may become more noticeable.",
          commonSymptoms: ["Braxton Hicks contractions", "Pelvic pressure", "Backaches", "Heartburn", "Increased clumsiness"],
          nutritionTips: ["Focus on high-quality protein", "Include foods rich in vitamin K", "Stay well-hydrated"],
          medicalChecks: ["Regular prenatal visit", "Monitor blood pressure", "Discuss labor signs and when to call provider"],
          selfCare: ["Practice relaxation techniques", "Try hands and knees position for back pain", "Use cool compresses for swelling"],
          toDoThisWeek: ["Finalize baby essentials shopping", "Review labor coping strategies"]
        },
        34: {
          babyDevelopment: "The fetus's lungs are nearly mature. Central nervous system is regulating body functions. The baby is developing sleeping patterns.",
          babySize: "45 cm from head to toe (weighing about 2.3 kg)",
          maternalChanges: "Your uterus extends about 5.5 inches above your navel. You may be gaining about a pound a week.",
          commonSymptoms: ["Stronger Braxton Hicks contractions", "Increased fatigue", "Difficulty sleeping", "Frequent urination", "Shortness of breath"],
          nutritionTips: ["Focus on iron-rich foods", "Include foods with omega-3 fatty acids", "Small frequent meals if experiencing fullness quickly"],
          medicalChecks: ["Regular prenatal visit", "Group B strep test if not done", "Check baby's position"],
          selfCare: ["Rest frequently", "Try pregnancy-safe stretches", "Use support pillows for sleeping"],
          toDoThisWeek: ["Pack hospital bag if not done", "Make arrangements for pet care during delivery if needed"]
        },
        35: {
          babyDevelopment: "The fetus's kidneys are fully developed. The lungs are nearly mature. The baby is gaining about an ounce of fat per day.",
          babySize: "46 cm from head to toe (weighing about 2.5 kg)",
          maternalChanges: "Your baby may be moving into position for birth, possibly head-down. You might notice a change in your belly shape.",
          commonSymptoms: ["Difficulty breathing", "Pelvis and lower back pain", "Frequent urination", "Swelling in hands and feet", "Trouble sleeping"],
          nutritionTips: ["Focus on protein and calcium", "Include easily digestible foods", "Monitor fluid intake"],
          medicalChecks: ["Weekly prenatal visits begin", "Monitor blood pressure closely", "Check baby's position"],
          selfCare: ["Rest when tired", "Practice relaxation techniques", "Try swimming for weightlessness"],
          toDoThisWeek: ["Ensure car seat is properly installed", "Review early labor signs"]
        },
        36: {
          babyDevelopment: "The fetus is considered 'early term' from this week. The baby's lungs are producing surfactant needed for breathing. Weight gain continues steadily.",
          babySize: "47 cm from head to toe (weighing about 2.7-2.8 kg)",
          maternalChanges: "Your baby may drop lower into your pelvis (called lightening or engagement), especially for first pregnancies.",
          commonSymptoms: ["Lightning crotch pain", "Easier breathing if baby has dropped", "Increased pelvic pressure", "More frequent urination", "Possible insomnia"],
          nutritionTips: ["Focus on easy-to-digest foods", "Stay well-hydrated", "Include fiber to prevent constipation"],
          medicalChecks: ["Weekly prenatal visit", "Cervical check may begin", "Review signs of labor"],
          selfCare: ["Rest frequently", "Pelvic tilts and gentle stretching", "Warm (not hot) baths for discomfort"],
          toDoThisWeek: ["Finalize names if not decided", "Make sure phone numbers for medical team are easily accessible"]
        },
        37: {
          babyDevelopment: "The fetus is considered 'full term'! The baby continues to gain weight. Brain development continues at a rapid pace.",
          babySize: "48-49 cm from head to toe (weighing about 3 kg)",
          maternalChanges: "Your uterus extends about 6 inches above your navel. You may notice increased vaginal discharge and loose stools as labor approaches.",
          commonSymptoms: ["Pelvic pressure", "Difficulty walking", "Increased discharge", "Loss of mucus plug possible", "Practice contractions"],
          nutritionTips: ["Focus on easily digestible foods", "Stay well-hydrated", "Include dates which may help with labor"],
          medicalChecks: ["Weekly prenatal visit", "Cervical check", "Review when to go to hospital or birth center"],
          selfCare: ["Rest when tired", "Practice breathing techniques", "Try hands and knees position for back pain"],
          toDoThisWeek: ["Confirm hospital admission procedures", "Prepare support team for labor"]
        },
        38: {
          babyDevelopment: "The fetus's organs are fully developed. The baby continues to add fat layers. The brain continues developing rapidly.",
          babySize: "49-50 cm from head to toe (weighing about 3.1 kg)",
          maternalChanges: "You may notice stronger and more frequent Braxton Hicks contractions. Some women experience a burst of energy (nesting instinct).",
          commonSymptoms: ["Strong Braxton Hicks contractions", "Difficulty sleeping", "Pelvic pressure", "Increased backache", "Possible nesting instinct"],
          nutritionTips: ["Focus on energy-sustaining foods", "Stay well-hydrated", "Include easily digestible foods"],
          medicalChecks: ["Weekly prenatal visit", "Cervical check", "Discuss induction options if approaching 41 weeks"],
          selfCare: ["Balance rest with activity", "Gentle walking", "Practice relaxation techniques for labor"],
          toDoThisWeek: ["Double-check hospital bag", "Make sure car has gas and car seat is installed"]
        },
        39: {
          babyDevelopment: "The fetus continues to build fat stores. Lungs continue to produce surfactant. The baby is preparing for life outside the womb.",
          babySize: "50 cm from head to toe (weighing about 3.3 kg)",
          maternalChanges: "You may notice your baby has dropped lower in your pelvis. Your belly may appear lower.",
          commonSymptoms: ["Strong Braxton Hicks contractions", "Lightning crotch pain", "Loss of mucus plug", "Loose stools", "Increased pelvic pressure"],
          nutritionTips: ["Focus on easy-to-digest meals", "Stay well-hydrated", "Include foods with natural laxative effects"],
          medicalChecks: ["Weekly prenatal visit", "Cervical check", "Discuss post-due date options"],
          selfCare: ["Rest when tired but stay moderately active", "Warm baths for relaxation", "Perineal massage to prepare for delivery"],
          toDoThisWeek: ["Review early labor coping strategies", "Make sure phone is charged at all times"]
        },
        40: {
          babyDevelopment: "The fetus is fully developed! The lungs are mature. The baby is ready to meet you.",
          babySize: "50-53 cm from head to toe (weighing about 3.4 kg)",
          maternalChanges: "You've reached your due date! Only about 5% of babies are born exactly on their due date, so don't worry if you're still pregnant.",
          commonSymptoms: ["Increased contractions", "Pelvic pressure", "Possible bloody show", "Rupture of membranes possible", "Extreme fatigue or energy bursts"],
          nutritionTips: ["Focus on easily digestible foods", "Stay well-hydrated", "Small, frequent meals"],
          medicalChecks: ["Weekly prenatal visit", "Non-stress test may be performed", "Discuss induction options if approaching 41-42 weeks"],
          selfCare: ["Rest when needed", "Stay moderately active", "Practice relaxation techniques"],
          toDoThisWeek: ["Be ready for labor at any time", "Try natural labor induction methods if approved by your provider"]
        },
        41: {
          babyDevelopment: "The fetus is fully developed and may continue to gain weight. The baby is waiting for labor to begin.",
          babySize: "51-53 cm from head to toe (weighing about 3.5-4 kg)",
          maternalChanges: "You're past your due date, which is common for first pregnancies. Your healthcare provider will monitor you closely.",
          commonSymptoms: ["Increasing discomfort", "Trouble sleeping", "Strong Braxton Hicks contractions", "Possible frustration or anxiety"],
          nutritionTips: ["Focus on energy-sustaining foods", "Try natural labor induction foods if approved by provider", "Stay well-hydrated"],
          medicalChecks: ["Biweekly or more frequent visits", "Non-stress tests", "Ultrasound to check amniotic fluid", "Discuss induction"],
          selfCare: ["Gentle walking", "Relaxation techniques", "Rest when tired", "Try approved natural induction methods"],
          toDoThisWeek: ["Discuss medical induction options with provider", "Practice patience and self-care"]
        },
        42: {
          babyDevelopment: "The fetus is fully developed. Most healthcare providers will recommend delivery by 42 weeks due to increased risks.",
          babySize: "51-53 cm from head to toe (weighing about 3.6-4.1 kg)",
          maternalChanges: "Medical induction is usually recommended by this point if labor hasn't started naturally.",
          commonSymptoms: ["Significant discomfort", "Trouble sleeping", "Strong Braxton Hicks contractions", "Possible anxiety about induction"],
          nutritionTips: ["Focus on staying hydrated", "Eat light, easily digestible meals", "Prepare for potential induction"],
          medicalChecks: ["Induction planning", "Non-stress tests", "Amniotic fluid check", "Close monitoring of baby and mother"],
          selfCare: ["Rest when possible", "Stay calm and positive", "Final preparation for meeting your baby"],
          toDoThisWeek: ["Follow medical advice regarding induction", "Pack any last-minute hospital items"]
        }
      }
    },
  
    getWeekData: function(week) {
      if (week >= 1 && week <= 13) {
        return this.trimester1.weeks[week];
      } else if (week >= 14 && week <= 27) {
        return this.trimester2.weeks[week];
      } else if (week >= 28 && week <= 42) {
        return this.trimester3.weeks[week];
      } else {
        return null;
      }
    },
  
    getTrimesterInfo: function(trimester) {
      if (trimester === 1) {
        return this.trimester1.overview;
      } else if (trimester === 2) {
        return this.trimester2.overview;
      } else if (trimester === 3) {
        return this.trimester3.overview;
      } else {
        return null;
      }
    },
  
    // Calculate due date based on last menstrual period (LMP)
    calculateDueDate: function(lmpDate) {
      const lmp = new Date(lmpDate);
      const dueDate = new Date(lmp);
      dueDate.setDate(lmp.getDate() + 280); // 280 days = 40 weeks
      return dueDate;
    },
  
    // Calculate current pregnancy week based on LMP
    calculateCurrentWeek: function(lmpDate) {
      const lmp = new Date(lmpDate);
      const today = new Date();
      const daysDifference = Math.floor((today - lmp) / (1000 * 60 * 60 * 24));
      const weeksDifference = Math.floor(daysDifference / 7);
      return weeksDifference + 1; // Adding 1 because pregnancy weeks start at week 1, not 0
    }
  };
  
  module.exports = pregnancyData;