export default function ShiftsDropDownList({ Shifts }) {
  return (
    <td>
      <div>
        <select className="dropdown" defaultValue="">
          <option value="" disabled>
            Choose a shift:
          </option>
          {Shifts.map((sh) => (
            //I change the name of attribut from sh.num to sh.name, because the shifts object doesn't have an attribut num.
            <option key={sh.id} value={sh.id}>
              {sh.name}
            </option>
          ))}
        </select>
      </div>
    </td>
  );
}
