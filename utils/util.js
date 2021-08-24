const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function convertToCastString(casts){
  var castsjoin = "";
  for(var idx in casts){
    castsjoin = castsjoin + casts[idx].name + "/"
  }
  return castsjoin.substring(0,castsjoin.length-2);
}

function converToCastInfos(casts){
  var castsArray = []
  for(var item in casts){
    var cast = {
      img: casts[item].avatars ? casts[item].avatars.large: "",
    name: casts[item].name
    }
    castsArray.push(cast);
  }
  return castsArray;
}


module.exports = {
  formatTime,
  convertToCastString,
  converToCastInfos
}
