import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import heroImg from "./assets/hero.png";
import chatBotIcon from "./assets/ChatBotIcon.png";
import Event1 from "./assets/Event1.png"
import FAQ1 from "./assets/FAQ1.jpg"
import Test1 from "./assets/Test1.jpg"
import Prostate1 from "./assets/Prostate1.jpg"
import "./App.css";

import Header from "./components/Header.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import LinkCard from "./components/LinkCard.tsx";
import ChatBot from "./components/ChatBot.jsx";
import FactBar from "./components/FactBar.tsx";
import Event from "./components/Event.jsx";
import PageFooter from "./components/PageFooter.tsx";
import FAQPage from "./components/FAQPage.tsx";
import TreatmentsPage from "./components/TreatmentsPage.tsx";
import InfoPage from "./components/InfoPage.tsx";
import DonatePage from "./components/DonatePage.tsx";
import ProstateQuizPage from "./components/ProstateQuizPage.tsx";
import UsefulLinksPage from "./components/UsefulLinksPage.tsx";

function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Header image={heroImg} />
      <div className="text-block">
        <h1>Prostate Cancer</h1>
        <br></br>
        <p>What is it?</p>
        <br></br>
        <p>
          Prostate cancer is cancer that starts in the prostate, the small gland
          that sits below the bladder and is part of the male reproductive
          system. Like the rest of your body, the prostate is made of tiny
          'building blocks' called cells. Prostate cancer is the abnormal growth
          of these cells into a lump or tumor.
        </p>
      </div>

      <div className="mx-auto mb-30 flex w-full max-w-[1280px] flex-col items-center justify-center gap-10 px-4 [@media(min-width:900px)]:flex-row">
        <LinkCard image={Prostate1} title="What is Prostate Cancer?" link="/prostate-cancer" />
        <LinkCard image={Test1} title="Getting Tested" link="/getting-tested" />
        <LinkCard image={FAQ1} title="FAQs" link="/faq" />
      </div>

      <FactBar />
      <div className="mt-20">
        <h1 className="text-center m-4">Current Events</h1>

        <Event
          image={Event1}
          imageAlt="Man standing with arms crossed"
          title="Webinar: Prostate Cancer 101 - For The Newly Diagnosed"
          date="Dec 8 2026"
          time="19:00 - 20:30"
          admission="0.0"
          description={
            <>
              <p>Recently diagnosed with prostate cancer, or know someone who has?</p>
              <p>Understanding the diagnosis, treatment options and what lies ahead can feel overwhelming, particularly in the early days.</p>
              <p>This free webinar has been developed to help men recently diagnosed with prostate cancer, along with those around them, better understand their diagnosis and the choices available to them.</p>
              <p>Join experienced urological surgeon Dr Jim Duthie and oncology nurse specialist Stephanie Sanden as they discuss all this and more.</p>
              <p>This is a free event, online via ZOOM, so join us from the comfort of home.</p>

            </>
          }
          buttonLink="https://events.humanitix.com/webinar-prostate-cancer-101-for-the-newly-diagnosed?c=pcfnzwebsiteevent"
        />
      </div>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        <div
          className={`h-[min(720px,calc(100vh-6rem))] w-[min(432px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ${
            chatOpen ? "" : "hidden"
          }`}
        >
            <div className="flex items-center justify-between border-b border-slate-200 bg-[var(--colour-primary)] px-4 py-3 text-white">
              <span className="text-base font-semibold">AI Assistant</span>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="text-xl font-bold transition-opacity hover:opacity-80"
              >
                ×
              </button>
            </div>
            <div className="h-[calc(100%-57px)]">
              <ChatBot />
            </div>
          </div>

        <button
          type="button"
          onClick={() => setChatOpen((open) => !open)}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-transparent shadow-none transition-transform hover:scale-105"
        >
          <img
            src={chatBotIcon}
            alt="AI assistant"
            className="h-15 w-15 object-contain"
          />
        </button>
      </div>
      <PageFooter image={heroImg} />
    </>
  );
}

