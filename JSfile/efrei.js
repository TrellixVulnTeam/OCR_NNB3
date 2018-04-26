const fs = require('fs');

exports.writeHeader = function (text, compteur, teacherName,jsonOutput) {
  if (compteur < 3) {
    if (text.match("lundi") || text.match("mardi") || text.match("mercredi") || text.match("jeudi") || text.match("vendredi") || text.match("samedi")) {
      fs.appendFileSync(jsonOutput, `"date" : "${text}",`);
      return true;
    } else if (text.match("lepoivre") || text.match("benmessaoud") || text.match("marshall")) {
      fs.appendFileSync(jsonOutput, `"teacher" : "${text}",`);
      teacherName = text;
      return true;
    } else if (text.match("td")) {
      fs.appendFileSync(jsonOutput, `"lesson" : "${text}",`);
      return true;
    } else if (text.match("efrei")) {
      fs.appendFileSync(jsonOutput, `"school" : "${text}",`);
      return true;

  } else {
    writeHeaderEnd(text, teacherName,jsonOutput);
  }
};

writeHeaderEnd = function (text , teacherName,jsonOutput) {
  if (text.match("lundi") || text.match("mardi") || text.match("mercredi") || text.match("jeudi") || text.match("vendredi") || text.match("samedi")) {
    fs.appendFileSync(jsonOutput, `"date" : "${text}"`);
  } else if (text.match("lepoivre") || text.match("benmessaoud") || text.match("marshall")) {
    fs.appendFileSync(jsonOutput, `"teacher" : "${text}"`);
    teacherName = text;
  } else if (text.match("td")) {
    fs.appendFileSync(jsonOutput, `"lesson" : "${text}"`);
  } else if (text.match("efrei") || text.match("esiea") || text.match("esilv")) {
    fs.appendFileSync(jsonOutput, `"school" : "${text}"`);
  }
};

exports.writeStudent = function (text, teacherName,jsonOutput) {
  if (text == teacherName) {
    return;
  } else {
    fs.appendFileSync(jsonOutput, `{"name" : "${text}"},`);
  }
};

exports.writeMetaData = function (id, title) {
  // body...
};