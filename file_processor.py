import os
import json
import csv
from PyPDF2 import PdfReader

def process_uploaded_file(filepath):
    """
    Extract text content from supported file types:
    .txt, .md, .csv, .json, .pdf
    """
    _, ext = os.path.splitext(filepath)
    ext = ext.lower()

    try:
        if ext in [".txt", ".md"]:
            with open(filepath, "r", encoding="utf-8") as f:
                return f.read()

        elif ext == ".csv":
            with open(filepath, "r", encoding="utf-8") as f:
                reader = csv.reader(f)
                lines = []
                for row in reader:
                    lines.append(", ".join(row))
                return "\n".join(lines)

        elif ext == ".json":
            with open(filepath, "r", encoding="utf-8") as f:
                data = json.load(f)
                # Pretty-print JSON as string
                return json.dumps(data, indent=2)

        elif ext == ".pdf":
            reader = PdfReader(filepath)
            text = ""
            for page in reader.pages:
                text += page.extract_text() or ""
            return text

        else:
            return f"Unsupported file type: {ext}"

    except Exception as e:
        return f"Error processing file: {str(e)}"