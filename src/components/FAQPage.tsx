import Header from "./Header.tsx";
import PageFooter from "./PageFooter.tsx";
import FAQDropdown from "./FAQDropdown.tsx";

interface FAQPageProps {
  headerImage: string;
  footerImage: string;
}

export default function FAQPage({ headerImage, footerImage }: FAQPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header image={headerImage} />
      <main className="page-heading">
        <h1>FAQs</h1>
        <div className="faq-list">
          <FAQDropdown
            headerText="Can anyone get prostate cancer?"
            contentText="Anyone with a prostate can get prostate cancer, including transgender women, male-assigned non-binary or intersex people."
          />
          <FAQDropdown
            headerText="What symptoms should I look out for and should I wait for symptoms before getting tested?"
            contentText="Prostate cancer often doesn't cause symptoms, especially in the early stages, and can remain undetected for some time. If there are symptoms such as discomfort when urinating, feeling the frequent or sudden need to urinate or pain in the lower back or hips, or blood in urine or semen, they may be caused by other prostate conditions (not prostate cancer) or other medical conditions. Read more about symptoms here (hyperlink to prostate cancer page) and always see your doctor if you experience any of them."
          />
          <FAQDropdown
            headerText="Am I more likely to get prostate cancer if my father had it?"
            contentText="Your risk of prostate cancer increases if a 1st-degree relative (father or brother) has had prostate cancer, and if there is a genetic predisposition to prostate cancer (BRCA2 gene variation, family history of breast, ovarian or prostate cancer, or Lynch Syndrome)."
          />
          <FAQDropdown
            headerText="Is there anything I can do to prevent getting prostate cancer?"
            contentText="There is no evidence that factors such as diet and exercise can prevent prostate cancer from developing, however evidence suggests that environmental and lifestyle factors may increase the risk. Maintaining a healthy weight and eating a healthy balanced diet can improve one's wellbeing - what's good for the heart is good for the prostate. There is evidence to show that physical activity and regular exercise can be protective factors for cancer. If you are being treated for cancer, being active, including tailored exercise, can help you manage some of the treatment side-effects, speed up recovery and improve quality of life."
          />
          <FAQDropdown
            headerText="I hear that Māori men are more likely to die from prostate cancer, is that right?"
            contentText="Māori men have a slightly lower incidence of prostate cancer but a higher death rate than other men. The reasons for this may be a later diagnosis or the treatment choices offered to them."
          />
          <FAQDropdown
            headerText="When should I start getting a prostate check?"
            contentText="We recommend that, if you're over 50, consider an annual prostate check that includes both a PSA blood test and a digital rectal examination (DRE). This should start from 45 if there is known family history of prostate cancer, or from age 40 if there is a genetic predisposition to prostate cancer (BRCA2 gene variation, family history of breast, ovarian or prostate cancer, or Lynch Syndrome). A PSA blood test is all it takes to start the process but the check should also include a DRE (Digital Rectal Examination). The PSA test measures the levels Prostate-Specific Antigen in a man's blood that 'can' indicate the presence of early prostate cancers in men who have no symptoms."
          />
          <FAQDropdown
            headerText="My doctor won't give me a PSA test, what should I do?"
            contentText="Not all GPs are proactive in promoting prostate cancer testing so men should be willing to take the initiative and request testing if they wish to be tested. If you are over 50 (or younger with family history of the disease) you should be able to have the PSA test, however if there is still resistance to the PSA test then we suggest you see another GP."
          />
        </div>
      </main>
      <PageFooter image={footerImage} />
    </div>
  );
}
