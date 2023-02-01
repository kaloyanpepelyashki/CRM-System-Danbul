export default function StatCard({ Color }) {
  return (
    <>
      <div className="stat-card-outter" style={{ backgroundColor: Color }}>
        <div className="stat-card-inner">

          <div className="stat-card-arrow-shape">
            <div className="stat-card-arrow-shape-inner-container">
              <p className="stat-card-number stat-card-text-piece font-paragraph">75</p>
              <p className="stat-card-title stat-card-text-piece font-paragraph">Applicants</p>
            </div>
          </div>
          <p className="stat-card-text font-paragraph">Number of applicants for MMD</p>
        </div>
      </div>
    </>
  );
}
