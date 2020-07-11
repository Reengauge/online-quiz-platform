export const schema =
`SET search_path = QUIZ_DB;

DROP SCHEMA IF EXISTS QUIZ_DB CASCADE;
CREATE SCHEMA QUIZ_DB;

CREATE TABLE Room (
	room_id			SERIAL,
	event_key		CHAR(6)			UNIQUE NOT NULL,
	room_name		VARCHAR(64)		NOT NULL,
	presenter_id	VARCHAR(64)		NOT NULL,
	start_time		DATE			DEFAULT CURRENT_DATE,
	end_time		DATE			DEFAULT CURRENT_DATE + INTERVAL '1 month'
		CHECK (start_time < end_time),
	PRIMARY KEY (room_id)
);

CREATE TABLE Quiz (
	quiz_id			SERIAL,
	max_duration	INTEGER,
	title			VARCHAR(255)	NOT NULL,
	room_id			INTEGER			NOT NULL,
	PRIMARY KEY (quiz_id),
	FOREIGN KEY (room_id) REFERENCES Room(room_id)
		ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Question (
	question_id		SERIAL,
	question_label	VARCHAR(512)	NOT NULL,
	correct_answer	VARCHAR(256),
	quiz_id			INTEGER			NOT NULL,
	PRIMARY KEY (question_id),
	FOREIGN KEY (quiz_id) REFERENCES Quiz(quiz_id)
		ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Choice (
	choice_id		SERIAL,
	choice_label	VARCHAR(256)	NOT NULL,
	question_id		INTEGER			NOT NULL,
	PRIMARY KEY (choice_id),
	FOREIGN KEY (question_id) REFERENCES Question(question_id)
		ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Participant (
	participant_id	SERIAL,
	nickname		VARCHAR(32),
	PRIMARY KEY (participant_id)
);

CREATE TABLE AnswerEntry (
	answer_label	VARCHAR(256)	NOT NULL,
	question_id		INTEGER			NOT NULL,
	participant_id	INTEGER			NOT NULL,
	FOREIGN KEY (question_id) REFERENCES Question(question_id)
		ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (participant_id) REFERENCES Participant(participant_id)
		ON UPDATE CASCADE ON DELETE CASCADE
);`;
