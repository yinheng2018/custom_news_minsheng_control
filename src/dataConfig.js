const list = [
  {
    label: '智慧社区',
    value: 'SmartCommunity',
    select: 'radio',
    children: [
      {
        label: '公租房小区',
        value: 'housing',
        isChecked:false
      },
      {
        label: '失信人员',
        value: 'Dishonestperson',
        isChecked:false
      }
    ],
  },
  {
    label: '政务服务',
    value: 'GovernmentServices',
    select: 'radio',
    children: [
      {
        label: '区域办件量',
        value: 'Regional',
        isChecked:false
      },
      {
        label: '热门办件事项',
        value: 'TopTasks',
        isChecked:false
      }
    ],
  },
  {
    label: '智慧教育',
    value: 'WisdomEducation',
    select: 'radio',
    children: [
      {
        label: '教育资源分布',
        value: 'resources',
        isChecked:false
      },
      {
        label: '科研机构',
        value: 'institution',
        isChecked:false
      },
      {
        label: '高新技术企业',
        value: 'Hightech',
        isChecked:false
      },
    ],
  },
  {
    label: '智慧卫生',
    value: 'IntelligentHealth',
    select: 'radio',
    children: [
      {
        label: '医疗资源分布',
        value: 'Distribution',
        isChecked:false
      },
      {
        label: '公立医院',
        value: 'Publichospital',
        isChecked:false
      },
      {
        label: '私立医院',
        value: 'Privatehospital',
        isChecked:false
      },
      {
        label: '基层卫生医疗机构',
        value: 'Primaryhealth',
        isChecked:false
      }
    ],
  },
  {
    label: '智慧养老',
    value: 'SmartElderlyCare',
    select: 'radio',
    children: [
      {
        label: '养老资源分布',
        value: 'Distributionendowment',
        isChecked:false
      },
      {
        label: '公立养老院',
        value: 'Publicnursinghomes',
        isChecked:false
      },
      {
        label: '私立养老院',
        value: 'Privatenursinghome',
        isChecked:false
      },
      {
        label: '助餐站点',
        value: 'Cateringsite',
        isChecked:false
      }
    ],
  },
];

export default list;
