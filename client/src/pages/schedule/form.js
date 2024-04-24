
import { useState } from 'react';

const boards = ['CBSE', 'ICSE', 'State Board'];

export default function ScheduleForm() {
  const [board, setBoard] = useState('');
  const [subjects, setSubjects] = useState('');
  const [extracurriculars, setExtracurriculars] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="board">Board:</label>
      <select id="board" value={board} onChange={(e) => setBoard(e.target.value)}>
        <option value="">Select a board</option>
        {boards.map((board) => (
          <option key={board} value={board}>
            {board}
          </option>
        ))}
      </select>

      <label htmlFor="subjects">Subjects:</label>
      <input id="subjects" type="text" value={subjects} onChange={(e) => setSubjects(e.target.value)} />

      <label htmlFor="extracurriculars">Extracurriculars:</label>
      <input id="extracurriculars" type="text" value={extracurriculars} onChange={(e) => setExtracurriculars(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}
