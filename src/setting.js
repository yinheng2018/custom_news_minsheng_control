import packageJson from '../package.json';

const { name, version } = packageJson;
export default {
  code: name,
  version,
  width: 300,
  height: 300,
  coordinate: {
    x: 0,
    y: 0,
  },
  config: [],
  data: {
    interval: 5,
    polling: 0,
    field: [],
    type: 1,
    value: JSON.stringify([]),
  },
  events: {
    click: {
      enable: true,
      description: '地图交互',
      fields: {
        visible: {
          mapper: '',
          description: '显隐',
          value: '',
        },
        mogami: {
          mapper: '',
          description: '最上级变量',
          value: '',
        },
        // SmartCommunity: {
        //   mapper: '',
        //   description: '智慧社区',
        //   value: '',
        // },
        housing: {
          mapper: '',
          description: '公租房小区',
          value: '',
        },
        Dishonestperson: {
          mapper: '',
          description: '失信人员',
          value: '',
        },
        // GovernmentServices: {
        //   mapper: '',
        //   description: '政务服务',
        //   value: '',
        // },
        Regional: {
          mapper: '',
          description: '区域办件量',
          value: '',
        },
        TopTasks: {
          mapper: '',
          description: '热门办件事项',
          value: '',
        },
        // WisdomEducation: {
        //   mapper: '',
        //   description: '智慧教育',
        //   value: '',
        // },
        resources: {
          mapper: '',
          description: '教育资源分布',
          value: '',
        },
        institution: {
          mapper: '',
          description: '科研机构',
          value: '',
        },
        Hightech: {
          mapper: '',
          description: '高新技术企业',
          value: '',
        },
        // IntelligentHealth: {
        //   mapper: '',
        //   description: '智慧卫生',
        //   value: '',
        // },
        Distribution: {
          mapper: '',
          description: '医疗资源分布',
          value: '',
        },
        Publichospital: {
          mapper: '',
          description: '公立医院',
          value: '',
        },
        Privatehospital: {
          mapper: '',
          description: '私立医院',
          value: '',
        },
        Primaryhealth: {
          mapper: '',
          description: '基层卫生医疗机构',
          value: '',
        },
        // SmartElderlyCare: {
        //   mapper: '',
        //   description: '智慧养老',
        //   value: '',
        // },
        Distributionendowment: {
          mapper: '',
          description: '养老资源分布',
          value: '',
        },
        Publicnursinghomes: {
          mapper: '',
          description: '公立养老院',
          value: '',
        },
        Privatenursinghome: {
          mapper: '',
          description: '私立养老院',
          value: '',
        },
        Cateringsite: {
          mapper: '',
          description: '助餐站点',
          value: '',
        },
       
      },
    },
  },
};
