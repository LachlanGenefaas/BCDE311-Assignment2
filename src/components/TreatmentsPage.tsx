import Header from "./Header.tsx";
import PageFooter from "./PageFooter.tsx";


interface TreatmentsPageProps {
  headerImage: string;
  footerImage: string;
}

export default function TreatmentsPage({ headerImage, footerImage }: TreatmentsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header image={headerImage} />
      <main className="page-heading">
        <h1>Treatments</h1>
        <p>Prostate cancer can be treated with:</p>
<ul className="list"><li>active surveillance - keeping an eye on things</li>
<li>surgery</li>
<li>radiation treatment</li>
<li>hormone therapy</li>
<li>chemotherapy</li>
<li>immunotherapy</li></ul>
<p>
Your treatment team will talk to you about what options are best for you.
Some treatments for prostate cancer can make you impotent and infertile.
Before any treatment begins, make sure that you have discussed and understood your treatment team's advice. You may ask for a second opinion if you want one.</p>
<br></br><br></br>

        <nav className="table-of-contents" aria-label="Table of contents">
          <h1>On This Page</h1>
          <ul>
            <li><a href="#active-surveillance">Active Surveillance</a></li>
            <li><a href="#surgery-for-prostate-cancer">Surgery for prostate cancer</a></li>
            <li><a href="#radiation-treatment-for-prostate-cancer">Radiation treatment for prostate cancer</a></li>
          </ul>
        </nav>

        <h1 id="active-surveillance">Active Surveillance</h1>
        <p>If your test results show the cancer has a very low risk of spreading, you may be offered active surveillance. This means the cancer is not immediately treated but is watched closely.
The treatment team will keep an eye on the cancer with:
regular blood tests to check PSA level - every three to six months
biopsies
MRI scans
If things change and the cancer becomes more of a risk, your treatment team will offer you more treatment options.</p>
        <h1 id="surgery-for-prostate-cancer">Surgery for prostate cancer</h1>
        <p>If the cancer has not spread in your body, the whole prostate gland can be surgically removed. This is called a radical prostatectomy.
During the surgery, your surgeon will try to save the two bundles of nerves attached to the prostate that help you get erections. This is only possible if the cancer is not in or close to these nerves.
Sometimes lymph nodes are also removed during the surgery if the cancer has a higher risk of spreading.</p>
        <h1 id="radiation-treatment-for-prostate-cancer">Radiation treatment for prostate cancer</h1>
        <p>Radiation treatment is the use of radiation beams to destroy cancer cells or slow their growth.
Radiation treatment is usually recommended for prostate cancer:
if you are not well enough for surgery
if you have had surgery for prostate cancer but there are signs that not all the cancer has been removed
to relieve pain caused by cancer that has spread to the bones
to shrink blocks in your lymphatic or urinary system
when radiation treatment is your preferred treatment option

There are three types of radiation treatment for prostate cancer:
External beam radiotherapyThe most common radiation treatment for prostate cancer. The radiation beams are given from outside the body onto the area affected by cancer.
Low-dose-rate brachytherapy (permanent implant)
Low-dose-rate brachytherapy is an internal radiation treatment where radioactive seeds are permanently placed inside the prostate gland.
It is used when the cancer is low-risk and found only inside the prostate. It is only available in a few private centres in New Zealand.
After your radiation treatment, you will be radioactive and need to take special care at home. Your treatment team will explain what to do.
High-dose-rate brachytherapy (temporary implant)
High-dose-rate brachytherapy is an internal radiation treatment where radioactive sources are temporarily placed into the prostate with needles.
It is usually used in combination with external beam radiotherapy to treat higher-risk prostate cancer. It may also be used alone to treat low-risk prostate cancer.</p>




      </main>
      <PageFooter image={footerImage} />
    </div>
  );
}
