import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ResourceTypeEnum } from 'src/app/_enum';
import { BlogDescriptionModel, BlogDetailResponseModel, BlogHeadingModel, BlogResponseModel, GenericResponseList, MoreStoryModel } from 'src/app/_model';
import { NuggetService } from 'src/app/_services';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  public blogHeading: BlogHeadingModel = {
    id: 1,
    title: null,
    image: null,
    metadata: []
  }
  public blogContent: Array<BlogDescriptionModel> = [
    {
      id: 1,
      title: 'Emotional design focuses on crafting user experiences that goes beyond mere functionality and usability, aiming to create meaningful connections with users on an emotional level.',
      desc: 'By understanding the significance of emotional design, designers can create impactful experiences that leave a lasting impression on users.',
      images: []
    },
    {
      id: 2,
      title: 'Understanding the Role of Emotions in User Experiences',
      desc: 'Emotions play a fundamental role in shaping our perceptions, attitudes, and behaviours.When it comes to user experiences, emotions have the power to greatly influence engagement, satisfaction, and brand loyalty.Users are more likely to remember and engage with products and interfaces that evoke positive emotions, leading to increased user satisfaction and advocacy.By understanding the connection between emotions and user experiences, designers can design with an intention to create experiences that resonate deeply with users.',
      images: [
        {
          imagePath: '/assets/images/blog-image.jpg',
          imageDesc: 'Caption: Something about the image'
        },
        {
          imagePath: '/assets/images/blog-image.jpg',
          imageDesc: ''
        },
      ]
    },
    {
      id: 3,
      title: 'Designing for Positive Emotional Responses',
      desc: 'Designing for positive emotional responses involves creating experiences that delight and engage users. To achieve this, designers can employ various strategies. One approach is to design for surprise and delight by incorporating unexpected elements or interactions that evoke a sense of joy and excitement. Another strategy is to create experiences that provide a sense of accomplishment and empowerment, making users feel competent and in control. By focusing on positive emotions, designers can create experiences that evoke happiness, satisfaction, and a desire to engage further.',
      images: []
    },
    {
      id: 4,
      title: '‍Creating Emotional Connections through Visual Aesthetics',
      desc: '‍Visual aesthetics play a crucial role in evoking emotions and establishing emotional connections with users. Colors, typography, imagery, and visual hierarchy all contribute to the emotional impact of a design. For example, warm and vibrant colors can evoke feelings of excitement and energy, while cool and muted colors can create a sense of calm and tranquility. Thoughtfully chosen typography can convey personality and evoke emotions, while compelling imagery can evoke specific feelings or associations. By carefully considering visual aesthetics, designers can create designs that resonate emotionally with users.',
      images: [
        {
          imageDesc: 'Caption: Something about the image',
          imagePath: '/assets/images/blog-image.jpg'
        }
      ]
    },
    {
      id: 5,
      title: '‍Incorporating Storytelling and Narrative in UX Design',
      desc: '‍Storytelling has a powerful impact on human emotions, and incorporating it into UX design can create immersive and memorable experiences. By weaving a compelling narrative into the design, designers can engage users on a deeper level. Storytelling can be achieved through various elements, such as visual storytelling using imagery and illustrations, interactive narratives that unfold as users progress through an interface, or even microcopy and user interface text that conveys a story. By harnessing the power of storytelling, designers can create experiences that captivate users and forge emotional connections.',
      images: []
    },
    {
      id: 6,
      title: '‍Applying Psychological Principles to Evoke Desired Emotions',
      desc: '‍Psychology provides valuable insights into human behavior and emotions, which can be applied in emotional design. By understanding cognitive biases, designers can leverage them to nudge users towards desired emotional responses. For example, the scarcity principle can create a sense of urgency and desire, while social proof can foster a feeling of belonging and trust. Additionally, the use of emotional triggers, such as nostalgia or humor, can evoke specific emotional responses. By applying psychological principles, designers can design experiences that strategically evoke desired emotions and influence user behavior.',
      images: []
    },
    {
      id: 7,
      title: 'Measuring and Evaluating Emotional User Experiences',
      desc: 'Measuring and evaluating emotions in user experiences is a complex task. Traditional UX metrics such as task completion rates or time on task may not capture the emotional impact of a design. However, various methods and metrics can be employed to assess emotional responses. Qualitative methods like user interviews, observations, and think-aloud protocols can provide valuable insights into users emotional experiences. Quantitative approaches, such as emotion scales or sentiment analysis, can help measure emotional responses at scale. By understanding how users emotionally respond to a design, designers can iterate and improve the emotional impact of their work.',
      images: []
    },
    {
      id: 8,
      title: '‍Addressing Ethical Considerations in Emotional Design',
      desc: "With great power comes great responsibility. Emotional design comes with ethical considerations that designers must be mindful of. Designers must avoid manipulative practices that exploit users' emotions or push them towards undesired actions. Transparency, consent, and privacy are essential when designing experiences that evoke emotions. User’s well-being and emotional safety should always be prioritised. By considering ethical implications, designers can create experiences that not only evoke emotions but also respect users' autonomy and foster positive emotional well-being.",
      images: []
    },
    {
      id: 9,
      title: "Case Studies Highlighting Successful Emotional Design Implementations",
      desc: "Real-world case studies provide valuable insights into successful emotional design implementations. These examples showcase how emotional design has been effectively utilized to create exceptional user experiences. Case studies can include mobile applications, websites, physical products, or even immersive digital experiences. By examining these success stories, designers can learn from best practices and apply them to their own projects, creating experiences that resonate emotionally with users.",
      images: []
    },
    {
      id: 10,
      title: "Future Trends and Advancements in Emotional Design",
      desc: "As technology continues to evolve, so does the field of emotional design. Future trends and advancements hold exciting possibilities for designers. For example, the integration of artificial intelligence and machine learning can enable personalised and adaptive experiences that respond to users' emotional states. Augmented reality (AR) and virtual reality (VR) technologies can create immersive emotional experiences. Additionally, the growing focus on inclusive design ensures that emotional experiences are accessible and cater to a diverse range of users. By staying abreast of these trends, designers can push the boundaries of emotional design and create experiences that transcend expectations.",
      images: []
    },
    {
      id: 11,
      title: "Conclusion",
      desc: "Emotional design has the power to transform user experiences by creating meaningful connections and evoking positive emotions. By understanding the role of emotions, employing visual aesthetics, incorporating storytelling, applying psychological principles, and considering ethical considerations, designers can craft experiences that resonate deeply with users. Emotional design not only enhances user engagement and satisfaction but also builds lasting relationships between users and brands. As technology advances, embracing the power of emotional design will enable designers to create experiences that not only meet functional needs but also touch the hearts and minds of users, leaving a lasting impact. So, let's embark on this journey of emotional design and create experiences that truly resonate with users",
      images: []
    },
  ]
  public moreStories: MoreStoryModel =
    {
      title: 'Related Articles',
      action: false,
      class: 'image-card',
      storyModelList: []
    };
  public subscription: Array<Subscription> = [];
  public blogDetails: BlogDetailResponseModel = new BlogDetailResponseModel();
  public resourceTypeEnum = ResourceTypeEnum;
  public blogId!: string;
  constructor(private nuggetService: NuggetService, private route: ActivatedRoute, private router: Router) {
    // if (this.route.snapshot.paramMap.get('id')) {
    //   this.blogId = this.route.snapshot.paramMap.get('id') as string;

    // }
    this.subscription.push(this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => {
      return this.route.snapshot.paramMap.get('id');
    })).subscribe((res: string | null) => {
      this.blogId = res as string;
      if (this.blogId) {
        this.getBlogDetailsFromId();
      }
    }));
  }
  ngOnInit(): void {
    // if (this.blogId) {
    //   this.getBlogDetailsFromId();
    // }
  }

  getBlogDetailsFromId(): void {
    this.subscription.push(
      this.nuggetService.getBlogBtId(this.blogId).subscribe({
        next: (res: GenericResponseList<BlogResponseModel>) => {
          if (res && res.data) {
            if (res.data.blogDetails) {
              this.blogDetails = res.data.blogDetails;
              this.blogHeading = { ...this.blogHeading, title: this.blogDetails.title, image: this.blogDetails.poster_image };
            }
            if (res.data.relatedArtical) {
              this.moreStories = { ...this.moreStories, storyModelList: res.data.relatedArtical }
            }
          }
          //console.log(res);
        }, error: (ex) => {
          console.log(ex);
        }
      })
    )
  }
}
