export const data =
`SET search_path = QUIZ_DB;

INSERT INTO Room (event_key, room_name, presenter_id) VALUES ('123456', 'Physics 101', '21dn9ca82dniad3');
INSERT INTO Room (event_key, room_name, presenter_id) VALUES ('abcdef', 'Maths 201', '21dn9ca82dniad3');

INSERT INTO Quiz (max_duration, title, room_id) VALUES (300, 'Last Week''s Lecture Recap', 1);
INSERT INTO Quiz (max_duration, title, room_id) VALUES (360, 'Warm Up Quiz', 2);
INSERT INTO Quiz (max_duration, title, room_id) VALUES (300, 'Class Recap', 2);

INSERT INTO Question (question_label, correct_answer, quiz_id) VALUES ('Jane is using a 14 cm long screwdriver to assemble a bookcase. She applied a force of 45 N to rotate the screw 180 degrees. How much work did she do?', '19.79 J', 1);
INSERT INTO Question (question_label, correct_answer, quiz_id) VALUES ('What will occur when an object moves continuously around an internal axis?', 'The object will spin.', 1);
INSERT INTO Question (question_label, quiz_id) VALUES ('Why does time seem to flow only in one direction?', 1);

INSERT INTO Choice (choice_label, question_id) VALUES ('19.79 J', 1);
INSERT INTO Choice (choice_label, question_id) VALUES ('23.51 J', 1);
INSERT INTO Choice (choice_label, question_id) VALUES ('45.12 J', 1);
INSERT INTO Choice (choice_label, question_id) VALUES ('32.14 J', 1);
INSERT INTO Choice (choice_label, question_id) VALUES ('The object will divide into 2 parts.', 2);
INSERT INTO Choice (choice_label, question_id) VALUES ('The object will move in a straight line.', 2);
INSERT INTO Choice (choice_label, question_id) VALUES ('The object will spin.', 2);
INSERT INTO Choice (choice_label, question_id) VALUES ('The object will fuse with the string.', 2);

INSERT INTO Participant (nickname) VALUES ('Josh');
INSERT INTO Participant (nickname) VALUES ('Suzie');
INSERT INTO Participant (nickname) VALUES ('Marc');

INSERT INTO AnswerEntry (answer_label, question_id, participant_id) VALUES ('32.14 J', 1, 1);
INSERT INTO AnswerEntry (answer_label, question_id, participant_id) VALUES ('32.14 J', 1, 2);
INSERT INTO AnswerEntry (answer_label, question_id, participant_id) VALUES ('19.79 J', 1, 3);
INSERT INTO AnswerEntry (answer_label, question_id, participant_id) VALUES ('The object will divide into 2 parts.', 2, 1);
INSERT INTO AnswerEntry (answer_label, question_id, participant_id) VALUES ('The object will spin.', 2, 2);
INSERT INTO AnswerEntry (answer_label, question_id, participant_id) VALUES ('The object will fuse with the string.', 2, 3);
INSERT INTO AnswerEntry (answer_label, question_id, participant_id) VALUES ('God made it this way', 3, 1);
INSERT INTO AnswerEntry (answer_label, question_id, participant_id) VALUES ('Hard to say', 3, 2);
INSERT INTO AnswerEntry (answer_label, question_id, participant_id) VALUES ('Pretty philosophic question!', 3, 3);`;
