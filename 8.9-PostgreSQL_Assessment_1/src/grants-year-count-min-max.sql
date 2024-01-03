select count(*), min(amount), max(amount), fiscal_year
from grants
group by fiscal_year
order by fiscal_year desc;