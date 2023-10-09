import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeamsResponseModel } from 'src/app/_model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  public teamsList: Array<TeamsResponseModel> = [
    {
      title: 'Product Managers',
      subTitle: 'Uncover the “Why” behind user behaviour',
      enum: 'managers',
      keyPoints: [
        {
          id: 1,
          title: 'participant recruitment',
          subTitle: 'Flexible methods for participant recruitment',
          desc: 'Recruit participants for the study from our B2C and B2B panel of 1 Mn+ vetted participant pool, or just use your panel',
          imagePath: 'flexible-method-participants.mp4',
          action: false,
          subMenu: []
        },
        {
          id: 2,
          title: 'unmoderated testing',
          subTitle: 'Collect user insights within hours, not days or weeks',
          desc: 'Use unmoderated tool to launch studies and get video based insights asynchronously within hours ',
          imagePath: 'collect-insights.mp4',
          action: false,
          subMenu: []
        },
        {
          id: 3,
          title: 'insights',
          subTitle: 'Use the insights hub to drive team conversations',
          desc: 'Share and collaborate insights with your team, with the customer voice at the core of all decisions',
          imagePath: 'user-insights-hub.mp4',
          action: false,
          subMenu: []
        },
      ],
      helpList: [
        {
          id: 1,
          desc: 'Understand users’ needs & pains',
          icon: 'icon-user-pains-needs'
        },
        {
          id: 2,
          desc: 'Improve product experiences',
          icon: 'improve-products'
        },
        {
          id: 3,
          desc: 'Build your roadmap with user input',
          icon: 'build-with-input'
        },
      ]
    },
    {
      title: 'Product designers',
      subTitle: 'Take design decisions with confidence',
      enum: 'designers',
      keyPoints: [
        {
          id: 1,
          title: 'unmoderated testing',
          subTitle: 'Get user feedback on prototypes in few hours',
          desc: 'Run design tests with your own participants or with Nugget’s panel',
          imagePath: 'get-feedback.mp4',
          action: false,
          subMenu: []
        },
        {
          id: 2,
          title: 'research templates',
          subTitle: 'Use 30+ templates to setup tests on desktop or mobile prototypes',
          desc: 'Understand the challenges faced by your user and bring empathy to your product designs',
          imagePath: 'use-templates.mp4',
          action: false,
          subMenu: []
        },
        {
          id: 3,
          title: 'insights hub',
          subTitle: 'Uncover hidden insight with 1:1 conversations',
          desc: 'Go beyond surveys, and find insights from in-depth conversations with users',
          imagePath: 'uncover-insights.mp4',
          action: false,
          subMenu: []
        },
      ],
      helpList: [
        {
          id: 1,
          desc: 'Get feedback from the right persona',
          icon: 'right-persona'
        },
        {
          id: 2,
          desc: 'Test and iterate faster than ever',
          icon: 'test-iterate'
        },
        {
          id: 3,
          desc: 'Improve product experiences',
          icon: 'improve-products'
        },
      ]
    },
    {
      title: 'Marketers',
      subTitle: 'Make sure to make an impact with your creatives',
      enum: 'marketers',
      keyPoints: [
        {
          id: 1,
          title: 'content testing',
          subTitle: 'Make content that resonates with your audience',
          desc: 'Test your content with the right audience',
          imagePath: 'make-content.mp4',
          action: false,
          subMenu: []
        },
        {
          id: 2,
          title: 'ad testing',
          subTitle: 'Ad testing with powerful video feedback',
          desc: 'See the way your customers see your creatives',
          imagePath: 'ad-testing.mp4',
          action: false,
          subMenu: []
        },
        {
          id: 3,
          title: 'flexible methodologies',
          subTitle: 'Flexible methods for you and your team',
          desc: 'Use unmoderated or moderated methods to tune between speed and depth',
          imagePath: 'flexible-method-you.mp4',
          action: false,
          subMenu: []
        },
      ],
      helpList: [
        {
          id: 1,
          desc: 'Get feedback from the right persona',
          icon: 'right-persona'
        },
        {
          id: 2,
          desc: 'Test and iterate faster than ever',
          icon: 'test-iterate'
        },
        {
          id: 3,
          desc: 'Save costs on marketing spends',
          icon: 'save-cost'
        },
      ]
    },
    {
      title: 'Startup founders',
      subTitle: 'Get your Product Market Fit faster',
      enum: 'founders',
      keyPoints: [
        {
          id: 1,
          title: 'in-depth interviews',
          subTitle: 'Understand pain points and needs',
          desc: 'Conduct interviews, identify pain points and challenges that your product can solve',
          imagePath: 'understand-pain.mp4',
          action: false,
          subMenu: []
        },
        {
          id: 2,
          title: 'participant panel',
          subTitle: 'Find the right target market',
          desc: 'Test your product on different personas to find  the right market for your product',
          imagePath: 'find-right-target.mp4',
          action: false,
          subMenu: []
        },
        {
          id: 3,
          title: 'concept testing',
          subTitle: 'Make informed decisions with speed',
          desc: 'Experiment with your concepts faster to find the winning one',
          imagePath: 'make-decisions.mp4',
          action: false,
          subMenu: []
        },
      ],
      helpList: [
        {
          id: 1,
          desc: 'Affordable way to get user feedback',
          icon: 'affordable-feedback'
        },
        {
          id: 2,
          desc: 'Test and iterate faster than ever',
          icon: 'test-iterate'
        },
        {
          id: 3,
          desc: 'Expert help for founders to conduct reserach',
          icon: 'expert-help'
        },
      ]
    },
    {
      title: 'Ux researchers',
      subTitle: 'Get deeper research insights from a wide pool of audience',
      enum: 'researchers',
      keyPoints: [
        {
          id: 1,
          title: 'flexible methodologies',
          subTitle: 'Flexible methods for you and your team',
          desc: 'Use unmoderated or moderated methods to tune between speed and depth',
          imagePath: 'flexible-method-you.mp4',
          action: false,
          subMenu: []
        },
        {
          id: 2,
          title: 'participant panel',
          subTitle: 'Control over the participants you recruit',
          desc: 'Power filters and screeners to shortlist only the right participants that you need',
          imagePath: 'control-participants.mp4',
          action: false,
          subMenu: []
        },
        {
          id: 3,
          title: '1:1 interviews',
          subTitle: 'Uncover hidden insight with 1:1 conversations',
          desc: 'Go beyond surveys, and find insights from indepth conversations with users',
          imagePath: 'uncover-insights.mp4',
          action: false,
          subMenu: []
        },
      ],
      helpList: [
        {
          id: 1,
          desc: 'Transparent participant recruitment',
          icon: 'transparent-recruitment'
        },
        {
          id: 2,
          desc: 'Distraction free user interviews',
          icon: 'distraction-free'
        },
        {
          id: 3,
          desc: 'All your insights in one place',
          icon: 'insights-right'
        },
      ]
    },
  ];
  public selectedTeams: TeamsResponseModel = new TeamsResponseModel();
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((_res: Params) => {
      // console.log(_res);
      if (_res && _res['id']) {
        this.selectedTeams = this.teamsList.filter(i => i.enum === _res['id'])[0];
      }
    })
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }

}
