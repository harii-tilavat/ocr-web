import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  public selectedList: any;
  public privacyList = [
    {
      id: 1,
      title: 'Privacy Policy',
      desc: 'At Nugget, your privacy is important to us. This Privacy Policy describes the personal data that UXR Labs Inc, and group companies (collectively referred to as "the Company," “we," "our," and "us") processes. This Privacy Policy also explains how we process personal data and for what purposes.',
      enum: 'policy',
      class: 'tnc inline',
      array: [
        {
          title: 'How we collect and use your data',
          desc: 'How we collect Personal Data depends on how and why you use our Sites, our Platform, and/or our Services. We collect Personal Data directly when you submit it to us, as a Visitor, Contributor, or Customer, as well as indirectly, such as through the use of automated technologies or from third parties. To help keep our databases current and to provide you with the most relevant content and experiences, we may combine information provided by you with information from third-party sources, in accordance with applicable laws. For example, the size, industry, and other information about the company you work for (where you have provided company name) may be obtained from sources including professional networking sites and information service providers. We provide more information about how we collect Personal Data below. Nugget uses your Personal Data for certain legitimate business purposes, including the following:to provide you access to and use of the Platform and Services, including registering as a Customer or a Contributor to deliver the Platform and Services to our Customers deliver Recordings containing Contributor Personal Data to our Customers, to improve and enhance your experience with the Platform and Services, including the content and general administration of the Platform and Services to retain records as may be required for tax, legal, and financial purposes, to understand how you access, use and interact with the Services in order to provide technical functionality, develop new products and services, and analyze your use of the Services, to communicate with you, to provide you with customer support in connection with your use of the Services, to detect fraud, illegal activities, or security breaches, to receive and make payments, and to provide information to regulatory bodies when legally required.In the sections below, we are more specific about the purposes for which we use each category of data.',
        },
        {
          title: null,
          desc: null,
          keyPoints: [
            {
              key: 'Study',
              point: '"Study" also referred to as "Tests" is done to take feedback on digital products i.e. Website, mobile apps, prototypes, where participants are involved to share their opinion and feedback on a product',
            },
            {
              key: 'Researchers',
              point: 'We collect information from you when you use the applicable self-service digital Nugget customer experience measurement solution(s) (the “Platform”), including to create studies, contact us by email or other means (i.e. any other ticketing function) or otherwise interact with us on other properties that we operate.',
            },
            {
              key: 'Study Participants',
              point: 'We collect information from you when you visit or participate in studies operated by us on the applicable digital Nugget and customer experience measurement solution(s) (the “Platform”). We may also collect information about you from our customers who create studies or upload your data to such Platform(s) (“Study Creators”), including when you participate in studies operated by that Study Creator on the Platform.',
            },
            {
              key: 'Information from Third Parties',
              point: 'Nugget collects Personal Data and other data from third parties that provide us with lists of potential Customers and their contact information, if such potential Customers give permission to those third parties to share their information with us. Nugget uses this information for its own marketing purposes. We collect data when you communicate with us. If you communicate with us directly, we will collect any Personal Data contained in such How we store your data',
            },
          ]
        },
        {
          title: 'Data Sharing Policy',
          desc: 'Your personal information may be shared with our processors. We will have in place an agreement with each of these processors which will restrict how they are able to process your personal information and require them to keep it secure. We will never sell your personal data.We may also share your personal information: (a) as required by law or legal process; (b) in response to lawful requests by public authorities, including to meet national security or law enforcement requirements or other requests; (c) to investigate suspected violations of any terms or policies applicable to our products or the services provided by us or our third party providers or affiliates; (d) where we reasonably conclude that it is necessary for defending, exercising or establishing our legal rights; (e) to investigate alleged or actual fraud, misrepresentation or other misconduct; (f) in connection with a prospective sale, merger, change of control, bankruptcy or similar transaction; and (g) to other third parties with your express consent.'
        },
        {
          title: 'Storage',
          desc: 'We may only retain your personal information for the purposes set out in this policy and for as long as we have a legal or business requirement to do so. By law, different retention periods apply to different types of records and data, however the longest we will normally hold any personal data is 7 years from the date of your last interaction with us.‍'
        },
        {
          keyPoints: [
            {
              key: 'Security',
              point: 'We cannot guarantee, ensure or warrant the security of any information transmitted to the Company. All transmissions of information are done at the sender’s own risk. Once we are in possession of information, we will make reasonable efforts to ensure the security of the information within our systems.Your personal information and files are stored on Nugget’s servers and the servers of companies we hire to provide services to us.Nugget has adopted physical, technological, and administrative procedures designed to safeguard and secure the information we process. By using this Site, Platform or Services or by providing Personal Data to us, you agree that we can communicate with you electronically regarding security, privacy, and administrative issues relating to your use of this Site, Platform'
            }
          ]
        },
        {
          title: 'FAQS:',
          desc: '',
          faqs: [
            {
              que: 'What are the reasons for storing face data:',
              ans: ' We are a user research company and we do video surveys to get the feedback on the app and websites, in order to understand the user experience. We have to store the face video data for 180 days, so that the client (product designer or developer) can recap the video and measure product experience‍'
            },
            {
              que: 'What is the length for which the videos are stored',
              ans: 'We store it for 180 days, after which the video data is deleted. We only retain user’s videos for 180 days for the purposes set out in this policy.'
            },
            {
              que: 'Who has access to the face data?',
              ans: "We do not share the face data from the video recording with anyone other than one client (per study), who sponsors this market research. The client or company that sponsors the market research wants to see the recap of these sessions which are captured in the video survey and hence only a limited access is given to a few people (min 1 user to max 10 users in client's team). We do have in place an agreement with each of these clients which restricts how they are able to process your personal information and require them to keep it secure. We will never sell your personal data to any other third party."
            },
            {
              que: 'Do we share the data with third parties?',
              ans: "No, We don't share the raw data with third parties. The clients only have view access to the data using Nugget’s SaaS platform. They can’t export the videos outside the platform. Clients can only access these videos till they are under the Non disclosure agreement."
            },
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Terms and Conditions',
      desc: '‍These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with https://nuggethq.com website (the "Service") operated by UXR Labs Inc ("us", "we", or "our").',
      enum: 'tnc',
      class: 'tnc',
      array: [
        {
          title: 'Please read these Terms and Conditions carefully before using the Service.Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.',
          desc: null
        },
        {
          title: "Subscriptions",
          desc: '‍Whether Company makes a one-time payment or purchases a Subscription (each, a “Transaction”), Company expressly authorizes Nugget (or Nugget’s third-party payment processor) to charge Company for such Transaction. Nugget may ask Company to supply additional information relevant to its Transaction, including Company’s credit card number, the expiration date of Company’s credit card and Company’s email and postal addresses for billing and notification (such information, “Payment Information”). Company represents and warrants that it has the legal right to use all payment method(s) represented by any such Payment Information. When Company initiates a Transaction, Company authorizes Nugget to provide its Payment Information to third parties so Nugget can complete Company’s Transaction and to charge Company’s payment method for the type of Transaction Company has selected (plus any applicable taxes and other charges). Company may need to provide additional information to verify its identity before completing Company’s Transaction (such information is included within the definition of Payment Information). By initiating a Transaction, Company agrees to the pricing, payment and billing policies applicable to such fees and charges, as posted or otherwise communicated to Company. All payments for Transactions are non-refundable and non-transferable except as expressly provided in these Terms. All payments shall be paid in U.S. dollars.',
        },
        {
          title: null,
          desc: null,
          keyPoints: [
            {
              key: 'Free Trial',
              point: 'UXR Labs Inc may, at its sole discretion, offer a Subscription with a free trial for a limited period of time ("Free Trial").You may be required to enter your billing information in order to sign up for the Free Trial.If you do enter your billing information when signing up for the Free Trial, you will not be charged by UXR Labs Inc until the Free Trial has expired. On the last day of the Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.At any time and without notice, UXR Labs Inc reserves the right to (i) modify the terms and conditions of the Free Trial offer, or (ii) cancel such Free Trial offer.',
            },
            {
              key: 'Fee Changes',
              point: 'UXR Labs Inc, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.UXR Labs Inc will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.',
            },
            {
              key: 'Refunds',
              point: 'Certain refund requests for Subscriptions may be considered by UXR Labs Inc on a case-by-case basis and granted in sole discretion of UXR Labs Inc.',
            },
            {
              key: 'Content',
              point: 'Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.By posting Content to the Service, you grant us the right and license to use, modify, perform, display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights.You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.',
            },
            {
              key: 'Accounts',
              point: 'When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.',
            },
            {
              key: "Links To Other Web Sites",
              point: 'Our Service may contain links to third-party web sites or services that are not owned or controlled by UXR Labs Inc.UXR Labs Inc has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that UXR Labs Inc shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.',
            },
            {
              key: 'Termination',
              point: 'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.',
            },
            {
              key: "Disclaimer",
              point: 'Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.UXR Labs Inc its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.',
            },
            {
              key: '‍Governing Law',
              point: 'These Terms shall be governed and construed in accordance with the laws of Austria, without regard to its conflict of law provisions.Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.',
            },
            {
              key: "Changes",
              point: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.',
            },
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Terms and Conditions for Participants',
      desc: 'These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with https://nuggethq.com website (the "Service") operated by UXR Labs Inc ("us", "we", or "our").',
      enum: 'tnc4p',
      class: 'tnc',
      array: [
        {
          title: 'Please read these Terms and Conditions carefully before using the Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.‍For purposes of providing these studies, our service matches up testers to clients who want their or another party’s website, advertisement, animation video, website search process, software, software prototype or other element, remotely analyzed via the Internet by testers. The testers may be connected to the Internet from their home, or other Internet connection facility, at their own discretion.',
          desc: null
        },
        {
          title: "Registration",
          desc: "In order to function as a tester for Nugget, you may need to download a software application (“Nugget Recorder”) from our website, nuggethq (the “Website”), which will provide you with access to our testing platform, and you may also need to download other SW languages or applications if they are not already installed on your computer. By downloading the Nugget Recorder, you hereby authorize Nugget to access the computer on which you download the Nugget Recorder for the express purpose of and to the extent required for your participating as a tester in the qualitative research testing services. You agree to assume full responsibility for any damage caused to your system, any programs, data or information related to or arising from such downloads or the testing services you provide.When you sign up with Nugget to act as a tester, Nugget will, through the registration process, collect personally identifiable information about you such as your name, contact information, PayPal account information, race, age, gender, education, employment status and hobbies, and any other information that we request and that you provide, either initially or in follow up questionnaires after registration. You agree to the collection and use of such personally identifiable information, including video images of your face and audio recordings of your voice as part of providing usability testing services. You hereby irrevocably transmit to Nugget the exclusive and full copyright ownership of such video and audio recordings. You represent that the information you provide to Nugget will be authentic, accurate and complete and made in accordance with Nugget policies and procedures.In addition, Nugget may collect details of your visits to the Websites or software we ask you to test, including, but not limited to, clickflow, traffic data, location data, weblogs, operating system, browser type, for the purpose of system administration and fraud prevention."
        },
        {
          title: "Rewards",
          desc: "Upon completing a Test, you may be entitled to receive a payment, a gift card, points or other rewards (“Rewards”). In advance of each Test, you will be informed through the Platform or directly if completion of the Test entitles you to a Reward.You are responsible for determining any tax liabilities incurred as a result of receiving a Reward. Occasionally, a Customer may offer to provide a Reward to you for completing a Test it developed. If a Customer makes such an offer, then you shall receive the Reward directly from that Customer, and you acknowledge and agree that Nugget has no obligation with respect to such Reward.Any participant who engages in any of the Restricted Activities set out below shall not be entitled to receive a Reward."
        },
        {
          title: null,
          desc: null,
          keyPoints: [
            {
              key: 'Information Collected: PII',
              point: 'We care about the privacy of Participants. When you use the Platform, register with Nugget to become a Participants, fill out questionnaires related to specific Tests, or complete a Test, we will receive and collect information about you, which may include, but is not limited to:personally identifiable information such as your name, email address or other identification, contact and account information demographic information such as age, gender, education, employment status and hobbies other information that we may request to facilitate the completion and analysis of Tests. You represent that the Information that you provide to Nugget will be accurate and complete.',
            },
            {
              key: 'Information Collected: Recording',
              point: 'You understand and agree that each Test you take is captured in a Recording and that the Recording may include video or photographic recordings of your face, audio recordings of your voice, recordings of your screen, text inputs, recordings of interactions with your device, and recordings of interactions with your surroundings, provided that all such information capture will only occur in connection with a Test. You further understand and agree that where the Test is created by a Customer, Nugget will provide a copy of the Recording of that Test to the Customer for the Customer’s use.',
            },
            {
              key: 'Information Collected: Content',
              point: "Nugget makes Recordings of the Tests you take and may also collect other content such as comments, suggestions and ideas you post to, or send over, the Platform, whether in response to a Test prompt or otherwise. This content, together with Recordings, are referred to in these Terms of Service. You represent and warrant the following:You have obtained and are solely responsible for obtaining all consents as may be required by law to provide any Content relating to third parties. Your Content and Nugget's use thereof as contemplated by this Agreement and the Platform will not violate any law or infringe any rights of any third party. Nugget may exercise the rights to your Content granted under this Agreement without liability for payment of any guild fees, residuals, payments, fees, or royalties payable under any collective bargaining agreement or otherwise. To the best of your knowledge, all your Content and other information that you provide to us is truthful and accurate. We don't collect any information on the tracking of other apps, once the video session is completed as part of the test. We do not monitor the activity of other apps for any reason. No app tracking in background is done for any other apps in the device.",
            },
          ]
        },
        {
          title: 'Privacy policy',
          desc: 'For information on how your Participant Information and Content may be used, please see our',
          link: "Privacy Policy",
          linkUrl: ['/terms','policy']
        },
        {
          title: 'Indemnity',
          desc: 'You agree to indemnify and hold harmless Nugget, its employees, suppliers and licensors, their respective officers, directors, employees, agents, subsidiaries and affiliates, and each of them from any third-party claim, liability, loss, damage, cost or expense (including without limitation reasonable attorney’s fees) arising out of or related to your provision of testing services, the Website or any Content it contains; your failure to comply with these Terms of Use; your infringement, violation, or misappropriation of any third party rights; or any violation of applicable laws or regulations.',
        },
        {
          title: 'General Terms and Conditions',
          desc: 'Participants "You" and Nugget are independent parties. Nothing in these Terms of Use will be construed to make You an agent, employee, joint venturer, partner or legal representative of Nugget. These Terms of Use constitute the entire agreement between the parties relating to the subject matter herein, and shall completely replace any prior agreements, oral or written, between you and Nugget in relation to you acting as a tester for Nugget. You agree that if Nugget does not exercise or enforce any legal right or remedy which is contained in these Terms of Use (or which Nugget has the benefit of under any applicable law), this will not constitute a formal waiver of Nugget ´rights and those rights or remedies will still be available to Nugget. You may not assign or delegate any rights or obligations under these Terms of Use and any purported assignment or delegation shall be ineffective. Nugget may freely assign or delegate all rights and obligations under these Terms of Use, fully or partially. These terms of use shall be governed by the law of the State of Delaware, USA. You hereby consent to the jurisdiction of the state and federal courts in and for Delaware, USA, for the resolution of any dispute arising out of or related to these Terms of Use. If any court of law, having jurisdiction over the Website and/or the qualitative research testing services, rules that any provision of these Terms of Use is invalid, unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms of Use and shall not affect the rest of these Terms of Use, which shall continue in full force and effect.',
        }
      ]
    }
  ]
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((res: Params) => {
      if (res && res['id']) {
        this.selectedList = this.privacyList.filter(i => i.enum === res['id'])[0];
      }
    })
  }
  ngOnInit(): void {
  }

}
