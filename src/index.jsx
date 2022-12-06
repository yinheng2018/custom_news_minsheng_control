import React, { useEffect, useState } from 'react'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import setting from './setting'
import list from './dataConfig'
import images from './imgConfig'
import './index.css'

function customNewsMingshengControl({
  bigScreen: { setDataPool },
  editable,
  events: { click },
  path
}) {
  const [open, setOpen] = useState(true)
  const [mogami, setMogami] = useState('SmartCommunity')
  const [Pname, setPname] = useState('智慧社区')
  const [date, setDate] = useState('day')
  const [check, setCheck] = useState('radio')
  const [secondaryRadio, setSecondaryRadio] = useState(
    'earlyWarningScatteredPoints'
  )
  const [secondaryList, setSecondaryList] = useState([])
  const [secondaryCheck, setSecondaryCheck] = useState([])
  const [dateList, setDateList] = useState([])
  const [isCheckedList, setIsCheckedList] = useState([])

  const [SmartCommunity, setSmartCommunity] = useState([])
  const [GovernmentServices, setGovernmentServices] = useState([])
  const [WisdomEducation, setWisdomEducation] = useState([])
  const [IntelligentHealth, setIntelligentHealth] = useState([])
  const [SmartElderlyCare, setSmartElderlyCare] = useState([])
  // 智慧社区
  const [housing, setHousing] = useState([]) //公租房小区
  const [Dishonestperson, setDishonestperson] = useState([]) //失信人员
  // 政务服务
  const [Regional, setRegional] = useState([]) //区域办件量
  const [TopTasks, setTopTasks] = useState([]) //热门办件事项
  // 智慧教育
  const [resources, setResources] = useState([]) //教育资源分布
  const [institution, setInstitution] = useState([]) //科研机构
  const [Hightech, setHightech] = useState([]) //高新技术企业
  // 智慧卫生
  const [Distribution, setDistribution] = useState([]) //医疗资源分布
  const [Publichospital, setPublichospital] = useState([]) //公立医院
  const [Privatehospital, setPrivatehospital] = useState([]) //私立医院
  const [Primaryhealth, setPrimaryhealth] = useState([]) //基层卫生医疗机构
  // 智慧养老
  const [Distributionendowment, setDistributionendowment] = useState([]) //养老资源分布
  const [Publicnursinghomes, setPublicnursinghomes] = useState([]) //公立养老院
  const [Privatenursinghome, setPrivatenursinghome] = useState([]) //私立养老院
  const [Cateringsite, setCateringsite] = useState([]) //助餐站点

  // 更新store中的dataPool
  const setDataPl = () => {
    setDataPool(
      click,
      {
        mogami,
        date,
        SmartCommunity,
        GovernmentServices,
        WisdomEducation,
        IntelligentHealth,
        SmartElderlyCare,
        // keySites: secondaryCheck,
        // SmartCommunity: secondaryRadio,
        visible: String(open)
      },
      path,
      editable
    )
  }

  // 赋初始值
  useEffect(() => {
    setDataPl()
  }, [])

  // 值改变更新dataPool
  useEffect(() => {
    setDataPl()
  }, [mogami, date, secondaryRadio, secondaryCheck, open])

  // 点击展开
  const handleOpen = () => {
    setOpen(true)
    setCheck('radio')
    setMogami('SmartCommunity')
    setPname('智慧社区')
    // setDate('day');
    setSecondaryRadio('earlyWarningScatteredPoints')
  }

  // 点击关闭
  const handleClose = () => {
    setOpen(false)
    setMogami('')
    setPname('')
    setDate('')
    setSecondaryRadio('')
    setSecondaryCheck([])
  }

  // 点击选中最上级
  const handleCheckMogami = (v, i) => {
    if (v.value !== mogami) {
      setSecondaryRadio('')
      setSecondaryCheck([])
    }
    clearPrevDataInfo(Pname);

    setMogami(v.value)
    setPname(v.label)

    setChildernList(Pname)

    if (v.select) {
      const select = v.select === 'radio' ? 'radio' : 'checkbox'
      setCheck(select)
    }
    console.log('Pname', Pname)

  }
  //筛选选中数据
  const filterIsChecketValue = (i) => {
    const List = []
    list[i].children.map((item) => {
      if (item.isChecked) {
        List.push(item.value)
      }
    })
    console.log('选中的数据', List)
    return List
  }
  // 获取次级列表
  const getSecondaryList = () => {
    list.forEach((v) => {
      if (v.value === mogami) {
        const listData = v.children || []
        const dateData = v.dateList || []
        console.log(listData)
        setSecondaryList(listData)
        // setDateList(dateData);
      }
    })
  }

  // 点击时间周期
  const handleDate = (v) => {
    setDate(v)
  }

  // 点击次级
  const clickSecondary = (v) => {
    // console.log("v",v)
    // if (check === 'radio') {
    setSecondaryRadio(v.value)
    v.isChecked = !v.isChecked
    if (isCheckedList.includes(v.value) && !v.isChecked) {
      const List = isCheckedList.filter((items) => items != v.value)
      // console.log("List1",List)
      setIsCheckedList(List)
    } else {
      isCheckedList.push(v.value)
      const List = isCheckedList
      // console.log("List2",List)
      setIsCheckedList(List)
    }
      
     setChildernList(Pname)
    // }

    // else {
    //   const listData = [...secondaryCheck]
    //   if (listData.includes(v)) {
    //     const index = listData.findIndex((item) => item === v)
    //     listData.splice(index, 1)
    //     setSecondaryCheck([...listData])
    //     return
    //   }
    //   setSecondaryCheck([...listData, v])
    // }
  }
  //清空上一步撒点类别信息
  const clearPrevDataInfo=(oldPname) => {
    switch (oldPname) {
      case '智慧社区':
      setHousing('')
      setDishonestperson('')
        return
      case '政务服务':
        setRegional('')
        setTopTasks('')
        return
      case '智慧教育':
        setResources('')
        setInstitution('')
        setHightech('')
        return
      case '智慧卫生':
        setDistribution('')
        setPublichospital('')
        setPrivatehospital('')
        setPrimaryhealth('')
        return
      case '智慧养老':
        setDistributionendowment('')
        setPublicnursinghomes('')
        setPrivatenursinghome('')
        setCateringsite('')
        return
    }
   }
  //触发触发子集函数
  const setChildernList = (Pname) => {
    switch (Pname) {
      case '智慧社区':
        list[0].children.map((item, index) => {
          if (item.label === '公租房小区') {
            if (item.isChecked) {
              setHousing(['housing'])
            } else {
              setHousing('')
            }
          }
          if (item.label === '失信人员') {
            if (item.isChecked) {
              setDishonestperson(['Dishonestperson'])
            } else {
              setDishonestperson('')
            }
          }
        })
        return
      case '政务服务':
        list[1].children.map((item, index) => {
          if (item.label === '区域办件量') {
            if (item.isChecked) {
              setRegional(['Regional'])
            } else {
              setRegional('')
            }
          }
          if (item.label === '热门办件事项') {
            if (item.isChecked) {
              setTopTasks(['TopTasks'])
            } else {
              setTopTasks('')
            }
          }
        })
        return
      case '智慧教育':
        list[2].children.map((item, index) => {
          if (item.label === '教育资源分布') {
            if (item.isChecked) {
              setResources(['resources'])
            } else {
              setResources('')
            }
          }
          if (item.label === '科研机构') {
            if (item.isChecked) {
              setInstitution(['institution'])
            } else {
              setInstitution('')
            }
          }
          if (item.label === '高新技术企业') {
            if (item.isChecked) {
              setHightech(['Hightech'])
            } else {
              setHightech('')
            }
          }
        })
        return
      case '智慧卫生':
        list[3].children.map((item, index) => {
          if (item.label === '医疗资源分布') {
            if (item.isChecked) {
              setDistribution(['Distribution'])
            } else {
              setDistribution('')
            }
          }
          if (item.label === '公立医院') {
            if (item.isChecked) {
              setPublichospital(['Publichospital'])
            } else {
              setPublichospital('')
            }
          }
          if (item.label === '私立医院') {
            if (item.isChecked) {
              setPrivatehospital(['Privatehospital'])
            } else {
              setPrivatehospital('')
            }
          }
          if (item.label === '基层卫生医疗机构') {
            if (item.isChecked) {
              setPrimaryhealth(['Primaryhealth'])
            } else {
              setPrimaryhealth('')
            }
          }
        })
        return
      case '智慧养老':
        list[4].children.map((item, index) => {
          if (item.label === '养老资源分布') {
            if (item.isChecked) {
              setDistributionendowment(['Distributionendowment'])
            } else {
              setDistributionendowment('')
            }
          }
          if (item.label === '公立养老院') {
            if (item.isChecked) {
              setPublicnursinghomes(['Publicnursinghomes'])
            } else {
              setPublicnursinghomes('')
            }
          }
          if (item.label === '私立养老院') {
            if (item.isChecked) {
              setPrivatenursinghome(['Privatenursinghome'])
            } else {
              setPrivatenursinghome('')
            }
          }
          if (item.label === '助餐站点') {
            if (item.isChecked) {
              setCateringsite(['Cateringsite'])
            } else {
              setCateringsite('')
            }
          }
        })
        return
    }
  }
  // 次级选中状态判断
  const secondarySelectedState = (item) => {
    const activeObj = { className: '', icon: '' }
    // if (check === 'radio') {
    if (check) {
      activeObj.className =
        item.value && item.isChecked
          ? 'layer-control-open-content-right-secondary-row-active'
          : ''
      activeObj.icon =
        item.value && item.isChecked
          ? images[`${item.value}2`]
          : images[item.value]
      return activeObj
    } else {
      activeObj.className = secondaryCheck.includes(item.value)
        ? 'layer-control-open-content-right-secondary-row-active'
        : ''
      activeObj.icon = secondaryCheck.includes(item.value)
        ? images[`${item.value}2`]
        : images[item.value]
      return activeObj
    }
  }

  useEffect(() => {
    getSecondaryList()
  }, [mogami])

  return (
    <div className="layer-control">
      {open ? (
        <div className="layer-control-open">
          <div className="layer-control-open-top">
            <span>图层控制</span>
          </div>
          <div className="layer-control-open-content">
            <div className="layer-control-open-content-left">
              {list.map((v, i) => (
                <div
                  key={v.value}
                  className={`layer-control-open-content-left-row ${
                    mogami === v.value
                      ? 'layer-control-open-content-left-row-active'
                      : ''
                  } `}
                  onClick={() => {
                    handleCheckMogami(v, i)
                  }}
                >
                  <img
                    alt="icon"
                    src={
                      mogami === v.value
                        ? images[`${v.value}2`]
                        : images[v.value]
                    }
                  ></img>
                  <text>{v.label}</text>
                </div>
              ))}
            </div>
            <div className="layer-control-open-content-right">
              {secondaryList.length ? (
                <div className="layer-control-open-content-right-secondary">
                  {secondaryList.map((v) => (
                    <div
                      key={v.value}
                      className={`layer-control-open-content-right-secondary-row  ${
                        secondarySelectedState(v).className
                      }`}
                      onClick={() => {
                        clickSecondary(v)
                      }}
                    >
                      <img
                        alt="icon"
                        src={secondarySelectedState(v).icon}
                      ></img>
                      <text>{v.label}</text>
                    </div>
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="layer-control-retract">
          <span>图层控制</span>
        </div>
      )}
    </div>
  )
}
customNewsMingshengControl.setting = setting

export default customNewsMingshengControl
