/*
Commands acquired from Sony video projector PROTOCOL MANUAL 1st Edition.
(Shady PDF from: https://www.digis.ru/upload/iblock/f5a/VPL-VW320,%20VW520_ProtocolManual.pdf )
*/

const actions = {
  GET: '01',
  SET: '00'
}

const commands = {
  SET_POWER: '0130',
  CALIBRATION_PRESET: '0002',
  ASPECT_RATIO: '0020',
  INPUT: '0001',
  GET_STATUS_ERROR: '0101',
  GET_STATUS_POWER: '0102',
  GET_STATUS_LAMP_TIMER: '0113',
  PICTURE_POSITION: '0066',
}

const aspectRatio = {
  NORMAL: '0001',
  V_STRETCH: '000B',
  ZOOM_1_85: '000C',
  ZOOM_2_35: '000D',
  STRETCH: '000E',
  SQUEEZE: '000F'
}

const powerStatus = {
  STANDBY: '0000',
  START_UP: '0001',
  START_UP_LAMP: '0002',
  POWER_ON: '0003',
  COOLING: '0004',
  COOLING2: '0005'
}

const picturePosition = {
  POS_1_85: '0000',
  POS_2_35: '0001',
  CUSTOM_1: '0002',
  CUSTOM_2: '0003',
  CUSTOM_3: '0004'
}

module.exports = {
  commands,
  actions,
  aspectRatio,
  powerStatus,
  picturePosition
}