function App() {
  const pageProps = { headerImage: heroImg, footerImage: heroImg };

  return (
    <Routes>
      <Route path="/" 
      element={<HomePage />} />

      <Route path="/faq" 
      element={<FAQPage headerImage={heroImg} footerImage={heroImg} />} />

      <Route path="/treatments" 
      element={<TreatmentsPage headerImage={heroImg} footerImage={heroImg} />} />


      <Route path="/prostate-cancer"  element={<InfoPage {...pageProps}
      title="What is Prostate Cancer?" 
      introduction="The human body is made up of billions of tiny building blocks called cells. Sometimes, cells reproduce in an uncontrolled way and grow into a lump, or tumour. There are two kinds of tumours: noncancerous (benign) and cancerous (malignant). Benign tumours do not spread to other parts of the body and are not life threatening (except in very rare situations). Prostate cancer occurs when abnormal cells develop in the prostate. These cells have the potential to continue to multiply, and possibly spread beyond the prostate. Doctors do not know what causes prostate cancer. What they do know however, is that the growth of cancer cells in the prostate is stimulated by male hormones, especially testosterone. Most prostate cancer growth is influenced by testosterone but the speed at which prostate cancer grows varies from man to man. In some men the cancer grows very slowly (called indolent), in others growth is more rapid (aggressive)." 
      sections={[{ 
        heading: "Prostate cancer in New Zealand",
        content: "It is our most commonly diagnosed cancer (apart from skin cancers) in New Zealand. Every year more than 4000* are diagnosed with the disease and over 700* die - the second highest cause of cancer death in men behind lung cancer. For all sexes it sits third behind lung and bowel cancers. Māori men have a slightly lower incidence of prostate cancer but have a higher death rate than other New Zealand men. The reasons for this may be a later diagnosis or treatment choices offered to them. Overall, the number of men diagnosed in New Zealand is increasing, largely due to increased rates of testing and the death rate is slowly dropping, largely due to better outcomes from early diagnosis and improved treatments available. Men are more likely to develop prostate cancer as they get older. It is also more common in men who have a father or brother with prostate cancer, and in families who carry certain genes such as the BRCA1 or BRCA2 genes."
      },
      {
        heading: "Types of prostate cancer",
        content: (
        <>
          <p>Prostate cancer is described according to where it is located in the body. Most grow very slowly and about 95% of men survive at least 5 years after diagnosis, particularly if diagnosed with localised prostate cancer, and about 90% will survive 10 years beyond diagnosis.</p>
          <p><strong>Localised</strong> - prostate cancer that is confined to the prostate gland.</p>
          <p><strong>Locally advanced</strong> - prostate cancer that extends into the surrounding tissues near the prostate or into the pelvic lymph nodes.</p>
          <p><strong>Advanced or metastatic</strong> - prostate cancer that has spread to other parts of the body including other organs, lymph nodes (outside the pelvis) and bones.</p>
          <p><strong>Benign prostate conditions</strong> - Prostate problems are often not the result of prostate cancer. Two common benign conditions with similar symptoms are:</p>
          <p><strong>Benign Prostate Hyperplasia (BPH) - enlarged prostate</strong></p>
          <p>The enlarged prostate puts pressure on the urethra and causes problems urinating. Medicines or surgery are used to treat BPH but only when symptoms become troublesome. Remember, BPH is not prostate cancer even though most of the symptoms are the same when passing urine.</p>
          <p><strong>Prostatitis</strong></p>
          <p>Is an infection of the prostate which can cause pain, fever, swelling of the prostate and, blood and pus in the urine. It may have symptoms similar to BPH but is usually treated with antibiotics. Infection of the bladder usually occurs at the same time. See your doctor if blood appears in the urine (Haematuria).</p>
          <img src="https://prostate.org.nz/storage/uploads/689ef18b-afa9-42be-9593-8a2de3f22de7/untitled-design-5.png?fm=jpg&q=80&fit=max&crop=270%2C151%2C0%2C75"></img>
          
        </> ),} ]} />} />
      
      <Route path="/about-the-prostate" element={<InfoPage {...pageProps} 
      title="About the Prostate" 
      introduction="The prostate is a small gland in the male reproductive system. It sits below the bladder and surrounds the urethra."
      sections={[{ 
        heading: "Know your prostate - the anatomy",
        content: (
        <>
        <p>The prostate is a male sex gland located just below the bladder and in front of the rectum. Along with the testicles and seminal vesicles, are part of the male reproductive system as shown in the diagram below. It surrounds the urethra, the tube that carries urine and semen out of the body through the penis.</p>
        <p>The prostate produces some of the fluid that makes up semen, which enriches and protects sperm when men ejaculate. The male hormone testosterone, which is made by the testicles, enables the prostate gland to grow and develop during puberty. In an adult, the prostate gland is usually about the size of a walnut and it is normal for it to grow larger as men age. Sometimes this can cause problems, such as difficulty with passing urine, and may develop into a benign condition called Benign Prostatic Hyperplasia (BPH). Tumours can also develop in the prostate, these are known as prostate cancer.</p>
        <img src="https://prostate.org.nz/storage/uploads/5bdecc24-68b5-43cb-8e20-045f41af2d60/know-your-prostate-image.jpg?fm=jpg&q=80&fit=max&crop=%2C%2C%2C"></img>
        
        </>)} ]} />} />

      <Route path="/getting-tested" element={<InfoPage {...pageProps}
      title="Getting Tested"
      introduction={
        <>
        <p>Men should be proactive in taking responsibility for their health & wellbeing, and getting tested regularly. More options are available if prostate cancer is detected before it causes symptoms (not common in the early stages). Not all doctors are proactive in promoting prostate cancer testing so men should be willing to take the initiative and request testing if they have any concerns, and wish to be tested.</p>
        <p><strong>If you're over 50 then consider an annual prostate check that includes both a PSA blood test and a digital rectal examination (DRE). This should start from 45 years if there is known family history of prostate cancer, or from age 40 if there is a genetic predisposition to prostate cancer (BRCA2 gene variation, family history of breast, ovarian, prostate cancer or Lynch Syndrome).</strong> (Ref: Optimal cancer care pathway for people with prostate cancer. Te Aho o Te Kahu - Cancer Control Agency. 2024.)</p>
        <p>Men over 50 (and those over 40 with known family history) should be tested at least every one to two years using both the PSA and DRE tests, under a programme of testing appropriate to them. The initial test will find a baseline level and subsequent tests can be recorded to note any significant change that may warrant further investigation. Regular testing should continue until mid-70s or later, depending on the risk profile that has been recorded.</p>
        <p><strong>Beware of misinformation. </strong>There is an old adage that ‘men will more likely die with prostate cancer than from prostate cancer’. While it is true that many cancers, particularly in older men, are slow growing and don’t need treatment or other intervention, prostate cancer remains a significant killer.</p>
        <p>There is no easy way of diagnosing prostate cancer. Doctors will usually do a series of tests that may include the following:</p>
        </>
      }
      sections={[{
        heading: "PSA - Prostate Specific Antigen",
        content: (
        <>
          <p>The PSA is a simple blood test that looks for raised levels of a protein in the blood called prostate specific antigen (PSA), which is made by prostate cells. A PSA level that is above the limits for your age indicated that there could be a problem with the prostate and further tests might be necessary. This test is used as an initial screening test, usually ordered by a GP, and can be done in conjunction with other routine blood tests. The PSA test is only an indicator of the possibility of prostate cancer and a higher level doesn’t necessarily mean there is prostate cancer.</p>
          <p>A high PSA can be caused by other conditions such as <strong>Benign Prostatic Hyperplasia (BPH)</strong> or enlarged prostate (a common condition that occurs when the prostate grows larger with age); or <strong>Prostatitis</strong> which is an infection or inflammation of the prostate, where the prostate becomes inflamed and sore.</p>
          <p>Other things that can influence the PSA level include:</p>
          <ul>
            <li>Age - the older men are, the higher the PSA level is likely to be</li>
            <li>Size of the prostate - levels will be higher with an enlarged prostate</li>
            <li>Ethnicity</li>
            <li>Medications being taken</li>
            <li>A urinary infection</li>
            <li>Certain types of exercise such as cycling or vigorous exercise</li>
            <li>How recently a man has had sex or ejaculated</li>
            <li>Anal sex or prostate stimulation</li>
          </ul>
          <p><strong>Home PSA testing kits</strong></p>
          <p>At the Prostate Cancer Foundation of NZ, we are aware that a number of home PSA testing kits and laboratory services are now available for purchase at pharmacies or directly to the public. Many people value privacy and convenience in health decisions, so it’s understandable that these options are appealing. However, we strongly advise speaking with a healthcare professional before considering PSA testing.</p>
        </>)
        },
        {
          heading: "Digital Rectal Examination (DRE)",
          content: (
          <>
            <p>The DRE is a test where the doctor inserts a gloved, lubricated finger into the rectum to feel the prostate and check the size, shape and for any abnormalities. Occasionally a cancer can be felt this way, but not always. A normal DRE exam does not rule out prostate cancer.</p>
            <p>If there are possible indications of prostate cancer from the initial PSA and DRE tests carried out by the GP, a referral will be made to a urologist (medical specialist in prostate cancer and other urinary conditions) who will conduct further tests to actually diagnose the disease.</p>
          </>), }]} />} />

      <Route path="/support-groups" element={<InfoPage {...pageProps}
      title="Support Groups"
      introduction={
      <>
      <img src="https://prostate.org.nz/storage/uploads/4aab1501-8bb4-4172-b3d0-1cb3565b4be8/what-we-do-support.jpg?fm=jpg&q=80&fit=max&crop=255%2C315%2C305%2C0"></img>
      <p>Our local support leads are here to connect you with trusted, compassionate support within your community. Whether you're newly diagnosed, undergoing treatment, living beyond prostate cancer, or supporting a loved one, you're not alone.</p>
      <p>Each PCFNZ representative brings lived experience and a deep understanding of the journey. From regular group meetings to informal connections and one-on-one conversations, they're here to support you and your whānau in a way that works best for you. Find your local contact below and reach out when you're ready.</p>
      <p>If you have questions about medical treatment, please contact your usual healthcare provider, as they are best placed to give you clinical advice.</p>
      </>} />} />

      <Route path="/prost-fit" element={<InfoPage {...pageProps}
      title="Prost-Fit"
      introduction={
      <>
      <img src="https://prostate.org.nz/storage/uploads/6b1a996e-31b5-4b2f-821f-f9237beebe40/pcfnz-page-header-1055x400.jpg?fm=jpg&q=80&fit=max&crop=325%2C400%2C725%2C0"></img>
      <p>Research shows that tailored exercise benefits most people with cancer - before, during and after treatment. Staying active can help manage side effects, speed recovery and improve quality of life. In some cases, regular exercise may reduce the risk of cancer returning by up 60%.</p>
      </>}
      sections={[{
        heading: "What is Prost-FIT?",
        content: (
        <>
        <p>PCFNZ's Prost-FIT programme is designed specifically for men living with prostate cancer, at any stage of diagnosis or treatment. Involving both physical and cognitive elements delivered in a supporting environment, with an emphasis on fun and social interaction. Prost-FIT also offers camaraderie and opportunities for shared experiences. </p>
        <p>Delivered by trained, registered exercise professionals, Prost-FIT class numbers are capped to ensure participants receive safe, personalised support.</p>
        </>)
        },
        {
          heading: "How much does it cost?",
          content: "Prost-FIT is free to attend (T&Cs apply) once a week for 40 weeks per calendar year. To be access these funded classes, each man must register when joining the programme. If the trainer runs classes additional to the funded 40, participants will be charged privately by the trainer for those additional sessions*.",
        },
        {
          heading: "For more information:",
          content: (
          <>
          <p>To find out more email <a href="mailto:prost-fit@prostate.org.nz">prost-fit@prostate.org.nz</a>, call 0800 66 0800. Search the directory below to find a class near you.</p>
          </>)
        } ]} />} />

      <Route path="/rainbow-blue" element={<InfoPage {...pageProps}
      title="Rainbow Blue"
      introduction={
      <>
      <img src="https://prostate.org.nz/storage/uploads/acd54ae4-f790-4f31-8a99-72025f9cf571/untitled-design-14.jpg?fm=jpg&q=80&fit=max&crop=325%2C400%2C37%2C0"></img>
      <p>Rainbow Blue provides peer support to the LGBTQIA+ community, a supportive environment in which to feel comfortable and secure in discussing any concerns, and raises awareness on various aspects of men's health, including prostate cancer.</p>
      </>}
      sections={[{
        heading: "Prostate cancer in gay, transgender or bisexual men",
        content: (
        <>
        <p>Prostate cancer isn't any more common in gay, transgender or bisexual men, however the nature of relationships and emotional support mechanisms in their community is often different to that in the heterosexual community. It is important that these men who are diagnosed with prostate cancer, or are caring for someone who has, have the opportunity to meet in their own supportive environment, where they are able to feel comfortable and secure in discussing their concerns. Transgender people who were assigned male at birth, and male-assigned non-binary people can get prostate cancer or prostate disease. This includes trans-women who identify and live as women. Whether or now they have genital reconstructive surgery they will have prostate.</p>
        <img src="https://prostate.org.nz/storage/uploads/3fa0f575-7502-4d86-829b-d957cfa78c66/untitled-design-15.jpg?fm=jpg&q=80&fit=max&crop=718%2C404%2C0%2C15"></img>
        </>)
        },
        {
          heading: "Contact",
          content: (
          <>
          <p>If you would like some support or information appropriate for your needs then please contact us. P: 0800 66 0800 Monday - Friday E: <a href="mailto:rainbowblue@prostate.org.nz">rainbowblue@prostate.org.nz</a></p>
          </>)
        }
        ]} />} />

      <Route path="/support-services" element={<InfoPage {...pageProps}
      title="PCFNZ Support Services"
      introduction={
      <>
        <img src="https://prostate.org.nz/storage/uploads/5853335c-5031-48c3-a923-e438a0714c56/new-site-page-banner-1055x400-3.png?fm=jpg&q=80&fit=max&crop=325%2C399%2C700%2C0"></img>
        <p>The Prostate Cancer Foundation has partnered with Southern Cross Wellness Partners to provide a 24/7 service to assist men, and those affected by a prostate cancer diagnosis, with comprehensive support in times of emotional distress. To be connected with counselling support tailored to your needs:</p>
        <p><strong>Call 0800 735 343, or email <a href="mailto:referrals@raisementalhealth.co.nz">referrals@raisementalhealth.co.nz</a></strong></p>
        <p>The Prostate Cancer Foundation Counselling Service provides four sessions of counselling support per presenting issue, delivered in person, on the phone or via video service such as Zoom, Microsoft Teams or Skype. The range of support available covers:</p>
        <ul>
          <li>Trauma</li>
          <li>Grief and loss</li>
          <li>Relationship support</li>
          <li>Wellbeing support</li>
          <li>Anxiety and mood</li>
        </ul>
        <p>All practitioners providing counselling through the Prostate Cancer Foundation Counselling Service are registered professionals with a minimum of five years of practice experience. They are located throughout the country and will provide you with support wherever you live, from someone local to you.</p>
      </>} 
      sections={[{
        heading: "Make an Appointment",
        content: (
          <>
          <p>If you are experiencing emotional distress and feel you might be in need of counselling support email <a href="mailto:referrals@raisementalhealth.co.nz">referrals@raisementalhealth.co.nz</a> , call <strong>0800 735 343</strong> or complete the contact form on their website and they will call you to make an appointment. <em>Please note, the form is multi-purpose and may contain questions such as workplace, which may not be relevant for you. If so, just write N/A or similar if the field is marked compulsory.</em></p>
          </>
        )
      }]} />} />

      <Route path="/about" element={<InfoPage {...pageProps} 
      title="About Us"
      introduction={
        <>
          <p>Prostate Cancer Foundation of New Zealand - Te Kāhui Mate Pukupuku Repe Tātea o Aotearoa Manatōpu (PCFNZ), operates two customer facing brands: Prostate Cancer Foundation NZ and Testicular Cancer NZ - Mate Pukupuku Raho Aotearoa (TCNZ), reflecting a whole-of-life approach to men's health. </p>
          <p>Not only providing vital support, education and information to patients, their families and whānau, we strive through both brands to reduce the impact prostate and testicular cancer by raising awareness, funding NZ-based research and advocating for improved standards of care. </p>
          <img src="https://prostate.org.nz/storage/uploads/05063d96-ff8a-494a-b164-4775a4944b99/living-well-page-fatigue.jpg?fm=jpg&q=80&fit=max&crop=253%2C314%2C117%2C0"></img>
          <p>PCFNZ pursues a world where those affected by either cancer can navigate their health with knowledge, confidence and dignity. PCFNZ is there for them when they need it the most, with a nurse-led information service; round-the-clock counselling; LGBTQIA+ Rainbow Blue peer support and national network offering holistic support and fellowship.</p>
          <p>Read our current Annual Report below.</p>
          <a href="https://prostate.org.nz/resources/pcfnz-annual-report-fy2025">PCFNZ Annual Report 2025FY</a>
        </>
      }
      />} />

      <Route path="/donate" element={<DonatePage {...pageProps} />} />
      <Route
        path="/prostate-quiz"
        element={<ProstateQuizPage {...pageProps} />}
      />
      <Route
        path="/useful-links"
        element={<UsefulLinksPage {...pageProps} />}
      />
    </Routes>
  );
}

export default App;
