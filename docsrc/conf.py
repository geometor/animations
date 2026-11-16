from pathlib import Path
import sys

_REPO_ROOT = Path(__file__).resolve().parents[1]
if str(_REPO_ROOT) not in sys.path:
    sys.path.insert(0, str(_REPO_ROOT))

from photon_platform.publish.global_conf import *

version = "0.1.0"

org = "geometor"
org_name = "GEOMETOR"

repo = "constructions"
repo_name = "constructions"

setup_globals(org, org_name, repo, repo_name)
site_title = "Geometric Constructions"
project = site_title
html_title = f"{site_title} • {org_name}"

if "autoapi.extension" in extensions:
    extensions.remove("autoapi.extension")

html_theme = "foundation"
html_static_path = ["_static"]
