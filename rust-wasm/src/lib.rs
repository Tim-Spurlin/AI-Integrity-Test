use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn derive_tags(input: &str) -> JsValue {
  let tags: Vec<String> = input.split_whitespace().map(|s| s.to_string()).collect();
  JsValue::from_serde(&tags).unwrap()
}

#[wasm_bindgen]
pub fn compute_hash(data: &str) -> String {
  use sha3::{Digest, Sha3_256};
  let mut hasher = Sha3_256::new();
  hasher.update(data.as_bytes());
  format!("{:x}", hasher.finalize())
}