import * as semver from "@std/semver";
import { parseArgs } from "@std/cli/parse-args";

if (import.meta.main) {
  const denoJson = Deno.readTextFileSync("deno.json");
  const args = parseArgs(Deno.args, {
    boolean: ["dry-run"],
  });
  const parsed = JSON.parse(denoJson);

  let next: semver.SemVer | null = null;

  switch (args._[0]) {
    case "minor":
      next = semver.increment(semver.parse(parsed.version), "minor");
      break;
    case "major":
      next = semver.increment(semver.parse(parsed.version), "major");
      break;
    default:
      next = semver.increment(semver.parse(parsed.version), "patch");
  }

  const version = semver.format(next);

  const overwrite = {
    ...parsed,
    version,
  };

  console.log(version);
  if (!args["dry-run"]) {
    Deno.writeTextFileSync("deno.json", JSON.stringify(overwrite, null, 2));
  }
}
