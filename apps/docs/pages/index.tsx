

export default function Docs() {
  return (
    <div>
      <h1>Getting started</h1>

      <p>Clone this project and run: yarn run</p>
      <p>Start the server using: yarn dev</p>
      <p>This will run docs and web module. Visit localhost:3000 for the web and port :3001 for the documentation</p>

      <div>
        <h2>Folder strucutre</h2>
        <div>This project uses feature based architecture</div>
        <div>For routing this is using next.js pages</div>
      </div>

      <div>
        <h2>Available pages</h2>
        <div>/</div>
        <div>/favorites</div>
        <div>/artist/album</div>
      </div>
    </div>
  );
}
