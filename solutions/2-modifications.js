import _ from 'lodash';

// BEGIN
export default function normalize(lesson){
  if (lesson.name) {
    lesson.name = lesson.name.charAt(0).toUpperCase() + lesson.name.slice(1).toLowerCase();
  }
  if (lesson.description) {
    lesson.description = lesson.description.toLowerCase();
  }
};
// END