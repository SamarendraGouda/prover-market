import * as fs from "fs";
import * as snarkjs from "snarkjs";

export async function generateProof(a: number, b: number) {
  const wasmPath = "./addition_js/addition.wasm";
  const zkeyPath = "./addition_final.zkey";

  if (!fs.existsSync(wasmPath) || !fs.existsSync(zkeyPath)) {
    throw new Error("WASM or zkey file not found");
  }

  const input = {
    a: a,
    b: b,
  };

  try {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      input,
      wasmPath,
      zkeyPath
    );

    const vKey = JSON.parse(fs.readFileSync("./verification_key.json", "utf8"));
    const isValid = await snarkjs.groth16.verify(vKey, publicSignals, proof);

    console.log("Proof:", proof);
    console.log("Public Signals:", publicSignals);
    console.log("Is the proof valid?", isValid);

    return proof;
  } catch (error) {
    console.error("Error during proof generation:", error);
  }
}

// generateProof(3, 4);
